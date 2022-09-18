import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  //TODO:router-创建router
  scrollBehavior: (to, from, savePosition) => {
    //TODO:router-滚动行为
    if (savePosition) {
      return savePosition;
    } else {
      return { top: 0 };
    }
  },
  // 路由模式  https://www.bilibili.com/video/BV1dS4y1y7vd?p=77&spm_id_from=pageDriver&vd_source=5a8d3b99ea863352520bda5fad9b504d
  history: createWebHashHistory(), //TODO:router-history记录历史方式
  routes: [
    { path: "/login", name: "login", component: () => import("../views/login/index.vue"), meta: { title: "登录页", animate: "animate__fadeIn" } }, //TODO:router-mata路由源信息
    { path: "/", redirect: "/index" }, //TODO:router-redirect路由重定向
    { path: "/index", alias: ["/root", "/home"], name: "index", component: () => import("../views/index/index.vue") }, //TODO:router-alias路由别名
    { path: "/product", name: "product", component: () => import("../views/product/index.vue") },
    {
      path: "/people/:id",
      name: "people",
      component: () => import("../views/people/index.vue"),
      children: [
        {
          path: "message",
          name: "message",
          components: {
            // TODO:router-components多组件/命名视图
            // 一个路由同时渲染多个组件;default为默认路由视图, other为name为other的路由视图;
            default: () => import("../views/people/components/message.vue"),
            other: () => import("../views/people/components/message.vue"),
          },
        },
      ],
    }, //TODO:router-params路径参数
  ],
});
//动态路由;用于权限管理
router.addRoute({ path: "/login_", redirect: "/login" }); //TODO:router-addRoute动态添加路由
export default router;
