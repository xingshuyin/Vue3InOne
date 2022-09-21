<script setup>
//import { ref } from 'vue';
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由
//const router = useRouter() //全局路由对象
import { ref, onMounted } from 'vue';
const props = defineProps({}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
const scroll1 = ref(null)
const scroll2 = ref(null)
var height = ref('-200px')
var ScrollTime = ref('')
onMounted(() => {
    console.log(scroll2)
    ScrollTime.value = parseInt(scroll1.value.offsetHeight / 30) + 's'
    height.value = '-' + scroll1.value.offsetHeight + 'px'
})
// TODO:无限滚动
</script>
<template>
    <div class="scroll" :style="{height:'230px'}">
        <div class="scroll-body">
            <div ref="scroll1" class="scroll-item">
                <slot></slot>
            </div>
            <div ref="scroll2" class="scroll-item">
                <slot></slot>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
.scroll {
    width: 330px;
    height: 300px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.scroll-body {
    height: fit-content;
    animation: v-bind(ScrollTime) rowup linear infinite normal;
}

.scroll-item {
    width: 100%;
    height: fit-content;
}


@keyframes rowup {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100% {
        -webkit-transform: translate3d(0, v-bind(height), 0);
        transform: translate3d(0, v-bind(height), 0);
        display: none;
    }
}
</style>
