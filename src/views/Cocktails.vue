<template>
     <div class="col" v-for="cocktail in cocktails" :key= "cocktail.id">
       <div class="card mb-3" style="max-width: 540px;">
         <div class="row g-0">
           <div class="col-md-4">
             <img :alt="cocktail.cocktailName" :src="getCocktailPic(cocktail)">
         </div>
         <div class="col-md-8" style="alignment-baseline: center">
           <div class="card-body">
             <h5 class="card-title">{{cocktail.cocktailName}}</h5>
             <p class="card-text">{{cocktail.describtion}}</p>
             <button onclick="window.location.href='https://www.gutekueche.at/cosmopolitan-cocktail-rezept-17940';">Rezept</button>
           </div>
         </div>
       </div>
     </div>
     </div>
</template>

<script>
export default {
  name: 'cocktails',
  data () {
    return {
      cocktails: [
        {
          id: 1,
          cocktailName: 'Cosmopolitan',
          describtion: 'Einfach, Lecker, Leicht.'
        },
        {
          id: 2,
          cocktailName: 'Gin Tonic',
          describtion: 'Einfach Lecker, Leicht.'
        }
      ]
    }
  },
  methods: {
    getCocktailPic (cocktail) {
      switch (cocktail.id) {
        case (1):
          return require('../assets/GinTonic.png')
        case (2):
          return require('../assets/Cocktail2.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
