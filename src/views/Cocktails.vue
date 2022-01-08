<template>
  <input class="searchbar" type="text" placeholder="Search" v-model="search">
  <br>
  <br>
  <div class="col" v-for="cocktail in filteredCocktails" :key= "cocktail.id">
    <div class="card mb-3">
      <div class="row g-0">
        <div>
          <div class="card-body">
            <div>
              <img width="300" height="250" :alt="cocktail.name" :src="getCocktailPic(cocktail)">
            </div>
            <div style="text-align: -webkit-left;">
              <h5 class="card-title">{{cocktail.name}}</h5>
              <br>
              <p class="card-text">{{cocktail.zutaten}}</p>
              <button onclick="window.location.href='https://www.gutekueche.at/cosmopolitan-cocktail-rezept-17940';">Rezept</button>
            </div>
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
      search: '',
      cocktails: []
    }
  },
  methods: {
    getCocktailPic (cocktail) {
      switch (cocktail.id) {
        case (1):
          return require('../../../cocktailfrontend/src/assets/Cocktail8.png')
        case (2):
          return require('../../../cocktailfrontend/src/assets/Cocktail8.png')
        default:
          return require('../../../cocktailfrontend/src/assets/Cocktail8.png')
      }
    }
  },
  mounted () {
    const endpoint = 'http://localhost:8080/cocktails'
    console.log(endpoint)
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
.card-body {
  /*background-color: hsla(0, 78%, 55%, 0.801);*/
  background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
  display:-webkit-inline-flex;
  width: 70%;
  border-radius: 25px;
  border: inset;
}

#container {
  visibility: hidden;
}

#loader {
  color: #008cff;
  height: 40px;
  left: 45%;
  position: absolute;
  top: 45%;
  width: 30%;
}

.e-card {
  width: 300px
}

.searchbar {
  border-radius: 15px;
  width: 65%;
  margin-top: 2%;
}

</style>
