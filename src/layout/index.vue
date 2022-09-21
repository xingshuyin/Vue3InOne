<script setup>
import processLine from '../components/processLine.vue';
import Side from './side.vue'
import Main from './main.vue'
import Head from './head.vue'
import { provide, ref } from 'vue'
//TODO:依赖注入-依赖
provide('fathernum', ref(1999)) //提供值以供子组件注入; 
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由
//const router = useRouter() //全局路由对象
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
</script>
<template>
    <!-- TODO:整体框架 -->
    <!-- <processLine></processLine> -->
    <div class="layout">
        <div class="layout-top">

            <Head></Head>
        </div>
        <div class="layout-bottom">
            <div class="layout-bottom-side">
                <Side></Side>
            </div>
            <div class="layout-bottom-main">
                <Main></Main>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
.layout {
    display: flex;
    flex-direction: column;

    .layout-top {
        width: 100vw;
        height: 5vh;
        overflow: hidden;
    }

    .layout-bottom {
        width: 100vw;
        height: 95vh;
        display: flex;
        flex-direction: row;
        overflow: hidden;

        .layout-bottom-side {
            width: 15%;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
        }

        .layout-bottom-main {
            width: 85%;
            height: 100%;
            overflow: auto;
            position: relative;
        }
    }
}
</style>
