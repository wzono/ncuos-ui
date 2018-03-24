<div id="container" style="padding: 50px">
  # NCUOS UI 开发说明

  `NCUOS-UI` 基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发家园工作室相关产品。

  <p align="center">
    <a href="https://coding.net/u/Futurer/p/ncuos-ui/git">
      <img width="500" src="https://coding.net/u/Futurer/p/ncuos-ui/git/raw/develop/examples/assets/logo.png">
    </a>
  </p>
  <p align="center">
      <img src="https://img.shields.io/badge/npm-5.6.0-brightgreen.svg" alt="npm version">
      <img src="https://img.shields.io/badge/node-%3E%3D%208.00-brightgreen.svg" alt="node version">
      <img src="https://img.shields.io/badge/version-0.0.1-brightgreen.svg" alt="ui version">
      </p>

  ## 项目结构

  ```js
  .
  ├── build                                   // webpack 构建目录
  ├── config                                  // webpack 配置目录
  ├── examples                                // 用于构建文档页面
  │   ├── assets                              // 文档所需易变更的资源
  │   ├── components                          // 文档组件
  │   ├── docs                                // 文档细则
  │   ├── pages                               // 文档页面
  │   ├── router                              // 文档路由
  │   ├── App.vue                             // 文档首页
  │   └── main.js                             // 文档入口
  ├── packages                                // 核心 组件模块编写
  ├── src                                     // 通用资源
  │   ├── demo                                // 组件编写样例
  │   ├── styles                              // 样式总表
  │   │   ├── common                          // 公共样式
  │   │   ├── components                      // 组件样式
  │   │   ├── mixins                          // 混合宏
  │   │   ├── _variable.scss                  // 变量
  │   │   └── index.scss                      // 总体导入
  │   └──index.js                                // 注册packages内插件并导出组件集
  ├── static                                  // 静态资源
  ├── index.html                              // 打包html入口
  ├── LICENSE                                 // 开源协议
  ├── package.json                            // 项目说明
  ├── package-lock.json
  ├── README.md                               // readme
  └── test                                    // 测试
  ```

  ## 资源位置

  `static`放静态资源，如图片等。 而`examples/assets`中，则放置可能会打包进代码的资源。如全局小png，一些js等。

  ## 组件编写

  ### 组件命名

  (us-前缀）

  ```HTML
  <us-button>click me!<us-button>
  ```

  ### 组件目录

  单个组件文件夹命名均为小写，以`us-button`为例，目录结构如下：

  ```bash
  ·
  ├── button
  │   ├── src
  │   │   └── button.vue
  └── index.js
  ```

  ## LISCENCE
  MIT
</div>


