<template>
  <div class="card-group">
    <div class="col" v-for="cocktail in cocktails" :key= "cocktail.id">
      <div class="card text-white bg-dark mb-3" style="width: 20rem; height: 75rem; ">
        <img src="@/assets/Cocktail2.png" class="card-img-top" alt="Cocktail logo missing">
        <div class="card-body">
          <h5 class="card-title">{{cocktail.name}}</h5>
          <p class="card-text">{{cocktail.rezept}}</p>
          <a href="#" class="btn btn-primary">
            <router-link :to="{ path: '/cocktail', query: { id: cocktail.id }}">Zum Rezept!</router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Cocktail',
  props: {
    cocktails: Array
  },
  data () {
    return {
      cocktail: this.cocktail
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.card-group {
  margin: auto;
  width: 90%;
  padding: 10px;
}
</style>
