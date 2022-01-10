<template>
    <div class="home">
      <div class="Textzeug">
        <h3><b>Willkommen auf der Cocktail-App der #1 wenn es um Cocktails geht!</b></h3>
      <br>
        <br>
        <br>
      <h3><b>Wonach ist dir heute?</b></h3>
        <br>
        <br>
        <br>
      </div>
      <input class="searchbar" type="text" placeholder="VODKA|RUM|KORN|WHISKEY|SÜß|SAUER|HERB|FRUCHTIG|STARK|MITTEL|LEICHT" v-model="search">
      <Cocktailoverview :cocktails="filteredCocktails" :key="cocktails.id" :search="search" ></Cocktailoverview>
    </div>
</template>

<script>
// @ is an alias to /src

import Cocktailoverview from '@/components/Cocktailoverview'
export default {
  name: 'Home',
  components: {
    Cocktailoverview
  },
  data () {
    return {
      cocktails: [],
      search: ''
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
        if (cocktail.id <= 91) {
          this.cocktails.push(cocktail)
        }
      }))
      .catch(error => console.log('error', error))
  },
  computed: {
    filteredCocktails () {
      return this.cocktails.filter(cocktail =>
        cocktail.tags.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
h3{
  font-size: 32px;
}
.Textzeug{
  background-image: url("../assets/Cocktail4.png");
}
.searchbar {
  border-radius: 15px;
  width: 65%;
  margin-top: 2%;
  background: white;
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
