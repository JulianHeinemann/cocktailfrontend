<template>
  <div class="card-group">
    <div class="col" v-for="cocktail in cocktails" :key="cocktail.id">
      <div class="card text-white bg-dark mb-3" style="width: 20rem; height: 75rem; ">
        <img :src="cocktailURL(cocktail)" class="card-img-top" alt="Cocktail logo missing">
        <div class="card-body">
          <h4 class="card-title">{{cocktail.name}}  <span class="badge bg-secondary">{{cocktail.tags}}</span></h4>
          <p class="card-text">{{cocktail.rezept}}</p>
            <button type="button" :id="'button-id-' + cocktail.id" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#'+cocktail.name.replaceAll(' ','')">
              Zeig mir das Rezept
            </button>
            <!-- Modal -->
            <div class="modal fade" :id="cocktail.name.replaceAll(' ','')" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg " style="width: 2000px;">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ cocktail.name }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="container">
                      <div class="row align-items-start">
                        <div class="col">
                          <img :src="cocktailURL(cocktail)" id="imagepreview" class="float-md-end mb-3 ms-md-3" alt="..." style="width: 200px; height: auto">
                        </div>
                        <div class="col">
                          {{cocktail.rezept}}
                        </div>
                        <div class="col">
                            {{cocktail.zutaten}}
                          </div>
                        </div>
                      </div>
                  </div>
                    </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
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
    cocktailURL (cocktail) {
      console.log(cocktail.name)
      // bis id 28 selbst Bilder eingefügt
      if (cocktail.id <= 91) {
        return require('../assets/' + cocktail.name.toLowerCase().replaceAll(' ', '') + '.jpeg')
      } else {
        return require('../assets/Cocktail2.png')
      }
    }
  }
}
</script>

<style scoped>
.modal-dialog{
  width: 2000px;
  margin: auto;
  margin-top: 100px;
}
.modal{
  color: black;
}
.card-group {
  margin: auto;
  width: 90%;
  padding: 10px;
}
a{
  color: white;
}
</style>
