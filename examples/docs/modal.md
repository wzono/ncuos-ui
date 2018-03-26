<script>
  module.exports = {
    data () {
      return {
        showModal: false
      }
    }
  }
</script>

## Modal 模态框
---
### 概述
暂无

### 基本用法


<div class="demo-display">
  <div class="layout">
  <!-- 外面两层 demo-display 和 layout 记得加上 -->
    <us-button @click="showModal = true">打开Modal</us-button>
    <us-modal v-if="showModal" @close="showModal = false"></us-modal>
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