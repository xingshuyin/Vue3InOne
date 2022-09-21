<script setup>
import { ref } from 'vue';
import _ from 'lodash' //npm i --save lodash    https://www.lodashjs.com/  //TODO:lodash
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由
//const router = useRouter() //全局路由对象
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
let list = ref(Array.apply(null, { length: 81 }).map((_, index) => {
    return {
        id: index,
        num: (index % 9) + 1
    }
}))
const randomList = () => {
    list.value = _.shuffle(list.value) //随机打乱数组
}

</script>
<template>
    <div class="shuffle" @click="randomList()">
        <!-- TODO:动画-平移动画 -->
        <transition-group move-class="move">
            <div class="shuffle-item" v-for="i in list" :key="i.id">{{i.id}}</div>
        </transition-group>
    </div>
</template>
<style scoped lang='scss'>
.shuffle {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 9);

    &-item {
        width: 25px;
        height: 25px;
        border: 1px solid burlywood;
        box-sizing: border-box; //边框不计算宽高
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .move {
        transition: 1000ms;
    }
}
</style>
