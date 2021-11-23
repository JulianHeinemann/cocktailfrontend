<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button onclick="window.location.href='https://www.youtube.com/watch?v=Rcm3D4Y9XWk';">Random GIF</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
