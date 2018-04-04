## Dropdown 下拉菜单
---
### 概述
暂无

### 基本用法


<div class="demo-display">
  <div class="layout">
  <!-- 外面两层 demo-display 和 layout 记得加上 -->
    <us-dropdown trigger="click" class="example" :options="{placement: 'bottom'}">
      <template slot="content">
        <us-dropdown-item>fuck you</us-dropdown-item>
        <us-dropdown-item>fuck you2</us-dropdown-item>
        <us-dropdown-item>fuck you3</us-dropdown-item>
      </template>
    </us-dropdown>
  </div>
<div class="code-display">

:::demo
```html
<us-dropdown trigger="click" class="example" :options="{placement: 'bottom'}">
  <template slot="content">
    <us-dropdown-item>fuck you</us-dropdown-item>
    <us-dropdown-item>fuck you2</us-dropdown-item>
    <us-dropdown-item>fuck you3</us-dropdown-item>
  </template>
 </us-dropdown>
```
:::

  </div>
</div>
