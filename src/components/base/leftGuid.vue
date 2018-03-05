<template>
  <div id="guidIcon" @click="back()">
    <i class="icon iconfont icon-zuojiantou"></i>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data () {
    return {
      
    }
  },
  methods: {
  	/* 返回上一路由的方法 */
  	back: function () {
  		this.$router.go(-1)
  	}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
