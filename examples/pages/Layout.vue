<template>
  <div class="hello">
    <h1>布局测试页面</h1>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          aaa
        </div>
        <div class="col-md-6"></div>
      </div>
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
    background-color: rgba(86,61,124,.15);
    border: 1px solid rgba(86,61,124,.2);
  }
}
</style>