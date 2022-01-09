<template>
  <div class="background" >
    <div class="home">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {

  name: 'Home',
  components: {
  }
}
</script>

<style>
html{
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-image: url("../assets/Cocktail7.jpeg");
}
  cocktail-carousel{
    width: max-content;
  }
 .carousel-inner{
    margin-top: 200px;
    margin-left: 15%;
   margin-right: 15%;
 }
</style>
