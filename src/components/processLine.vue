<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
// TODO:动画-顶部进度条
const bar = ref(null)
const speed = ref(1)
const timer = ref(0)
const start = function () { //加载中动效
    speed.value = 1
    timer.value = window.requestAnimationFrame(function fun() {
        if (speed.value < 90) {
            bar.value.style.display = 'block'
            speed.value += 1
            bar.value.style.width = speed.value + "%"
            timer.value = window.requestAnimationFrame(fun)
        }
        else {
            speed.value = 1
            window.cancelAnimationFrame(timer.value)
        }
    }, 50)
}
const end = function () {//加载结束
    window.requestAnimationFrame(function fun() {
        speed.value = 100
        bar.value.style.width = speed.value + "%"
        setTimeout(() => {
            bar.value.style.display = 'none'
        }, 500)
    })
    // window.requestAnimationFrame(function fun() {
    //     speed.value = 100
    //     bar.value.style.width = speed.value + "%"
    //     bar.value.style.display = 'none'
    // })
}
defineExpose({ start, end }); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
// onBeforeMount(() => {
//     start()
// })
// onMounted(() => {
//     end()
// })
</script>
<template>
    <div class="process-bar" ref="bar">

    </div>
</template>
<style scoped lang='scss'>
.process-bar {
    position: absolute;
    height: 3px;
    top: 0px;
    background: rgb(4, 10, 94);
}
</style>
