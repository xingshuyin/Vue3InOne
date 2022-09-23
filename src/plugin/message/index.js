// TODO:插件
import { createVNode, render, ref } from "vue";
import message from "./components/message.vue";
export default {
  install: (app, options) => {
    document.body.appendChild(message);
    // render(node, "#app");
    // const msg_list = ref(["请求成功"]);
    // app.provide("msg_list", msg_list);
    // // 在这里编写插件代码
    // const msg = message => {
    //   msg_list.push(message);
    // };
    // app.provide("msg", msg);
  },
};
