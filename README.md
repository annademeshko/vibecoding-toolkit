# Vibecoding Toolkit

Личная библиотека для вайбкодинга: **skills, prompts, reusable code, UI effects и шаблоны**.

Не коллекция всего подряд: каждый файл должен решать реальную задачу и быть пригодным к повторному использованию.

## Структура

```text
vibecoding-toolkit/
├── skills/                   # Инструкции для AI-агентов
│   ├── product-ui-craft/     # Unslop + Figma + iOS + web + motion
│   ├── next-move-theory/    # Advanced JTBD + product strategy
│   └── liquid-metal-border/ # Chrome/prism CSS effect + preview + demo
├── snippets/                 # Рабочий переиспользуемый код
│   ├── css/                  # CSS-токены и визуальные эффекты
│   ├── react/                # React/TypeScript utilities
│   └── swiftui/              # SwiftUI styles
├── prompts/                  # Готовые промпты для задач
├── templates/                # Чек-листы и структуры проектов
├── AGENTS.md                 # Общие правила для кодинг-агентов
├── CONTRIBUTING.md           # Как добавлять новые материалы
└── LICENSE                  # Лицензия на оригинальные файлы
```

## Первый скилл: Product UI Craft

Адаптация [Unslop — Damir Sokolovsky](https://github.com/heydamir/unslop) под продуктовый дизайн.

- Работает с Figma, Auto Layout, компонентами и токенами.
- Сохраняет существующий бренд и точные референсы.
- Учитывает iOS, UX, accessibility, responsive и motion.
- Проверяет реальный результат, а не только код.

[Открыть SKILL.md](skills/product-ui-craft/SKILL.md) · [Атрибуция](skills/product-ui-craft/ATTRIBUTION.md)

### Подключение к Codex

Скопируйте папку скилла в локальную директорию навыков или добавьте в проект:

```bash
mkdir -p .agents/skills
cp -R skills/product-ui-craft .agents/skills/product-ui-craft
```

Либо держите этот репозиторий рядом с проектом и явно прикладывайте файл `skills/product-ui-craft/SKILL.md` к задаче.

### Подключение к Claude Code

```bash
mkdir -p .claude/skills
cp -R skills/product-ui-craft .claude/skills/product-ui-craft
```

Используйте только в поддерживаемом окружении; сам репозиторий не устанавливает скилл в ChatGPT автоматически.

## Next Move Theory — Product Strategy Toolkit

Отдельная система продуктовых скиллов на основе **Next Move Theory / Advanced Jobs To Be Done** Ивана Замесина. Нужна, чтобы понять **что создавать, для кого и что проверить перед разработкой**.

Поддерживает продуктовую стратегию, исследования рынка и интервью, сегментацию по Jobs, ценностные предложения, PRD и go-to-market.

[Все сценарии, установка и примеры](skills/next-move-theory/README.md) · [Основной скилл](skills/next-move-theory/SKILL.md) · [Приватный плагин ChatGPT](https://chatgpt.com/plugins/plugins_6b0465893afc81919b4360eaa8f52e3a)

**Лицензия:** производные материалы — CC BY-NC-SA 4.0, автор Ivan Zamesin; на них не распространяется MIT-лицензия этой библиотеки. [Оригинальный репозиторий](https://github.com/zamesin/Next-Move-Theory-Canon-and-Skills).

## Liquid Metal Border — reusable CSS skill

Source-derived **silver/graphite chrome rim** with three narrow rainbow spectral glints and a 16-second orbit, as used on the contact dock and hover case cards of [Anna's portfolio](https://annademeshko.com/). No WebGL and no JavaScript dependencies for the border itself.

- [Full skill and implementation guide](skills/liquid-metal-border/README.md)
- [Ready-to-copy CSS](skills/liquid-metal-border/src/liquid-metal-border.css)
- [Interactive UI demo](skills/liquid-metal-border/demo/index.html) · [Preview](skills/liquid-metal-border/assets/preview.svg)
- [Reusable AI prompt](skills/liquid-metal-border/prompts/implement-liquid-metal-border.md)
- [Private ChatGPT plugin](https://chatgpt.com/plugins/plugins_6b046c0da82081918f1ed6655d60d261)

## Как пользоваться

**Для дизайн-задачи** — взять `skills/product-ui-craft/SKILL.md` и соответствующий файл из `prompts/`.

**Для кода** — скопировать конкретный сниппет из `snippets/`, проверить API и адаптировать к дизайн-системе проекта.

**Для проверки** — пройти чек-лист из `templates/` и сравнить экран с исходным референсом.

## Принципы

1. Сохранять назначение продукта и проверенную дизайн-систему.
2. Не подменять точное воспроизведение «творческой интерпретацией».
3. Избегать AI-looking декора ради декора.
4. Проверять состояния, адаптивность, доступность и reduced motion.
5. Не добавлять неподтверждённые фичи и фиктивные метрики.
6. Публиковать рабочий код с назначением и примером использования.

## Лицензии

Оригинальный код и документы этого репозитория — MIT (см. `LICENSE`). Материалы `skills/product-ui-craft/`, адаптированные из Unslop, распространяются на условиях **CC BY 4.0** с указанием авторства Damir Sokolovsky. См. атрибуцию внутри папки скилла. Next Move Theory использует CC BY-NC-SA 4.0; см. skills/next-move-theory/ATTRIBUTION.md.

## Adam Perlis → ChatGPT Toolkit (23 skills)

Адаптированный под ChatGPT и Codex набор рабочих инструкций по дизайну, frontend, WebGL/motion, SEO и производству видео. Сохранены ссылки на первоисточники и ограничения платформ.

- [Полный каталог и инструкции](skills/adam-perlis-chatgpt/README.md)
- [Сопоставление всех 9 проектов Adam Perlis](skills/adam-perlis-chatgpt/SOURCE-AUDIT.md)
- [Приватный плагин ChatGPT](https://chatgpt.com/plugins/plugins_6b046d93eb988191bf0f09ae2884cfe9)
- [ZIP с навыками для ChatGPT/Codex](skills/adam-perlis-chatgpt/README.md#installation)

**Важно:** скилл — это инструкция, а не самостоятельная установка внешнего MCP-сервера или редактора. Walkie MCP требует отдельного подключения, а Omarchy Walkie — Linux/Omarchy. Оригинальные бренд-ассеты Gaia и исходники 3D-персонажа не включены.
