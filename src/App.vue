<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar v-show="isShow"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/base/tabbar/Tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  },
  data () {
    return {
      isShow: (this.$route.path == '/index' || this.$route.path =='/order' || this.$route.path =='/mine')
    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
