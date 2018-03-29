## 开发文档

为了项目的管理以及迭代，开发的相关规定是重要且必要的。我们相信没有完美的开发协作流程，方案不是一成不变的，有问题可以提，但在没有更好的方案前。请遵守它。

---

### 项目结构

```bash
.
├── build                                   # webpack 构建目录
├── config                                  # webpack 配置目录
├── examples                                # 用于构建文档页面
│   ├── assets                              # 文档所需易变更的资源
│   ├── components                          # 文档组件
│   ├── docs                                # 文档细则
│   ├── pages                               # 文档页面
│   ├── router                              # 文档路由
│   ├── nav.config.json                     # 页面路由导航
│   ├── nav.config.template.json            # 页面路由导航模板
│   ├── App.vue                             # 文档首页
│   └── main.js                             # 文档入口
├── packages                                # 核心 组件模块编写
├── src                                     # 通用资源
│   ├── demo                                # 组件编写样例
│   ├── styles                              # 样式总表
│   │   ├── common                          # 公共样式
│   │   ├── components                      # 组件样式
│   │   ├── mixins                          # 混合宏
│   │   ├── _variable.scss                  # 变量
│   │   └── index.scss                      # 总体导入
│   └──index.js                             # 注册packages内插件并导出组件集
├── static                                  # 静态资源
├── index.html                              # 打包html入口
├── LICENSE                                 # 开源协议
├── package.json                            # 项目说明
├── package-lock.json
├── README.md                               # readme
└── test                                    # 测试
```

### 使用

采用 `Vue 2.0` 单页开发，以下为开发步骤

```bash
git clone https://github.com/wingsico/ncuos-ui.git
npm install       # cnpm install or yarn install
npm run start
```

即可在 [http://127.0.0.1:8080](http://127.0.0.1:8080) 进行开发

### 代码规范

#### 组件

* `class` 采用中划线命名，采用命名空间的方式防止重复命名，格式: `${compoent}-${container}-${type}`, 如 `class="button-wrapper-icon"`
* `compoent` 采用小写命名，且目录结构如: 

  ```bash
  ├──button
  │  ├── src
  │  │    └── main.vue
  │  └── index.js
  ```
* `style` 无 `scoped`，使用 `sass` 开发
* 常量大写+下划线，函数名驼峰式命名
* 组件内整体结构：

  ```html
    
  ```

### 分支规范

- 新组件开发请新开分支:`feature-组件名`
- 非组件内功能请开分支：`feature-featureName`
- bug修复分支：`bugfix-组件名-bugInfo`|  `bugfix-bugInfo`
> 若为组件内bug请在分支名加上具体的组件名，若非组件bug则不需

在单个组件分支测试无问题可合并到develop分支，确定无兼容或其他迷之问题可合并到master分支

具体规范请依照家园工作室git飞行手册