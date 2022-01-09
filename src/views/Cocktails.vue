<template>
  <input class="searchbar" type="text" placeholder="Search" v-model="search">
  <br>
  <br>
  <Cocktailoverview :cocktails="filteredCocktails" :key="cocktails.id" :search="search" ></Cocktailoverview>
  <Cocktailcreate></Cocktailcreate>
</template>

<script>
import Cocktailoverview from '@/components/Cocktailoverview'
import Cocktailcreate from '@/components/Cocktailcreate'
export default {
  name: 'cocktails',
  components: {
    Cocktailcreate,
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
        this.cocktails.push(cocktail)
      }))
      .catch(error => console.log('error', error))
  },
  computed: {
    filteredCocktails () {
      return this.cocktails.filter(cocktail =>
        cocktail.name.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.searchbar {
  border-radius: 15px;
  width: 65%;
  margin-top: 2%;
  background: white;
}
</style>
