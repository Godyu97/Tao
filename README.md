# 慢读 · 道德经

Next.js App Router、TypeScript、Tailwind CSS 与 Bun runtime 驱动的中英双语阅读网站。

## 开发

```sh
bun install
bun run dev
```

访问 http://localhost:3000。

## 检查与生产运行

```sh
bun run lint
bun run build
bun run start
```

开发、构建和生产脚本显式使用 `bun --bun next`。部署环境需安装 Bun（初始化版本 1.4.2），CI 使用 `bun install --frozen-lockfile`。当前采用 Next.js 服务部署，未配置静态导出。

## 结构

- `src/app/page.tsx`：首页与目录。
- `src/app/[lang]/chapters/38/page.tsx`：中文和英文章节页。
- `content/chapter-38.json`：完整原文、译文、解读及版本说明。HTML 为仓库内受信任内容，不应直接写入未经清洗的用户输入。
- `src/components/reader.tsx`：字号调节与本地保存、阅读进度、段落导航。
- `src/app/globals.css`：Tailwind 入口、奶油白与松绿色主题、响应式阅读与打印样式。

页面地址为 `/zh/chapters/38` 和 `/en/chapters/38`。旧 HTML 地址由永久重定向兼容。视觉采用奶油白、松绿色、大留白和柔和山丘插画。原文使用独立浅绿阅读区，现代解读另行分节，并保留异体字说明。手机布局提供分行目录；支持双语切换、16–24px 字号调节及阅读进度。

目前收录第三十八章「天网」（对应通行本第七十三章）。章次依所提供材料，保留异体字，原始版本尚未核定；现代阐释与原文分开呈现。
