<template>
  <div class="hello">
    <h1>布局测试页面</h1>
    <hr>
    <div class="container">
      <us-row>
        <us-col class="test" :span="6">col-6</us-col>
        <us-col class="test" :span="6">col-6</us-col>
      </us-row>
      <us-row>
        <us-col class="test" :span="12" :sm="12" :md="6" :lg="5" :xl="4">col-12 sm-12 md-6 lg-5 xl-4</us-col>
        <us-col class="test" :span="12" :sm="12" :md="6" :lg="5" :xl="4">col-12 sm-12 md-6 lg-5 xl-4</us-col>
      </us-row>
      <us-row>
        <us-col class="test" :md="{span: 4, offset: 4}">col-md-4 col-offset-4</us-col>
      </us-row>
      <us-row>
        <us-col class="test" :span="3" :offset="2" :order="2">col-3 offset-2 order-2</us-col>
        <us-col class="test" :span="4">span: 4 unordered</us-col>
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
.test {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: rgba(86, 61, 124, .15);
  border: 1px solid rgba(86, 61, 124, .2);
}
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
}
</style>