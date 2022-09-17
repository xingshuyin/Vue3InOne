import { createApp, createVNode, render } from "vue";
import ElementPlus from "element-plus"; //npm install element-plus --save
import "element-plus/dist/index.css";
import "animate.css"; //npm install animate.css --save
import router from "./router"; //引入路由组件
import processBar from "./components/processLine.vue"; //引入进度条
const processNode = createVNode(processBar); //进度条转换为vnode
render(processNode, document.body); //TODO:渲染到body中
import "./style.scss"; // npm install --save-dev sass  //TODO:scss安装
import "./initial.css";
import App from "./App.vue";

const whiteList = ["/login"]; //前置守卫白名单
router.beforeEach((to, from, next) => {
  //TODO:router-前置守卫
  processNode.component?.exposed?.start(); //TODO:执行进度动画
  if (whiteList.includes(to.path) || localStorage.getItem("token")) {
    //判断路由是否在白名单中,或者已经保存了登录的token
    next(); //跳转
  } else {
    next("/login"); //验证不通过就跳转到登录页
  }
});
router.afterEach((to, from, next) => {
  processNode.component?.exposed?.end(); //TODO:结束进度动画
});
const app = createApp(App); //创建app
app.config.globalProperties.$processNode = processNode;
app.use(router); //使用路由组件
app.use(ElementPlus); //使用elementui-plus组件
app.mount("#app"); //绑定根组件
