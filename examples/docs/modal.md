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
<us-button @click="showModal = true">打开Modal</us-button>
<us-modal v-if="showModal" @close="showModal = false"></us-modal>
<script>
  export default {
    data () {
      return {
        showModal: false
      }
    }
  }
</script>
```
:::

  </div>
</div>