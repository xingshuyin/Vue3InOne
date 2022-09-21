<script setup>
import { ref, inject } from 'vue';
import shuffle from '../../components/animation/shuffle.vue';
import stateDuringVue from '../../components/animation/stateDuring.vue';
import scrollVue from '../../components/animation/scroll.vue';
//import {useRoute, useRouter} from 'vue-router';
//const route = useRoute() //当前路由
//const router = useRouter() //全局路由对象
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
//const map = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象

//  https://xiaoman.blog.csdn.net/article/details/122773486   //TODO:模板语法
//  https://xiaoman.blog.csdn.net/article/details/122780637   //TODO:ref
//  https://xiaoman.blog.csdn.net/article/details/122784094   //TODO:reactive
//  https://xiaoman.blog.csdn.net/article/details/122791665   //TODO:toRef, toRefs, toRaw
//  https://xiaoman.blog.csdn.net/article/details/122792620   //TODO:computed
//  https://xiaoman.blog.csdn.net/article/details/122797990   //TODO:watch
//  https://xiaoman.blog.csdn.net/article/details/122802130   //TODO:watcheffect
//  https://xiaoman.blog.csdn.net/article/details/122811060   //TODO:生命周期
//  https://xiaoman.blog.csdn.net/article/details/122850170   //TODO:组件传参
const slotname = ref('default')
const keep = ref(false)
const num1 = ref(0)
const num2 = ref(1)
const fathernum = inject('fathernum')  //获取父组件provide的值   //TODO:依赖注入-注入
</script>
<template>
    <div>
        首页{{fathernum}}
        <Card :title="'传入的title'">
            <!-- TODO:使用插槽 -->
            <!-- 绑定插槽名称: #slotname ; v-slot:slotname -->
            <!-- 默认插槽: #default 或 不写-->
            <!-- 作用域插槽: #title="{title} ;获取组件插槽的属性-->
            <!-- 动态插槽: 通过变量动态绑定插槽 -->
            <template #title="{title}">
                <div>
                    卡片标题 {{title}}
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
            <div style="position: absolute;top: 0;">
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
        <scrollVue>
            <template #default>
                <div>
                    <shuffle></shuffle>
                </div>
            </template>
        </scrollVue>
    </div>
</template>
<style scoped>

</style>
