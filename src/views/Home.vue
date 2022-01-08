<template>
  <div class="home">
    <img alt="Cocktail logo" src="../assets/Cocktail7.jpeg">
    <HelloWorld msg="Cocktail Anwendung"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

</style>
