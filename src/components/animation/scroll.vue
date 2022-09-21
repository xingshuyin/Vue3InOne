<script setup>
//import { ref } from 'vue';
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由
//const router = useRouter() //全局路由对象
import { ref, onMounted, onUpdated } from 'vue';
const props = defineProps({}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
const scroll_item_a = ref(null)
const scroll_item_b = ref(null)
const scroll = ref(null)
const scroll_body = ref(null)
var height = ref('-200px')
var ScrollTime = ref('')
onMounted(() => {
    ScrollTime.value = parseInt(scroll_item_a.value.offsetHeight / 30) + 's' //获取滚动时间
    height.value = '-' + scroll_item_a.value.offsetHeight + 'px'  //获取滚动目标的高度

    console.log(scroll.value.offsetHeight, scroll_item_a.value.offsetHeight)
    if (scroll_item_a.value.offsetHeight < scroll.value.offsetHeight) {
        scroll_item_b.value.style.display = 'none'
        scroll_body.value.style.animationPlayState = 'paused'
    }
})
onUpdated(() => {
    ScrollTime.value = parseInt(scroll_item_a.value.offsetHeight / 30) + 's' //获取滚动时间
    height.value = '-' + scroll_item_a.value.offsetHeight + 'px'  //获取滚动目标的高度
    if (scroll_item_a.value.offsetHeight < scroll.value.offsetHeight) {
        scroll_item_b.value.style.display = 'none'
        ScrollTime.value = '0'
    } else {
        scroll_item_b.value.style.display = 'block'
        scroll_body.value.style.animationPlayState = 'running'

    }

})
// TODO:动画-无限滚动
</script>
<template>
    <div class="scroll" ref="scroll" :style="{height:'230px'}">
        <div class="scroll-body" ref="scroll_body">
            <div ref="scroll_item_a" class="scroll-item">
                <slot></slot>
            </div>
            <div ref="scroll_item_b" class="scroll-item">
                <slot></slot>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
.scroll {
    width: fit-content;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.scroll-body {
    height: 100%;
    animation: v-bind(ScrollTime) rowup linear infinite normal;
}

.scroll-body:hover {
    animation-play-state: paused;
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
