<template>
  <div class="hello">
    <h1>组件测试页面</h1>
    <section class="card">
      <div class="header">标题/TITLES</div>
      <div class="body">
        
      </div>
    </section>
    <section class="card">
      <div class="header">按钮/BUTTONS</div>
      <div class="body">
        
      </div>
    </section>
    <section class="card">
      <div class="header">表单控件/FORM CONTROLS</div>
      <div class="body">
        
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Components',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss">
.hello {
  text-align: center;
  * {
    box-sizing: border-box;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 10px;
      a {
        color: #42b983;
      }
    }
  }
  .card {
    width: 100%;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    padding: 18px 20px;
    text-align: left;
    margin: 24px 0;
    .header {
      padding: 18px 20px;
      border-bottom: 1px solid #ebeef5;
      box-sizing: border-box;
      font-weight: 700;
    }
    .body {
      height: auto;
      padding: 18px;
      padding-left: 20px;
    }
  }
}
</style>