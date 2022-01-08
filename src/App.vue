<template>
  <Navbar>
  </Navbar>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
html {
  background: beige;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: beige;
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
