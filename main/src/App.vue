<template>
  <div id="layout-wrapper">
    <div class="header">
      <div class="container">
        <h1>qiankun-demo</h1>
      </div>
    </div>
    <div class="layout-content">
      <div class="side-bar">
        <el-menu default-active="app-vue2">
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
body {
  margin: 0;
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
  .header {
    height: 80px;
    background-color: #fff;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    .container {
      height: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid #dcdfe6;
      h1 {
        margin: 0;
        float: left;
        font-size: 32px;
        font-weight: 400;
      }
    }
  }
  .layout-content {
    display: flex;
    justify-content: flex-start;
    .side-bar {
      width: 200px;
      /deep/ .el-menu {
        height: 100%;
      }
    }
    #sub-app-root {
      flex: 1;
    }
  }
}
</style>
