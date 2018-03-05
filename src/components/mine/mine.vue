<template>
  <div class="mine">
    <!-- 登录注册 -->
    <div class="login-num">
      <router-link to="/login" class="login-content">
        <div class="userImg"></div>
        <span>登录/注册</span>
        <guidIcon class="guidIcon"></guidIcon>
      </router-link>
    </div>

    <!-- 我的账户 -->
    <div class="myCount">
      <!-- 我的余额 -->
      <div class="myBalance">
        <div class="count">
          <span class="number">0.00</span>
          <span class="countTitle">元</span>
        </div>
        <span class="countTitle">我的余额</span>
      </div>
      <!-- 我的优惠 -->    
      <div class="myDiscount">
        <div class="count">
          <span class="number">3</span>
          <span class="countTitle">个</span>
        </div>
        <span class="countTitle">我的优惠</span>
      </div>
      <!-- 我的积分 -->    
      <div class="myScore">
        <div class="count">
          <span class="number">80</span>
          <span class="countTitle">分</span>
        </div>
        <span class="countTitle">我的积分</span>
      </div>    
    </div>

    <!-- 空白 -->
    <div class="blank"></div>

    <!-- 用户操作 -->
    <ul class="userOptions">
      <li>
        <i class="icon iconfont icon-dingdan1"></i>
        <span>我的订单</span>
        <guidIcon class="guidIcon"></guidIcon>
      </li>
      <li>
        <i class="icon iconfont icon-shoucang"></i>
        <span>我的收藏</span>
        <guidIcon class="guidIcon"></guidIcon>
      <li>
        <i class="icon iconfont icon-toufangdizhi"></i>
        <span>我的地址</span>
        <guidIcon class="guidIcon"></guidIcon>
      </li>

      <!-- 空白 -->
      <div class="blank"></div>

      <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <span>会员卡</span>
        <guidIcon class="guidIcon"></guidIcon>
      </li>
      <li>
        <i class="icon iconfont icon-jifenchuzhixitong"></i>
        <span>积分商城</span>
        <guidIcon class="guidIcon"></guidIcon>
      </li>
      <li>
        <i class="icon iconfont icon-fuwu"></i>
        <span>服务中心</span>
        <guidIcon class="guidIcon"></guidIcon>
      </li>
    </ul>
  </div>
</template>

<script>
import guidIcon from '@/components/base/guidIcon'

export default {
  components: {
    guidIcon
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
  a {
    text-decoration: none;
  }
  .login-num {
    width: 95.1%;
    height: 120px;
    background: #3190e8;
    display: flex;
    align-items: center;
    padding-left: 18px;
  }
  .userImg {
    width: 70px;
    height: 70px;
    background: url('../images/userImg/user1.jpg');
    background-size: cover;
    border-radius: 50%;
    margin-right: 20px;
  }
  .login-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-content span {
    font-size: 20px;
    color: #fff;
  }
  .myCount {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .myBalance {
    height: 70px;
    width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .count {
    margin-bottom: 4px;
  }
  .myBalance .number {
    color: #f90;
    font-weight: 700;
    font-family: Helvetica Neue,Tahoma;
    font-size: 18px;
  }
  .countTitle {
    font-size: 10px;
  }
  .myDiscount {
    height: 70px;
    width: 33.3%;
    border-right: 2px solid #f5f5f5;
    border-left: 2px solid #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .myDiscount .number {
    color: #ff5f3e;
    font-weight: 700;
    font-family: Helvetica Neue,Tahoma;
    font-size: 18px;
  }
  .myScore {
    height: 70px;
    width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .myScore .number {
    color: #6ac20b;
    font-weight: 700;
    font-family: Helvetica Neue,Tahoma;
    font-size: 18px;
  }
  .blank {
    width: 100%;
    height: 10px;
    background-color: #f5f5f5;
  }
  .blank2 {
    width: 100%;
    height: 500px;
    background-color: #f5f5f5;
  }
  .userOptions {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
  }
  li {
    list-style: none;
    height: 40px;
    padding-left: 18px;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    align-items: center;
    positon:relative
  }
  li span {
    margin-left: 10px;
    color: #333;
  }
  .guidIcon {
    position: absolute;
    right:10px
  }
</style>