<template>
  <div id="login">
    <main>
      <div class="login">
        <header>
          <svg-icon icon-class="book" class-name="icon" />
          <div class="logo" >Library</div>
        </header>
        <el-form
          :rules="rules"
          :model="loginForm"
          status-icon
          ref="loginForm"
          label-width="0px"
          class="demo-ruleForm"
        >
          <el-form-item prop="email">
            <el-input v-model="loginForm.email" placeholder="证件号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="密码"
              show-password
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="button">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'login',
};
</script>

<style lang='scss' scoped>
#login{
  width: 100%;
  height: 100%;
  background: $white;
  main{
    width: $detailWidth;
    margin: 0 auto;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    .login{

    }
  }
}
</style>
