<script setup>
//import { ref } from 'vue';
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由
//const router = useRouter() //全局路由对象
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
</script>
<!-- :leave-active-class="`animate__animated animate__fadeOut`" -->
<template>
    <router-view #default="{route,Component}">
        <!-- TODO:router-添加animate动画 -->
        <!-- animate动画   https://www.jq22.com/yanshi819 =>  animate__animated animate__动画名 -->
        <!-- 通过路由源信息可以给每个路由添加一个animate的动画类名;渲染视图时用transition 接受这个类名;并用component渲染组件-->
        <transition :enter-active-class="`animate__animated ${route.meta.animate}`" appear
            leave-to-class="router-leave-to" leave-from-class="router-leave-from">
            <!-- TODO:动画 -->
            <!-- https://cn.vuejs.org/guide/built-ins/transition.html#css-based-transitions -->
            <!-- TODO:动态组件 -->
            <!-- Component为组件的实例,不能直接使用字符串,想使用字符串=>全局组件,用选项式api声明组件 -->
            <component :is='Component'></component>
        </transition>
    </router-view>
</template>
<style scoped lang="scss">
.router-leave-from {
    // display: none;
}

.router-leave-to {
    display: none;
}
</style>
