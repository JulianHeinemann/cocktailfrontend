<template>
  <h3>cocktail.name</h3>
</template>

<script>
export default {
  name: 'Recipe',
  props: {
    cocktail: Object
  },
  data () {
    return {
    }
  },
  methods: {
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
