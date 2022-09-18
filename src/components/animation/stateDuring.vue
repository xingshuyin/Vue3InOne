<script setup>
import { ref, watch, reactive } from 'vue';
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由
//const router = useRouter() //全局路由对象
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
import gsap from 'gsap'  //npm install gsap     https://greensock.com/get-started-2/  //TODO:gsap
let num = reactive({
    current: 0,
    tnum: 0
})
watch(() => num.current, (newV, ondV) => {
    gsap.to(num, { //TODO:值过度
        duration: 1,
        tnum: newV,
    })
})
</script>
<template>
    <div @click="num.current+=1000"
        style="width: 80px;height: 80px; display: flex;justify-content: center;align-items: center;background: blue;color: white;">
        {{num.tnum.toFixed(0)}}
    </div>
</template>
<style scoped lang='scss'>

</style>
