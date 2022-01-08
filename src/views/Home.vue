<template>
  <div class="background">
    <div class="home">
      <CocktailCarousel></CocktailCarousel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CocktailCarousel from '@/components/CocktailCarousel'
export default {

  name: 'Home',
  components: {
    CocktailCarousel
  }
}
</script>

<style>
  .background{
    background-size: auto;
    background-color: beige;
    -o-background-size: 1000px;
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
