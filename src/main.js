import { createApp, createVNode, render } from "vue";
import loading from "./plugin/loading";
import ElementPlus from "element-plus"; //npm install element-plus --save
import router from "./router"; //引入路由组件
import mitt from "mitt"; // npm install mitt -S
import processBar from "./components/processLine.vue"; //引入进度条
import Card from "./components/card.vue";
import "element-plus/dist/index.css";
import "animate.css"; //npm install animate.css --save
import "./style.scss"; // npm install --save-dev sass
import "./initial.css";
import App from "./App.vue";
const bus = mitt();
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
const app = createApp(App); //创建app
app.component("Card", Card); //TODO:全局-组件
app.provide("bus", bus); //使用provide创建全局变量; 用inject获取全局变量
app.config.globalProperties.$bus = bus; //TODO:全局-变量(模板中直接使用)
app.use(router); //使用路由组件
app.use(loading); //TODO:使用自定义app
app.use(ElementPlus); //使用elementui-plus组件
app.mount("#app"); //绑定根组件
