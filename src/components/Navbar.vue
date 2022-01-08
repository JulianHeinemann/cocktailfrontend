<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">CocktailApp</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="nav-links" id="navbarNav">
        <button class="navlinks" @click="$router.push('/')">HOME</button>
        <button class="navlinks" @click="$router.push('/about')">ABOUT</button>
        <button class="navlinks" @click="$router.push('/cocktails')">COCKTAILS</button>
        <!--
        <router-link class="navlinks" to="/">HOME</router-link>
        <router-link class="navlinks" to="/about">ABOUT</router-link>
        <router-link class="navlinks" to="/cocktails">COCKTAILS</router-link>
        -->
      </div>
      <!--
      <div class="searchbar">
        <input type="search" placeholder="Search..">
      </div>
      -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

.navbar-brand{
  color: cadetblue;
}
.navlinks{
  float: left;
  margin: 5px;
  margin-right: 100px;
  background-color: cadetblue;
  border: none;
  height: 30px;
  border-radius: 10px;
}

</style>
