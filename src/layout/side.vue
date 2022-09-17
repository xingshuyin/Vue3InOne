<script setup>
//import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute() //当前路由
const router = useRouter() //全局路由对象
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
const jump = () => {//TODO:编程式导航
    //TODO:router-路由传参
    // router.push({ path: '/people', query: { id: 1000 } })
    router.push({ name: 'people', query: { id: 1000 }, params: { id: 1000 } }) // params参数必须用name;params为路径参数(id必须先在routes里创建创建);query为?参数(query在切换子路由时会丢失);
    // router.replace({ path: '/people' })  //跳转不记录历史
    // router.go(1)  //前进一个历史历史
    // router.go(-1)  //后退一个历史历史
}
</script>
<template>
    <!-- 系统框架->左侧菜单栏 -->
    <div class="system-layout-side">
        <!-- TODO:router-link跳转 -->
        <!-- to: 跳转的路由 ; replace属性 -> 跳转不记录历史 -->
        <router-link to="/index">首页</router-link>
        <!-- 对象方式跳转 name路由名称  -->
        <router-link :to="{name:'product'}">产品</router-link>
        <a href="" @click.prevent="jump">人员</a>
        <router-link to="/login">登录</router-link>
    </div>
</template>
<style scoped lang="scss">
.system-layout-side {
    height: 100%;
    width: 100%;
    background: rgba(209, 163, 185, 0.432);
    color: white;
    display: flex;
    align-items: center; // 交叉轴居中
    justify-content: center; // 主轴居中
    flex-direction: column;

    a {
        font-size: 20px;
        background: blue;
        color: white;
        margin: 5px;
        border-radius: 5px;
    }
}
</style>
