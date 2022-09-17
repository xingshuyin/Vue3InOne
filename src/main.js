import { createApp } from "vue";
import "./style.scss"; // npm install --save-dev sass  //TODO:scss安装
import "./initial.css";
import App from "./App.vue";

const app = createApp(App); //创建app

app.mount("#app"); //绑定根组件
