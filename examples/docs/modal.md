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
    <us-modal title="示例标题" v-if="showModal" @close="showModal = false">
      <template slot="body">
        <p>示例内容十五字</p>
        <p>示例内容十五字</p>
        <p>示例内容十五字</p>
      </template>
    </us-modal>
  </div>
  <div class="code-display">

:::demo
```html
<us-button @click="showModal = true">打开Modal</us-button>
<us-modal title="示例标题" v-if="showModal" @close="showModal = false">
  <template slot="body">
    <p>示例内容十五字</p>
    <p>示例内容十五字</p>
    <p>示例内容十五字</p>
  </template>
</us-modal>
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