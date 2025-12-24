# IPPC Lab 实验室主页 (Vue 3 重构版)

本项目是西南石油大学计算机与软件学院 **IPPC Lab (图像处理及并行计算实验室)** 的官方展示网页。

为了方便后续维护和扩展，本项目已从纯静态 HTML 升级为基于 **Vue 3 + Vite** 的现代化前端工程。

## ✨ 主要特性

*   **现代化架构**：使用 Vue 3 组件化开发，结构清晰，易于维护。
*   **数据驱动**：所有的成员信息、论文列表均通过 JSON 数据文件管理。**修改内容不需要改动代码！**
*   **极速开发**：基于 Vite，提供秒级启动和热更新体验。
*   **响应式设计**：基于 Bootstrap 5 定制，完美适配手机、平板和桌面端。
*   **Github Pages 部署**：内置部署脚本，一键发布。

## 📁 目录结构

```
.
├── public/              # 静态资源目录
│   └── images/          # 图片文件 (成员照片、论文配图等放这里)
├── src/
│   ├── assets/          # 样式文件 (SCSS)
│   ├── components/      # Vue 组件 (导航、卡片、列表等)
│   ├── data/            # 📌 数据中心 (维护者主要关注这里)
│   │   ├── articles.json # 论文列表数据
│   │   └── members.json  # 实验室成员数据
│   ├── App.vue          # 主页面结构
│   └── main.js          # 程序入口
├── index.html           # 网页入口
├── package.json         # 项目依赖配置
└── vite.config.js       # 构建配置
```

## 🚀 快速开始

你需要先安装 [Node.js](https://nodejs.org/) (推荐 v18 或更高版本)。

### 1. 安装依赖

打开终端（Terminal），进入项目目录并运行：

```bash
npm install
```

### 2. 本地开发

运行以下命令启动本地开发服务器：

```bash
npm run dev
```

启动后，浏览器会自动打开 `http://localhost:5173`。你对代码或数据的任何修改都会实时刷新。

## 📝 如何更新内容

### 添加/修改成员

打开 `src/data/members.json`，在数组中添加或修改对象：

```json
{
  "name": "姓名",
  "title": "职称 (e.g. Professor)",
  "image": "/images/your-photo.jpg",  // 确保图片已放入 public/images/ 目录
  "link": "个人主页链接 (如果没有可留空)"
}
```

### 添加/修改论文

打开 `src/data/articles.json`：

```json
{
  "title": "论文标题",
  "journal": "发表期刊/会议",
  "date": "发表时间",
  "authors": "作者列表",
  "link": "论文链接",
  "image": "/images/paper-fig.jpg",
  "type": 1  // 1: 计算机视觉, 2: 大数据/HPC, 3: 智能油气
}
```

## 📦 打包与发布

### 构建

如果你想生成用于生产环境的静态文件：

```bash
npm run build
```

构建产物会生成在 `dist/` 目录下。

### 发布到 GitHub Pages

本项目已配置自动部署脚本。确保你有仓库的推送权限，然后运行：

```bash
npm run deploy
```

该命令会自动执行构建，并将 `dist/` 目录推送到远程仓库的 `gh-pages` 分支，GitHub 会自动更新线上页面。

## 🎨 样式定制

如果你需要修改配色或字体，请编辑 `src/assets/styles.scss`。该文件覆盖了 Bootstrap 的默认变量。

---

*2025年12月 更新*
