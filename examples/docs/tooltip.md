## Tooltip 轻提示
---
### 概述
暂无

### 基本用法


<div class="demo-display">
  <div class="layout">
  <!-- 外面两层 demo-display 和 layout 记得加上 -->
    <us-tooltip position="top">
      <template slot="content">Tooltip内容</template>
      <template slot="control">
        <us-button type="primary">Tooltip</us-button>
      </template>
    </us-tooltip>
  </div>
<div class="code-display">

:::demo
```html
<us-tooltip position="top">
  <template slot="content">Tooltip内容</template>
  <template slot="control">
    <us-button type="primary">Tooltip</us-button>
  </template>
</us-tooltip>
```
:::

  </div>
</div>
