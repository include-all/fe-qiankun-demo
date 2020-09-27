<template>
  <div id="layout-wrapper">
    <div class="layout-side-bar">
      <div class="logo-title">
        qiankun
      </div>
      <el-menu
        :collapse="isCollapse"
        default-active="app-vue2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          v-for="item in microApps"
          :key="item.name"
          :index="item.name"
          :title="item.title"
          @click="goto(item)"
          >{{ item.title }}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="layout-content">
      <div class="header"></div>
      <div id="sub-app-root"></div>
    </div>
  </div>
</template>

<script>
import microApps from "./micro-app";
export default {
  name: "App",
  data() {
    return {
      microApps,
      isCollapse: false,
    };
  },
  methods: {
    goto(item) {
      history.pushState(null, item.activeRule, item.activeRule);
    },
  },
};
</script>

<style lang="less">
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="less" scoped>
#layout-wrapper {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  .layout-side-bar {
    height: 100%;
    width: 200px;
    height: 100%;
    .logo-title {
      width: 199px;
      height: 80px;
      box-sizing: border-box;
      border-bottom: 1px solid #b0b1b5;
      line-height: 80px;
      text-align: center;
      font-size: 30px;
      background-color: #545c64;
      color: #fff;
    }
    /deep/ .el-menu {
      height: 100%;
    }
  }
  .layout-content {
    flex: 1;
    .header {
      height: 80px;
      background-color: #fff;
      width: 100%;
      line-height: 80px;
      z-index: 100;
      box-sizing: border-box;
      border-bottom: 1px solid #dcdfe6;
    }
    #sub-app-root {
    }
  }
}
</style>
