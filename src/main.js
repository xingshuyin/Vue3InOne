import { createApp, createVNode, render, toRaw } from "vue";
import loading from "./plugin/loading"; //加载动画
import ElementPlus from "element-plus"; //npm install element-plus --save    https://element-plus.gitee.io/zh-CN/
import mitt from "mitt"; // npm install mitt -S
import processBar from "./components/processLine.vue"; //引入进度条
import Card from "./components/card.vue"; //准备注册的全局组件
import "element-plus/dist/index.css";
import "uno.css"; // npm i -D @unocss/vite (无预设安装)   还需要在vite.config.ts中配置  具体看->  https://github.com/unocss/unocss/tree/main/packages/vite
import "tailwindcss/tailwind.css"; //npm install -D tailwindcss@latest postcss@latest autoprefixer@latest    npx tailwindcss init -> 初始化    https://www.tailwindcss.cn/docs/installation
import "animate.css"; //npm install animate.css --save
import "./style.scss"; // npm install --save-dev sass
import "./initial.css";
import App from "./App.vue";
const bus = mitt();

//------------------------router开始-----------------------------
import router from "./router"; //引入路由组件
const processNode = createVNode(processBar); //进度条转换为vnode
render(processNode, document.body); //TODO:渲染到body中
const whiteList = ["/login"]; //前置守卫白名单
router.beforeEach((to, from, next) => {
  //TODO:router-前置守卫
  processNode.component?.exposed?.start(); //TODO:动画-执行进度动画
  if (whiteList.includes(to.path) || localStorage.getItem("token")) {
    //判断路由是否在白名单中,或者已经保存了登录的token
    window.document.title = to.meta.title; //TODO:设置标题
    next(); //跳转
  } else {
    next("/login"); //验证不通过就跳转到登录页
  }
});
router.afterEach((to, from, next) => {
  // TODO:router-后置守卫
  processNode.component?.exposed?.end(); //TODO:动画-结束进度动画
});
//------------------------router结束---------------------------
//-------------------------store开始-------------------------
import { createPinia } from "pinia"; //引入pinia
const pinia = createPinia();
const save = option => {
  return context => {
    console.log("context", context);
    const { store } = context;
    console.log("store", store);
    store.$subscribe(() => {
      console.log("localStorage");
      localStorage.setItem(option.key, JSON.stringify(toRaw(store.$state)));
    });
    if (localStorage.getItem(option.key)) {
      return { ...JSON.parse(localStorage.getItem(option.key)) };
    }
  };
};
pinia.use(save({ key: 1 })); //TODO:pinia-使用插件
//-------------------------store结束-------------------------

const app = createApp(App); //创建app
app.component("Card", Card); //TODO:全局-组件
app.provide("bus", bus); //使用provide创建全局变量; 用inject获取全局变量
app.config.globalProperties.$bus = bus; //TODO:全局-变量(模板中直接使用)
app.use(router); //使用路由组件
app.use(pinia);
// app.use(loading); //TODO:使用自定义插件
app.use(ElementPlus); //使用elementui-plus组件
app.mount("#app"); //绑定根组件
