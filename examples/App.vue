<template>
  <div id="app">
    <!-- header -->
    <mainHeader></mainHeader>
    <!-- 文档页 -->
    <div class="main-container" v-if="!isIndex">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
    <!-- 首页 -->
    <router-view class="page" v-else></router-view>
  </div>
</template>

<script>
import mainHeader from "./components/header.vue";
import sideNav from "./components/side-nav.vue";
export default {
  name: "app",
  data() {
    return {
      init: false,
      isIndex: true
    };
  },
  watch: {
    $route() {
      this.isIndex = this.$route.name === "index";
    }
  },
  mounted() {
    //  这里模拟数据请求
    setTimeout(() => {
      this.init = true;
    }, 250);
  },
  components: {
    mainHeader,
    sideNav
  }
};
</script>

<style lang="scss">
@import "./assets/scss/index";
.main-container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc(100% - 215px);
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}
.container:after {
  content: "";
  clear: both;
  display: block;
}
</style>