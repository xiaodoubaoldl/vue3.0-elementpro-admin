<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="title">管理系统</div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="loginRef"
        class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name">
            <template #prepend>账号</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off">
            <template #prepend>密码</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const validatePass = (rule, value, callback) => {
      console.log(rule);
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    const checkName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        callback();
      }
    };
    const state = reactive({
      count: 0,
      ruleForm: {
        name: '',
        pass: '',
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
        ],
        name: [
          { validator: checkName, trigger: 'blur' },
        ],
      },
    });
    // 登录
    const loginRef = ref(null);
    const login = () => {
      loginRef.value.validate((valid) => {
        if (valid) {
          console.log(valid)
          // alert('submit!');
          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    };
    return {
      ...toRefs(state),
      login,
    };
  },
};
</script>

<style lang="less" scoped>
.login-wrap{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('~@/assets/imgs/login-bg.jpg') no-repeat;
  background-size: cover;
  .login-content{
    background: rgba(255, 255, 255, 0.3);
    width: 450px;
    height: 310px;
    .title{
      height: 60px;
      line-height: 60px;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
    .el-form{
      padding: 20px;
    }
  }
}
</style>
