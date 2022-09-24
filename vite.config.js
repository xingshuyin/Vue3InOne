import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "@unocss/vite";
import UnocssConfig from "./unocss.config";
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), Unocss(UnocssConfig)],
// });
//性能优化 https://xiaoman.blog.csdn.net/article/details/126811832
export default ({ mode }) => {
  console.log(mode); //development     //TODO:全局-vite配置文件中获取运行环境
  console.log(loadEnv(mode, process.cwd())); //TODO:全局-vite配置文件中获取自定义环境变量
  return defineConfig({
    plugins: [vue(), Unocss(UnocssConfig)],
  });
};
