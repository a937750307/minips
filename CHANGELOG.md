# 变更记录

基于 https://github.com/viliusle/miniPaint 开源项目，

fork时间：2026年7月11日

变更时间：2026年7月11日

## 中文本地化

- 默认语言改为中文：`src/js/config.js` 中 `config.LANG = 'zh'`
- 修复默认语言初始化逻辑：`src/js/core/base-gui.js`
- 标题、logo 改成「迷你PS」
- `README.md`、`SECURITY.md` 改为中文

## UI 汉化

- 页面底部添加固定备案栏：`index.html`
- 添加全局翻译函数 `window.translate_text`
- 将大量 alertify 弹窗提示改为可翻译形式
- 在 `src/js/languages/zh.json` 中补充 50 多条英文提示的中文翻译
- 汉化「设置」弹窗中的标签和下拉框选项
- 修复 popup 下拉框 `<option>` 需要 `class="trn"` 才能被翻译的问题

## 部署与缓存

- 创建 `wrangler.toml`，指定只上传 `deploy/` 目录
- 创建 `scripts/prepare-deploy.js`，将静态文件复制到 `deploy/`
- `package.json` 增加 `build:deploy` 和 `deploy` 脚本
- 安装 `html-webpack-plugin`
- `webpack.config.js` 输出改为 `bundle.[contenthash].js`
- 由 `HtmlWebpackPlugin` 自动生成带 hash 引用的 `index.html`
- `prepare-deploy.js` 使用生成的 `dist/index.html`
