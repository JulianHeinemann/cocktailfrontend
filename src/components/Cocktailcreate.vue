<template>
    <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#persons-create-offcanvas" aria-controls="#persons-create-offcanvas">
      <i class="bi bi-person-plus-fill">+</i>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="persons-create-offcanvas" aria-labelledby="offcanvas-label">
      <div class="offcanvas-header">
        <h5 id="offcanvas-label">New Cocktail</h5>
        <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <form class="text-start needs-validation" id="persons-create-form" novalidate>
          <div class="mb-3">
            <label for="cocktailname" class="form-label">Cocktail-Name</label>
            <input type="text" class="form-control" id="cocktailname" v-model="cocktailname" required>
            <div class="invalid-feedback">
              Please provide a name.
            </div>
          </div>
          <div class="mb-3">
            <label for="rezept" class="form-label">Rezept</label>
            <input type="text" class="form-control" id="rezept" v-model="rezept" required>
            <div class="invalid-feedback">
              Please provide the rezept.
            </div>
          </div>
          <div class="mb-3">
            <label for="zutaten" class="form-label">Zutaten</label>
            <input type="text" class="form-control" id="zutaten" v-model="zutaten" required>
            <div class="invalid-feedback">
              Please provide the zutaten.
            </div>
          </div>
          <div class="mb-3">
            <label for="tags" class="form-label">Tags</label>
            <select id="tags" class="form-select" v-model="tags" required>
              <option value="" selected disabled>Choose...</option>
              <option value="VODKA">Vodka</option>
              <option value="WHISKEY">WHISKEY</option>
              <option value="RUM">RUM</option>VODKA|RUM|KORN|WHISKEY|SÜß|SAUER|HERB|FRUCHTIG|STARK|MITTEL|LEICHT
              <option value="KORN">KORN</option>
              <option value="SÜß">SÜß</option>
              <option value="SAUER">SAUER</option>
              <option value="HERB">HERB</option>
              <option value="FRUCHTIG">FRUCHTIG</option>
              <option value="STARK">STARK</option>
              <option value="MITTEL">MITTEL</option>
              <option value="LEICHT">LEICHT</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid Tag.
            </div>
          </div>
          <div v-if="this.serverValidationMessages">
            <ul>
              <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
                {{ message }}
              </li>
            </ul>
          </div>
          <div class="mt-5">
            <button class="btn btn-primary me-3" type="submit" @click.prevent="createCocktail()">Create Cocktail</button>
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
      tags: '',
      serverValidationMessages: []
    }
  },
  methods: {
    async createCocktail () {
      const valid = this.validate()
      if (valid) {
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

        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      let valid = true
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              valid = false
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, false)
        })
      return valid
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
