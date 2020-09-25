const microApps = [
  {
    // 子应用唯一名称
    name: "app-react",
    title: "React模块",  // 配置的模块名，给菜单用的
    // 子应用入口
    entry: process.env.VUE_APP_SUB_REACT,
    // 子应用挂载的元素
    container: "#sub-app-root",
    // 子应用匹配路径
    activeRule: "/app-react",
    props: {
      routerBase: '/app-react' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    }
  },
  {
    // 子应用唯一名称
    name: "app-vue2",
    title: "Vue2模块",  // 配置的模块名，给菜单用的
    // 子应用入口
    entry: process.env.VUE_APP_SUB_VUE2,
    // 子应用挂载的元素
    container: "#sub-app-root",
    // 子应用匹配路径
    activeRule: "/app-vue2",
    props: {
      routerBase: '/app-vue2' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    }
  }
]

export default microApps