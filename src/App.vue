<template>
  <Navbar>
  </Navbar>
  <router-view/>
  <div class="background-app">

  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
html{
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-image: url("./assets/Cocktail7.jpeg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #7CFC00;
}

#nav a.router-link-exact-active {
  color: #7CFC00;
}
</style>
