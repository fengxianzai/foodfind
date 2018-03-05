<template>
  <div id="splash">
    <img src="./images/splash.png">
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#splash {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 6;
	width: 100%;
	height: 100%;
	opacity: 1;
	transition: opacity 0.3s ease;
	box-sizing: border-box;
}
</style>
