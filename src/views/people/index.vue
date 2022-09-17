<script setup>
//import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute() //当前路由
const router = useRouter() //全局路由对象
console.log(route)
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
</script>
<template>
    <!-- TODO:router-获取路由参数 -->
    人员: id=>{{route.query.id}} {{route.params.id}}
    <!-- 子路由;夫路由query参数会在跳转子路由后丢失; -->
    <router-link :to="{name:'message', query:{name:'张三',age: 18, id: 1000}}">信息</router-link>
    <router-view></router-view>
    <!-- TODO:router-命名视图 -->
    <router-view name="other"></router-view>
</template>
<style scoped lang='scss'>

</style>
