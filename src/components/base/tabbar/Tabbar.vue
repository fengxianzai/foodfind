<template>
  <div class="tabbar">
    <ul class="tab-bar">
      <router-link tag="li" to="/index"><i class="icon-index"></i><span>首页</span></router-link>
      <router-link tag="li" to="/order"><i class="icon-order"></i><span>订单</span></router-link>
      <router-link tag="li" to="/mine"><i class="icon-mine"></i><span>我的</span></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tabbar {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    background-color: #fff
  }
  .tab-bar {
    display: flex;
    width: 100%;
    height: 50px;
    border-top: 1px solid rgb(182, 182, 182);
    justify-content: space-around

  }
  li {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 5px auto;
    align-items: center
  }
  i {
    display: block;
    width: 25px;
    height: 25px;
    margin: 0px auto 2px;
    background: url('./tabbarBg.png') no-repeat;
    background-size: 25px auto;
  }
  span {
    font-size: 12px;
    color: rgb(182, 182, 182);
  }
  .icon-index {
    background-position: 0 -75px;
  }
  .icon-order {
    background-position: 0 -25px;
  }
  .icon-mine {
    background-position: 0 -125px;
  }
  .router-link-active .icon-index {
    background-position: 0 -50px;
  }
  .router-link-active .icon-order {
    background-position: 0 0px;
  }
  .router-link-active .icon-mine {
    background-position: 0 -100px;
  }
  .router-link-active span {
    color: #000;
  }
</style>
