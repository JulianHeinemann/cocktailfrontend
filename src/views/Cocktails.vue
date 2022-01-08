<template>
     <div class="col" v-for="cocktail in cocktails" :key= "cocktail.id">
       <div class="card mb-3" style="max-width: 540px;">
         <div class="row g-0">
           <div class="col-md-4">
             <img :alt="cocktail.name" :src="getCocktailPic(cocktail)">
         </div>
         <div class="col-md-8" style="alignment-baseline: center">
           <div class="card-body">
             <h5 class="card-title">{{cocktail.name}}</h5>
             <p class="card-text">{{cocktail.zutaten}}</p>
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
      cocktails: []
    }
  },
  methods: {
    getCocktailPic (cocktail) {
      switch (cocktail.id) {
        case (1):
          return require('../assets/GinTonic.png')
        case (2):
          return require('../assets/Cocktail2.png')
        default:
          return require('../assets/Cocktail1.png')
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + 'cocktails'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(cocktail => {
        this.cocktails.push(cocktail)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
