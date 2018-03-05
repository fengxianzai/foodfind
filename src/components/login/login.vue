<template>
  <div>
    <div class="pageTitle">
      <leftGuid class="leftGuid"></leftGuid>
      <span>密码登录</span>
    </div>

    <!-- 空白 -->
    <div class="blank"></div>

    <!-- 登录内容 -->
    <div class="loginForm">
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
      <mt-field label="验证码">
        <img src="../../assets/100x100.png" height="45px" width="100px">
      </mt-field>
      <p class="formTips"> 
        <span>温馨提示：未注册过的账号，登录时将自动注册</span>
        <span>注册过的用户可凭账号密码登录</span>
      </p>
      <div class="loginBtn">
        <mt-button type="primary" size="large">登录</mt-button>
      </div>
    </div>

  </div>
</template>

<script>
import leftGuid from '@/components/base/leftGuid'

export default {
  components: {
    leftGuid
  },
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style scoped>
  .pageTitle {
    width: 100%;
    display: flex;
    background: #3190e8;
    padding: 12px 0px;
    justify-content: center;
  }
  .pageTitle  {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
  .leftGuid {
    position: absolute;
    left: 8px;
  }
  .blank {
    width: 100%;
    height: 10px;
    background-color: #f5f5f5;
  }
  .formTips {
    font-size: 12px;
    color: red;
    background: #f5f5f5;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    line-height: 25px; 
  }
  .loginBtn {
    width: 95%;
    margin: 0 auto;
  }
</style>