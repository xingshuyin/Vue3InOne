<script setup>
import { ref } from 'vue';
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由
//const router = useRouter() //全局路由对象
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
const show = () => {
    isshow.value = true
}
const hide = () => {
    isshow.value = false
}
defineExpose({ show, hide }); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
const isshow = ref(false)

</script>
<template>
    <div class="loading" v-show="isshow">
        加载中...
    </div>
</template>
<style scoped lang='scss'>
.loading {
    position: fixed;
    z-index: 999999999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

}
</style>
