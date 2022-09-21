<script setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'

const route = useRoute() //当前路由
const router = useRouter() //全局路由对象
//const props = defineProps({ data: Object, title: String}); // defineProps的参数, 可以直接使用
//const emits = defineEmits(['onclick']); // emits 触发父组件函数
const form_dom = ref(null); //获取ref值为map的元素
//defineExpose({ map,}); //暴露组件的内容, 父组件通过组件对象(如ref)的value获取暴露的对象
const form = reactive({
    user: null,
    psd: null,
})
document.title = route.meta.title
const login = async () => {
    // console.log(form_dom)
    await form_dom.value.validate((valid, fields) => {
        console.log(valid, fields)
        if (valid) {
            if (form.user == "admin" && form.psd == "123456") {
                localStorage.setItem('token', "zxcvbnmzx")
                router.push({ name: 'index' })
            } else {
                ElMessage({
                    message: "账号或密码错误",
                    type: "warning"
                })
            }
        } else {
            ElMessage({
                message: "账号或密码错误",
                type: "warning"
            })
        }
    })
}
const rules = reactive({
    user: [
        { required: true, message: '请输入用户名', trigger: 'change' },
    ],
    psd: [
        { required: true, message: '请输入密码', trigger: 'change' },
    ]
})
</script>
<template>
    <div class="login">
        <el-form :inline="true" ref="form_dom" :model="form" class="login-form" :rules="rules">
            <el-form-item label="账号" prop="user">
                <el-input v-model="form.user" placeholder="请输入账号" />
            </el-form-item>
            <el-form-item label="密码" prop="psd">
                <el-input v-model="form.psd" placeholder="请输入密码" type="password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped lang='scss'>
.login {
    .login-form {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 400px;
        box-shadow: 0 0 5px 0 black;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        ::v-deep .el-form-item {
            margin: 10px;

            .el-form-item__content {
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }
    }
}
</style>
