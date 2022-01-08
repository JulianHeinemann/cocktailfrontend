<template>
  <cocktail></cocktail>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/GinTonic.png" class="d-block w-50" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <p>Hier steht etwas</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/GinTonic.png" class="d-block w-50" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/GinTonic.png" class="d-block w-50" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>hier auch</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</template>

<script>
export default {
  name: 'Cocktail',
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
.carousel-control-next,
.carousel-control-prev /*, .carousel-indicators */ {
  filter: invert(100%);
}
.carousel-indicators {
  color: red
}
.carousel-caption {
  color: red
}
.carousel {
  position: center;
  object-position: center;
  width: 1000px;
}
.carousel-item {
  position: center;
}
</style>
