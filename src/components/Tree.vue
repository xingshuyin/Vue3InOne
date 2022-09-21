<script setup>
//import { ref } from 'vue';
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由

import { list } from 'postcss';

//const router = useRouter() //全局路由对象
const props = defineProps({ data: list }); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
const getMessage = (item) => {
    console.log(item.name)
}
</script>
<!-- TODO:树形结构-展示 -->
<template>
    <div class="tree">
        <div class="tree-item" v-for="v,i in data" :key="i" @click.stop="getMessage(v)">
            {{v.name}}
            <Tree v-if="v?.children?.length" :data="v.children"></Tree>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.tree {
    .tree-item {
        margin-left: 10px;
    }
}
</style>
