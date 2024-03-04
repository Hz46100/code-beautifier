# 代码美化 Demo

## 介绍

此应用依托于 Node.js、Express 和 js-beautify 技术构建，具备前后端交互式代码美化功能。用户可在前端页面内的文本区域内输入 JavaScript 代码，点击“美化”按钮后，前端借助 AJAX 技术将代码传输至后端服务器。后端接收到代码后运用 js-beautify 进行美化处理，并将美化完成的代码回传至前端页面展示。同时，还支持将美化后的代码复制到剪贴板以及下载为 `.js` 文件。

### 文件结构概览

```
├── package.json
├── public
│   ├── index.html
│   └── client.js
└── server.js
```

### 如何运行

#### 1. 安装依赖项

在项目根目录下依次执行以下命令：

```sh
npm init -y
npm install express js-beautify axios body-parser
```

#### 2. 启动后端服务

执行以下命令启动后端服务器：

```sh
node server.js
```

#### 3. 访问前端页面

服务启动成功后，打开浏览器访问 `http://localhost:3000`，即可体验代码美化功能。

---
