<script setup>
import { ref, inject, getCurrentInstance, onBeforeMount, onMounted } from 'vue';
import shuffle from '../../components/animation/shuffle.vue';
import stateDuringVue from '../../components/animation/stateDuring.vue';
import scrollVue from '../../components/animation/scroll.vue';
const instance = getCurrentInstance()

//-------------------------store开始-------------------------
import { storeToRefs } from "pinia";
import { useCounterStore } from "../../store/index";
const counter = useCounterStore(); //TODO:pinia-创建store实例
// const counter2 = useCounterStore(); //TODO:pinia-创建store实例
// const { count } = storeToRefs(useCounterStore()); //直接解构出state中的值;不用storeToRefs的话没有响应式
// counter.$subscribe((args, state) => {
//     //TODO:pinia-监听state的变化
//     // console.log("counter.$subscribe", args, state); //args->store的信息  state->state的新值
// });
// counter.$onAction(args => {
//     //TODO:pinia-action的执行
//     // console.log("counter.$onAction", args);
// });

// counter.increment(); //TODO:pinia-执行action
// counter.count = 100; //pinia-直接修改值
// counter.set_async();
// counter.$reset() //TODO:pinia-重置state的值
//-------------------------store结束-------------------------
const slotname = ref('default')
const keep = ref(false)
const num1 = ref('缓存1 (双击切换另一个)')
const num2 = ref('缓存2 (双击切换另一个)')
//TODO:依赖注入-注入
const fathernum = inject('fathernum')  //获取父组件provide的值
const bus = inject('bus')//获取全局provide的值
//TODO:全局-使用全局变量
const $bus = instance.proxy.$bus//获取全局变量
const item_num = ref(2)

// const loading = inject('loading')  //TODO:插件-加载动画触发
// loading.show()
// onMounted(() => {
//     setTimeout(() => {
//         loading.hide()
//     }, 1000);

// })
const vCard = { //TODO:自定义指令
    // https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
    // setup中,以v开头的驼峰命名变量都被识别为自定义指令;自定义指令可以放到任何一个组件或元素上 =>  <Card v-card="{a:1}">
    // 里面的声明周期钩子接受 el binding vnode prevNode  四个参数用以处理元素
    mounted(...args) {

    },
}
const vCardSimple = (el, binding) => { //TODO:自定义指令-简写
    //简写情况下,只有绑定后和更新后会触发 ; <Card v-card-simple="{a:2}">
    let head = el.firstElementChild
    const mouseDown = (e) => { //TODO:动画-拖动
        let x = e.clientX - el.offsetLeft
        let y = e.clientY - el.offsetTop
        const move = (e) => {
            el.style.position = 'relative'
            el.style.left = e.clientX - x + 'px'
            el.style.top = e.clientY - y + 'px'
        }
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', () => {
            el.style.left = 0 + 'px'
            el.style.top = 0 + 'px'
            document.removeEventListener('mousemove', move)
        })
    }
    head.addEventListener('mousedown', mouseDown)
}
</script>
<template>
    <div class="index">
        首页 fathernum:{{fathernum}}
        <Card v-card="{a:1}" v-card-simple="{a:2}" :title="'传入的title'" v-model="fathernum">
            <!-- TODO:插槽-使用插槽 -->
            <!-- 绑定插槽名称: #slotname ; v-slot:slotname -->
            <!-- 默认插槽: #default 或 不写-->
            <!-- 作用域插槽: #title="{title} ;获取组件插槽的属性-->
            <!-- 动态插槽: 通过变量动态绑定插槽 -->
            <template #title="{title}">
                <div>
                    卡片标题 {{title}} <div @click="counter.count++">{{counter.count}}</div>
                </div>
            </template>
            <template v-slot:body>
                <div>
                    卡片主体
                </div>
            </template>
            <template #default>
                <div>
                    卡片底部
                </div>
            </template>
            <template #[slotname]>
                <div>
                    动态插槽
                </div>
            </template>
        </Card>
        <!-- TODO:传送组件 -->
        <Teleport to="body">

            <!-- TODO:mitt-发布事件 -->
            <div style="position: absolute;top: 0;" @click="$bus.emit('busEvent', {a:1,b:2})">
                传送组件
            </div>
        </Teleport>
        <!-- TODO:组件缓存 -->
        <!-- https://www.bilibili.com/video/BV1dS4y1y7vd?p=25&spm_id_from=pageDriver&vd_source=5a8d3b99ea863352520bda5fad9b504d -->
        <keep-alive>
            <el-input @dblclick="keep=!keep" v-if="keep" size="small" placeholder="input1" v-model="num1">
            </el-input>
            <el-input @dblclick="keep=!keep" v-else="!keep" size="small" placeholder="input2" v-model="num2">
            </el-input>
        </keep-alive>

        <shuffle></shuffle>
        <stateDuringVue></stateDuringVue>
        <div @click="item_num-=1">减少一个</div>
        <scrollVue>
            <template #default>
                <div style="width: 50px;height: 50px;background: black;color: white; " @click="item_num+=1"
                    v-for="(item, index) in Array(item_num)" :key="index">{{index}}</div>

            </template>
        </scrollVue>
    </div>
</template>
<style scoped lang="scss">
.index {
    :deep(.el-input) {
        //TODO:样式-样式穿透
        width: 200px;
    }
}
</style>

