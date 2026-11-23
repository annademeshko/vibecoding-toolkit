import React, { CSSProperties, ElementType, ReactNode } from "react";
import "../src/liquid-metal-border.css";

type Props = {
  children: ReactNode;
  as?: ElementType;
  variant?: "always" | "hover" | "still";
  radius?: number;
  thickness?: number;
  duration?: number;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export function LiquidMetalBorder({ children, as: Component = "div", variant = "always",
  radius = 26, thickness = 1.5, duration = 16, className = "", style, ...props }: Props) {
  const vars = { "--lmb-radius": `${radius}px`, "--lmb-thickness": `${thickness}px`,
    "--lmb-duration": `${duration}s`, ...style } as CSSProperties;
  const mod = variant === "always" ? "" : `liquid-metal-border--${variant}`;
  return <Component className={`liquid-metal-border ${mod} ${className}`.trim()} style={vars} {...props}>{children}</Component>;
}
// <LiquidMetalBorder as="button" variant="hover" radius={14}>Get in touch</LiquidMetalBorder>
