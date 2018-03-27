## Message 消息
---
### 概述
暂无

### 基本用法

<div class="demo-display">
  <div class="layout">
  <!-- 外面两层 demo-display 和 layout 记得加上 -->
    <us-button @click="$message({message: '示例通知消息', type: 'info', duration: 0})">打开Message</us-button>
  </div>
  <div class="code-display">

:::demo
```html
<us-button @click="$message({message: '示例通知消息', type: 'info', duration: 0})">打开Message</us-button>
```
:::
  </div>
</div>