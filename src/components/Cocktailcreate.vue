<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#persons-create-offcanvas" aria-controls="#persons-create-offcanvas">
    <i class="bi bi-person-plus-fill">+</i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="persons-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Erstelle deinen eigenen!</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form>
        <div class="mb-3">
          <label for="cocktailname" class="form-label">Cocktailname</label>
          <input type="text" v-model="cocktailname" class="form-control" id="cocktailname" aria-describedby="CocktailnameHelp">
          <div id="CocktailnameHelp" class="form-text">Denk dir einen coolen Namen für den Cocktail aus</div>
        </div>
        <div class="mb-3">
          <label for="cocktailrezept" class="form-label">Cocktailrezept</label>
          <input type="text" v-model="rezept" class="form-control" id="cocktailrezept" aria-describedby="CocktailRezeptHelp">
          <div id="CocktailRezeptHelp" class="form-text">Beschreibe die Zubereitung des Cocktails, was kommt wann?</div>
        </div>
        <div class="mb-3">
          <label for="cocktailzutaten" class="form-label">Cocktail-Zutaten-Liste</label>
          <input type="text" v-model="zutaten" class="form-control" id="cocktailzutaten" aria-describedby="CocktailZutatenHelp">
          <div id="CocktailZutatenHelp" class="form-text">In der Form (4 cl Vodka, 2 cl Grenadine) schreiben</div>
        </div>
        <div class="mb-3">
          <label for="tags" class="form-label">Wähle Tags für deinen Cocktail</label>
          <select id="tags" class="form-select" v-model="tags">
            <option value="" selected disabled>Choose...</option>
            <option value="Wodka">Wodka</option>
            <option value="Rum">Rum</option>
            <option value="Korn">Korn</option>
            <option value="Leicht">Leicht</option>
            <option value="Mittel">Mittel</option>
            <option value="Stark">Stark</option>
          </select>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createCocktail">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cocktailcreate',
  data () {
    return {
      cocktailname: '',
      rezept: '',
      zutaten: '',
      tags: ''
    }
  },
  methods: {
    createCocktail () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + 'cocktails'

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        name: this.cocktailname,
        rezept: this.rezept,
        zutaten: this.zutaten,
        tags: this.tags
      })

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: payload,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
