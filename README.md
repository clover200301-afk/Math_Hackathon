# Math_Hackathon

数学黑客松 2026 网站项目

## 项目简介

这是一个数学黑客松活动的宣传网站，基于 React 19 + Tailwind 4 构建，使用 shadcn/ui 组件库。

## 技术栈

- **前端框架:** React 19 + TypeScript
- **路由:** Wouter
- **样式:** Tailwind CSS 4
- **UI 组件:** shadcn/ui
- **构建工具:** Vite 7
- **包管理器:** pnpm
- **服务端:** Express + Node.js

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 10

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000) 即可预览。

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 项目结构

```
├── client/               # 前端源码
│   ├── public/          # 静态资源（仅限 favicon、robots.txt 等小配置文件）
│   └── src/
│       ├── components/  # 可复用 UI 组件
│       ├── pages/       # 页面组件
│       ├── config/      # 网站配置（文本内容、联系方式等）
│       ├── contexts/    # React 上下文
│       ├── hooks/       # 自定义 Hooks
│       ├── lib/         # 工具函数
│       ├── App.tsx      # 路由与顶层布局
│       ├── main.tsx     # React 入口
│       └── index.css    # 全局样式
├── server/              # 服务端入口（生产环境静态资源托管）
├── shared/              # 前后端共享类型
└── package.json         # 项目依赖与脚本
```

## 内容配置

网站所有文本内容和联系信息都集中在 `client/src/config/site.ts` 中，修改该文件即可更新网站内容，无需改动页面组件。

## 开发规范

### 样式

- 使用 Tailwind 工具类与 shadcn/ui 组件进行布局和状态管理
- 保持设计一致性，通过 CSS 变量管理主题色
- 遵循设计指南中的动画规范（保持动画在 300ms 以内）

### 组件

- 优先使用 `@/components/ui/*` 中的 shadcn/ui 组件
- 可复用的 UI 片段提取到 `components/` 目录
- 新增 shadcn/ui 组件：`pnpm dlx shadcn@latest add <组件名>`

### 动画

- UI 动画时长控制在 300ms 以内
- 使用 `transform` 和 `opacity` 进行动画（GPU 加速）
- 按钮按下时添加 `scale(0.97)` 反馈
- 尊重 `prefers-reduced-motion` 设置

## 脚本命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产构建 |
| `pnpm check` | TypeScript 类型检查 |
| `pnpm format` | 格式化代码（Prettier） |

## License

MIT
