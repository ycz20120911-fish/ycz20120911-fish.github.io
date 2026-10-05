# 我的博客

一个零构建、零依赖的个人静态博客，配合 GitHub Pages 托管，外网可直接访问。

> 日常更新只需「**新建一篇 .md + 在 index.json 加一行 + 丢图片 + git push**」。

---

## 1. 目录结构

```
index.html              首页（JS 拉 posts/index.json 渲染文章列表）
post.html               文章详情页（?p=slug 读取对应 .md，marked 渲染）
about.html              关于页（直接编辑这个文件即可）
404.html                自定义 404 页（GitHub Pages 自动识别）
assets/
  style.css             样式（含暗色模式）
  main.js               首页逻辑
  post.js               详情页逻辑
  theme.js              主题切换逻辑（所有页面共用）
  marked.min.js         Markdown 渲染库（本地副本，无需联网）
posts/
  index.json            ★ 文章清单（手维护，按需新增）
  2026-10-05-welcome.md 示例文章
images/
  welcome-cover.svg     示例封面（可替换成你自己的 jpg/png/svg）
```

---

## 2. 本地预览

> ⚠️ 必须通过 HTTP 服务预览，**不能直接双击 html 打开**（`file://` 下 fetch 会被浏览器拦截）。

在仓库根目录任选一条命令运行：

```bash
# 方式 A：用 Node（已装 Node 即可用）
npx --yes serve

# 方式 B：用 Python
python -m http.server 8000
```

然后浏览器打开终端里显示的地址（一般是 `http://localhost:3000` 或 `http://localhost:8000`）。

---

## 3. 日常发新文章（5 步）

1. 在 `posts/` 新建一个 Markdown 文件，命名建议 `YYYY-MM-DD-slug.md`（如 `2026-10-06-rain.md`），写正文。
2. 把封面图 / 内文插图丢到 `images/`（jpg/png/webp/svg 都行）。
3. 在 `posts/index.json` **顶部** 加一条（注意 JSON 语法：上一条末尾要有逗号）：

   ```json
   [
     {
       "slug": "2026-10-06-rain",
       "title": "今天的雨",
       "date": "2026-10-06",
       "summary": "一场秋雨，写写路上的见闻。",
       "cover": "images/rain.jpg",
       "tags": ["日记", "天气"]
     },
     { ...旧文章... }
   ]
   ```
4. 提交并推送：

   ```bash
   git add .
   git commit -m "new post: 今天的雨"
   git push
   ```

5. **5–10 分钟后**网页生效（GitHub Pages 有缓存延迟，不是即时的）。

> `slug` 必须和文件名（去掉 `.md`）一致，且只能用字母、数字、`-`、`_`。
> `cover` 字段可省略，省略时卡片显示纯色渐变占位。
> `summary` 留空也行。
> `tags` 数组可空 `[]`。

---

## 4. 首次部署到 GitHub Pages

### 步骤

1. 在 GitHub 新建仓库。
   - **推荐**命名 `ycz20120911-fish.github.io`（例如 `tom.github.io`），这样能直接根路径生效，访问 `https://ycz20120911-fish.github.io/`。
   - 如果用别的仓库名（如 `blog`），访问地址会是 `https://ycz20120911-fish.github.io/blog/`，本站代码已经用相对路径，**可以直接工作**，无需额外配置。
2. 把本目录所有文件推送到 `main` 分支：

   ```bash
   git init
   git add .
   git commit -m "init blog"
   git branch -M main
   git remote add origin https://github.com/ycz20120911-fish/ycz20120911-fish.github.io.git
   git push -u origin main
   ```
3. 打开仓库 **Settings → Pages**，Source 选 `Deploy from a branch`，分支选 `main`、文件夹选 `/ (root)`，保存。
4. 等 1–2 分钟首次构建完成，Pages 设置页会显示访问地址。
5. （可选）绑自定义域名：在仓库根放一个 `CNAME` 文件，里面写你的域名（如 `blog.example.com`），再到域名 DNS 加一条 CNAME 指向 `ycz20120911-fish.github.io`。

### 国内访问

GitHub Pages 在国内访问有时偏慢，但仍可访问。如要追求速度，可考虑：
- 用 Cloudflare 套一层 CDN（自定义域名后）。
- 或选择 Vercel/Netlify 等替代托管（部署方式类似）。

---

## 5. 个性化

- **改站名**：`index.html`、`post.html`、`about.html`、`404.html` 里的「我的博客」字样都改一下（顶栏 `brand` 元素）。
- **改关于页**：直接编辑 `about.html`。
- **改配色**：编辑 `assets/style.css` 顶部的 CSS 变量（`--accent` 是主色调）。
- **页脚版权**：年份是 JS 自动填的，作者名直接改 footer 里的文字。
- **删示例文章**：删掉 `posts/2026-10-05-welcome.md` 和 `images/welcome-cover.svg`，同时从 `posts/index.json` 里去掉对应那条即可。

---

## 6. 常见坑

| 现象 | 原因 / 解决 |
| --- | --- |
| 首页一直显示「正在加载文章…」 | 多半是直接双击 html 打开了。请用 §2 的 HTTP 服务预览。 |
| 首页显示「加载文章列表失败」 | `posts/index.json` 路径错或 JSON 语法错（多/少逗号）。 |
| 文章详情页显示「文章不存在」 | URL 里 `?p=` 后的 slug 和文件名对不上，或 slug 含非法字符（只允许字母数字 `-` `_`）。 |
| 推送后过了几分钟网页还是旧版 | GitHub Pages 有 5–10 分钟缓存，多等一会或硬刷新（Ctrl+F5）。 |
| 仓库名不是 `用户名.github.io` | 访问地址是 `https://用户名.github.io/仓库名/`，本站用相对路径，仍然能工作。 |
| 图片不显示 | 检查路径是否以 `images/` 开头且文件名大小写一致（GitHub 区分大小写）。 |
| 本地访问不存在的 URL 显示纯文本 404 | 这是本地 server（`npx serve` / `python -m http.server` / `node` 脚本）的默认行为，**不会**自动用 `404.html`。**GitHub Pages 部署后会自动使用 `404.html`** 显示我们写的友好 404 页。本地想看 404 页效果，直接访问 `http://localhost:8000/404.html`。 |

---

## 7. 技术栈

- 纯 HTML + CSS + 原生 JS，**无构建步骤、无依赖**。
- Markdown 用 [marked](https://marked.js.org/) 的本地 vendored 副本（`assets/marked.min.js`），不依赖 CDN。
- 暗色模式：首次访问跟随系统 `prefers-color-scheme`，手动切换后写入 `localStorage` 并以手动值为准。
- 路由：`post.html?p=slug` 查询参数，简单可靠，无需服务端重写。
