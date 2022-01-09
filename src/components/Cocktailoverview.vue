<template>
  <div class="card-group">
    <div class="col" v-for="cocktail in cocktails" :key= "cocktail.id">
      <div class="card text-white bg-dark mb-3" style="width: 20rem; height: 75rem; ">
        <img src="@/assets/Cocktail2.png" class="card-img-top" alt="Cocktail logo missing">
        <div class="card-body">
          <h4 class="card-title">{{cocktail.name}}</h4>
          <p class="card-text">{{cocktail.rezept}}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Zeig mir das Rezept
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                          <img src="@/assets/Caipirinha.jpeg" id="imagepreview" class="float-md-end mb-3 ms-md-3" alt="..." style="width: 200px; height: auto">
                        </div>
                        <div class="col">
                          {{cocktail.rezept}}
                        </div>
                        <div class="col">
                            {{ cocktailZutatentoList(cocktail) }}
                          </div>
                        </div>
                      </div>
                  </div>
                    </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
    cocktailZutatentoList (cocktail) {
      return cocktail.zutaten.split(', ').join(' \n')
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
  background: beige;
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
