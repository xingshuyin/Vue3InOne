import loading from "./components/loading.vue";
import { createVNode, render, h } from "vue";
// TODO:插件-加载动画
export default {
  install: (app, options) => {
    const v = createVNode(loading);
    render(v, document.body);
    app.provide("loading", v.component.exposed);
    // app.config.globalProperties.loading = v;
    console.log(app, v);
  },
};
