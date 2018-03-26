## Layout 布局
---
### 概述
栅格化设计是按照一定的规则把页面分成固定的相同宽度，然后列出各种组合的可能性，以便于在进行页面呈现的时候能够快速的进行布局。我们采用的是十二栅格布局，源码核心为`bootstrap4.0`。

### 基础布局


<div class="demo-display">
  <div class="layout">
  <!-- 外面两层 demo-display 和 layout 记得加上 -->
    <div class="container">
      <us-row>
        <us-col :xs="6" class="purple" style="height: 36px; text-align: center; border-radius: 5px; line-height: 36px;"></us-col>
        <us-col :xs="6" class="purple-dark" style="height: 36px; text-align: center; border-radius: 5px; line-height: 36px;"></us-col>
      </us-row>
      <button @click="$notify({title: 'TEST', message: 'Test successfully.', duration: 0})">test</button>
    </div>
  </div>
  <div class="code-display">

:::demo
```html
<div class="container">
  <us-row>
    <us-col :md="6" class="purple" style="height: 36px; text-align: center; border-radius: 5px; line-height: 36px;"></us-col>
    <us-col :md="6" class="purple-dark" style="height: 36px; text-align: center; border-radius: 5px; line-height: 36px;"></us-col>
  </us-row>
</div>
```
:::

  </div>
</div>