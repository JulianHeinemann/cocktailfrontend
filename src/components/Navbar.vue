<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img src="@/assets/Cocktail2.png" class="card-logo-img" alt="CocktailApp">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <router-link class="nav-link" to="/">HOME</router-link>
        <router-link class="nav-link" to="/about">ABOUT</router-link>
        <router-link class="nav-link" to="/cocktails">COCKTAILS</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.card-logo-img{
  width: 100%;
}
.navbar-brand{
  color: black;
  width: 70px;
}
.navbar{
  background: white;
}
.nav-link{
  color: black;
}
</style>
