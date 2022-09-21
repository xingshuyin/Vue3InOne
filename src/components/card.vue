<script setup>
import { getCurrentInstance } from 'vue';
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由
//const router = useRouter() //全局路由对象
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
const instance = getCurrentInstance()
// TODO:mitt-订阅事件
instance.proxy.$bus.on('busEvent', (data) => {
    console.log(data)
})
const emits = defineEmits(['onclick', 'update:modelValue']); //TODO:emits-定义emits事件
const click = () => {
    emits('onclick', { title: props.title }) //TODO:emits-触发emits事件
}
//TODO:props-父给子传参
const props = defineProps({ data: Object, title: String, modelValue: Number }); // defineProps的参数, 可以直接使用
//TODO:双向绑定
// <Card v-model="num"/>    const props = defineProps({ modelValue: String }); 默认使用modelValue接收v-model值; 
// const emits = defineEmits(['update:modelValue']); 使用update:modelValue修改绑定值=> emits('update:modelValue', 'newValue')
//也可自定义名称   <Card v-model:num="num"/>   defineProps({ num: String })  defineEmits(['update:num'])


//TODO:defineExpose-暴露组件的内容
defineExpose({ props, }); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象  
</script>
<template>
    <div class="card" @click="click">
        <div class="card-title">
            <div @click="emits('update:modelValue', modelValue+1)">
                {{modelValue}}
            </div>
            <!-- TODO:插槽-作用域插槽 -->
            <!-- 作用域插槽 =>把数据返回给父组件 -->
            <slot :title="title" name="title"></slot>
        </div>
        <div class="card-body">
            <!-- TODO:插槽-具名插槽 -->
            <!-- 
            <template v-slot:body>
                <div>
                    卡片主体
                </div>
            </template> 
        -->
            <slot name="body"></slot>
        </div>
        <div class="card-footer">
            <!-- 默认插槽 -->
            <slot></slot>
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

    .card-footer {
        background: burlywood;
    }
}
</style>
