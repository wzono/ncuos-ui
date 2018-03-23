<template>
  <div class="hello">
    <h1>布局测试页面</h1>
    <hr>
    <div class="container">
      <us-row>
        <us-col :xs="3" :md="6">aaa</us-col>
      </us-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
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
  [class^=col-] {
    border-radius: 4px;
    height: 36px;
    line-height: 36px;
    background-color: rgba(86,61,124,.15);
    border: 1px solid rgba(86,61,124,.2);
  }
}
</style>