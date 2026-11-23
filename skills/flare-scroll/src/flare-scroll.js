/* Flare Scroll — reusable WebGL wave renderer. MIT License.
   Public API: new FlareScroll(canvas, options), setProgress(), setColors(),
   setSoftness(), setCrest(), resize(), destroy(). No dependencies. */
(function (global) {
  'use strict';
  const clamp = (n, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, n));
  const ease = (a,b,p) => { let t=clamp((p-a)/(b-a)); return t*t*(3-2*t); };
  const DEFAULTS = Object.freeze({
    colors: { dark: '#000000', accent: '#2E74E2', light: '#FFFFFF' },
    softness: 1.25,
    crest: 1.0,
    pixelRatioCap: 2,
    first: { start: .165, end: .425, amplitude: .64, width: .30 },
    second: { start: .555, end: .820, amplitude: .56, width: .294 },
    introRevealEnd: .15,
    introGuardDistance: .66
  });
  const CENTERS = [-.49,-.375,-.265,-.155,-.045,.068,.18,.29];
  const FEATHERS = [.056,.055,.053,.052,.054,.057,.059,.061];
  function hexColor(hex) {
    if (typeof hex !== 'string') throw new TypeError('Color must be a CSS hex string');
    const s=hex.trim().replace(/^#/, '');
    if (!/^(?:[\da-f]{3}|[\da-f]{6})$/i.test(s)) throw new Error('Use #RGB or #RRGGBB: '+hex);
    const h=s.length===3 ? s.split('').map(x=>x+x).join('') : s;
    return [0,2,4].map(i=>parseInt(h.slice(i,i+2),16));
  }
  function hex(rgb) { return '#'+rgb.map(n=>Math.round(clamp(n,0,255)).toString(16).padStart(2,'0')).join('').toUpperCase(); }
  function mix(a,b,t) { return a.map((v,i)=>v+(b[i]-v)*t); }
  // A single accent color creates nine graded stops, leaving endpoints configurable.
  function makePalette({dark='#000000',accent='#2E74E2',light='#FFFFFF'}={}) {
    const d=hexColor(dark),a=hexColor(accent),l=hexColor(light);
    return [d,mix(d,a,.07),mix(d,a,.18),mix(d,a,.44),mix(d,a,.72),mix(a,l,.16),mix(a,l,.50),mix(a,l,.79),l].map(hex);
  }
  const VERTEX = `attribute vec2 a_position; void main(){gl_Position=vec4(a_position,0.,1.);}`;
  const FRAGMENT = `
    precision highp float;
    uniform vec2 u_resolution;
    uniform float u_progress,u_softness;
    uniform vec4 u_first,u_second;
    uniform vec2 u_intro;
    uniform vec3 u_palette[9];
    float ease(float a,float b,float p){float t=clamp((p-a)/(b-a),0.,1.);return t*t*(3.-2.*t);}
    float crest(float x,float width){float n=abs(x-.5)/width;return .60*exp(-pow(n,2.20))+.40*exp(-pow(n/.53,1.35));}
    float bump(float x,float width){float n=abs(x-.5)/width;return exp(-pow(n,2.25));}
    float band(float d,float center,float feather){float t=clamp((d-center)/(feather*u_softness),-30.,30.);return 1./(1.+exp(-t));}
    vec3 ramp(float d){
      vec3 c=u_palette[0];
      c+=(u_palette[1]-u_palette[0])*band(d,-.490,.056);
      c+=(u_palette[2]-u_palette[1])*band(d,-.375,.055);
      c+=(u_palette[3]-u_palette[2])*band(d,-.265,.053);
      c+=(u_palette[4]-u_palette[3])*band(d,-.155,.052);
      c+=(u_palette[5]-u_palette[4])*band(d,-.045,.054);
      c+=(u_palette[6]-u_palette[5])*band(d, .068,.057);
      c+=(u_palette[7]-u_palette[6])*band(d, .180,.059);
      c+=(u_palette[8]-u_palette[7])*band(d, .290,.061);
      return c;
    }
    void main(){
      vec2 uv=gl_FragCoord.xy/u_resolution;
      float x=uv.x,y=1.-uv.y,p=u_progress;
      float w1=ease(u_first.x,u_first.y,p),w2=ease(u_second.x,u_second.y,p);
      float intro=u_intro.y*(1.-ease(0.,u_intro.x,p));
      float f1=mix(1.65,-.83,w1)-u_first.z*crest(x,u_first.w)+intro;
      float f2=mix(1.66,-.83,w2)+u_second.z*bump(x,u_second.w);
      float d1=y-f1,d2=f2-y;
      vec3 color=mix(ramp(d1),ramp(d2),ease(u_second.x,u_second.x+.015,p));
      if(p<=.000001) color=u_palette[0];
      else {
        float grain=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
        color+=(grain-.5)/255.;
      }
      gl_FragColor=vec4(clamp(color,0.,1.),1.);
    }`;
  function shader(gl,type,source) {
    const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);
    if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));
    return s;
  }
  class FlareScroll {
    constructor(canvas, options={}) {
      if (!(canvas instanceof HTMLCanvasElement)) throw new TypeError('FlareScroll requires a canvas element');
      this.canvas=canvas;
      this.options={...DEFAULTS,...options,first:{...DEFAULTS.first,...options.first},second:{...DEFAULTS.second,...options.second}};
      this.progress=0;
      this.softness=this.options.softness;
      this.crest=this.options.crest;
      this.colors={...DEFAULTS.colors,...options.colors};
      this.palette=options.palette || makePalette(this.colors);
      this.gl=null;this.ctx=null;this._buffer=null;
      try { this._initWebGL(); }
      catch(error){
        console.warn('Flare Scroll: WebGL unavailable; using Canvas 2D.',error);
        this.gl=null;
        this.ctx=canvas.getContext('2d',{alpha:false});
        if(!this.ctx)throw new Error('Neither WebGL nor Canvas 2D is available');
      }
      this._syncPalette();this.resize();this.render();
    }
    _initWebGL(){
      const gl=this.canvas.getContext('webgl',{alpha:false,antialias:false,depth:false,stencil:false});
      if(!gl)throw Error('No WebGL context');
      this.gl=gl;
      const vs=shader(gl,gl.VERTEX_SHADER,VERTEX),fs=shader(gl,gl.FRAGMENT_SHADER,FRAGMENT);
      const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);
      if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));
      gl.useProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);
      this.program=program;
      this._buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,this._buffer);
      gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
      const attr=gl.getAttribLocation(program,'a_position');gl.enableVertexAttribArray(attr);gl.vertexAttribPointer(attr,2,gl.FLOAT,false,0,0);
      this.u={};for(const name of ['resolution','progress','softness','first','second','intro'])this.u[name]=gl.getUniformLocation(program,'u_'+name);
      this.u.palette=gl.getUniformLocation(program,'u_palette[0]');
      gl.uniform2f(this.u.intro,this.options.introRevealEnd,this.options.introGuardDistance);
      this._syncGeometry();this._syncPalette();
    }
    _syncGeometry(){
      if(!this.gl)return;
      const g=this.gl,a=this.options.first,b=this.options.second;
      g.uniform4f(this.u.first,a.start,a.end,a.amplitude*this.crest,a.width);
      g.uniform4f(this.u.second,b.start,b.end,b.amplitude*this.crest,b.width);
      g.uniform1f(this.u.softness,this.softness);
    }
    _syncPalette(){
      if(!Array.isArray(this.palette)||this.palette.length!==9)throw Error('palette must contain exactly nine hex colors');
      this.rgb=this.palette.map(hexColor);
      if(this.gl)this.gl.uniform3fv(this.u.palette,new Float32Array(this.rgb.flat().map(v=>v/255)));
      this._lookup=null;
    }
    setColors(colors){
      this.colors={...this.colors,...colors};this.palette=makePalette(this.colors);
      this._syncPalette();this.render();return this;
    }
    setPalette(nineHexColors){this.palette=[...nineHexColors];this._syncPalette();this.render();return this;}
    setSoftness(value){this.softness=clamp(Number(value),.55,2.4);this._syncGeometry();this.render();return this;}
    setCrest(value){this.crest=clamp(Number(value),.45,1.65);this._syncGeometry();this.render();return this;}
    setProgress(value){this.progress=clamp(Number(value)||0);this.render();return this;}
    resize(){
      const rect=this.canvas.getBoundingClientRect();if(!rect.width||!rect.height)return this;
      const dpr=Math.min(window.devicePixelRatio||1,this.options.pixelRatioCap);
      const w=Math.max(1,Math.round(rect.width*dpr)),h=Math.max(1,Math.round(rect.height*dpr));
      if(this.canvas.width!==w||this.canvas.height!==h){this.canvas.width=w;this.canvas.height=h;}
      if(this.gl){this.gl.viewport(0,0,w,h);this.gl.uniform2f(this.u.resolution,w,h);}
      return this;
    }
    _colorAt(d){
      const o=[...this.rgb[0]];
      for(let i=0;i<8;i++){
        const t=clamp((d-CENTERS[i])/(FEATHERS[i]*this.softness),-30,30);
        const w=1/(1+Math.exp(-t));
        for(let j=0;j<3;j++)o[j]+=(this.rgb[i+1][j]-this.rgb[i][j])*w;
      }
      return o;
    }
    _render2d(){
      const ctx=this.ctx;if(!ctx)return;
      // Render at a reduced grid then scale; softened curves hide pixelation.
      const cw=this.canvas.width,ch=this.canvas.height;
      const w=Math.min(450,Math.max(80,Math.round(cw*.40)));
      const h=Math.min(360,Math.max(80,Math.round(ch*.40)));
      if(!this._cpu||this._cpu.width!==w||this._cpu.height!==h){
        this._cpu=document.createElement('canvas');this._cpu.width=w;this._cpu.height=h;
        this._image=this._cpu.getContext('2d').createImageData(w,h);
      }
      if(!this._lookup){this._lookup=new Uint8Array(4096*3);
        for(let i=0;i<4096;i++){const c=this._colorAt(-.90+i/4095*1.75);for(let j=0;j<3;j++)this._lookup[i*3+j]=c[j];}}
      const p=this.progress, a=this.options.first,b=this.options.second;
      const wa=ease(a.start,a.end,p),wb=ease(b.start,b.end,p),change=ease(b.start,b.start+.015,p);
      const intro=this.options.introGuardDistance*(1-ease(0,this.options.introRevealEnd,p));
      const f1Base=1.65-2.48*wa+intro,f2Base=1.66-2.49*wb;
      const data=this._image.data;
      for(let x=0;x<w;x++){
        const nx=x/w,cr=Math.abs(nx-.5)/a.width,br=Math.abs(nx-.5)/b.width;
        const wave1=f1Base-a.amplitude*this.crest*(.60*Math.exp(-(cr**2.2))+.40*Math.exp(-((cr/.53)**1.35)));
        const wave2=f2Base+b.amplitude*this.crest*Math.exp(-(br**2.25));
        for(let y=0;y<h;y++){
          const d=(1-change)*(y/h-wave1)+change*(wave2-y/h);
          const k=Math.round(clamp((d+.90)/1.75)*4095)*3,idx=(y*w+x)*4;
          for(let j=0;j<3;j++)data[idx+j]=p<=.000001?this.rgb[0][j]:this._lookup[k+j];
          data[idx+3]=255;
        }
      }
      this._cpu.getContext('2d').putImageData(this._image,0,0);
      ctx.imageSmoothingEnabled=true;ctx.drawImage(this._cpu,0,0,cw,ch);
    }
    render(){
      if(this.gl){this.gl.uniform1f(this.u.progress,this.progress);this.gl.drawArrays(this.gl.TRIANGLES,0,6);}
      else this._render2d();
      return this;
    }
    destroy(){if(this.gl){this.gl.deleteBuffer(this._buffer);this.gl.deleteProgram(this.program);}this.gl=null;this.ctx=null;}
  }
  FlareScroll.DEFAULTS=DEFAULTS;
  FlareScroll.makePalette=makePalette;
  global.FlareScroll=FlareScroll;
})(window);
