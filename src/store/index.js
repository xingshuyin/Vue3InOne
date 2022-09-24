import { defineStore } from "pinia";
// TODO: pinia - 创建store;
const get_num = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(99999); //promise返回值要用resolve
    }, 5000);
  });
};

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      //不要用箭头函数,不然this指向就错了
      this.count++;
    },
    async set_async() {
      //TODO:pinia-异步action
      const n = await get_num();
      this.count = n;
    },
  },
});
