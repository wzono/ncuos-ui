<script>
  module.exports = {
    data () {
      return {
        date: null
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
    <us-datetime v-model="date" format="YYYY-MM-DD hh:mm" precision="H"></us-datetime>
  </div>
  <div class="code-display">

:::demo
```html
<script>
  export default {
    data () {
      return {
        date: ''
      }
    }
  }
</script>
```
:::

  </div>
</div>
