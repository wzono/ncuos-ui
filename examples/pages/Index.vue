<template>
  <div class="index">
    <h1>Welcome to <span class="ui-name">{{ msg }}</span></h1>
    <img src="../assets/logo.png" alt="家园工作室">
    <p>Start from 2018-03-21</p>
    <ul>
      <li>
        <router-link to="/test">Markdown Test Page</router-link>
      </li>
      <li>
        <router-link to="/components">Components Test Page</router-link>
      </li>
      <li>
        <router-link to="/layout">Layout Test Page</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'ncuosUI'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss">
  .index {
    text-align: center;
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
    img {
      width: 300px;
    }
    .ui-name {
      color: #44ceff;
      font-weight: bold;
      font-family: monospace;
    }
  }
</style>
