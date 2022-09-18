<script setup>
//import { ref } from 'vue';
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由
//const router = useRouter() //全局路由对象
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素


const emits = defineEmits(['onclick']); //TODO:emits-定义emits事件
const click = () => {
    emits('onclick', { title: title }) //TODO:emits-触发emits事件
}
const props = defineProps({ data: Object, title: String }); // defineProps的参数, 可以直接使用  //TODO:props-父给子传参
defineExpose({ props, }); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象  //TODO:defineExpose-暴露组件的内容
</script>
<template>
    <div class="card" @click="click">
        <div class="card-title">
            {{title}}
        </div>
        <div class="card-body">
            {{data}}
        </div>
    </div>
</template>
<style scoped lang='scss'>
.card {
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;

    .card-title {
        flex: 1;
        width: 100%;
        background-color: rgb(125, 105, 238);
    }

    .card-body {
        flex: 4;
        width: 100%;
        background-color: aquamarine;
    }
}
</style>
