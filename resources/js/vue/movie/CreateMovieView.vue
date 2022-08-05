<template>
  <section class="f-basis100">
    <h3 class="txt-center my-2">Añadir película</h3>
    <form class="flex-row flex-column" @submit.prevent="createMovie">
      <input type="text" v-model="movie.name" placeholder="Nombre" />
      <input type="text" v-model="movie.genre" placeholder="Género" />
      <input type="text" v-model="movie.year" placeholder="Año" />
      <button class="bgc-3 m-1-auto border-r5" type="submit">Guardar</button>
    </form>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "createMovie",
  data() {
    return {
      movie: {},
    };
  },
  methods: {
    async createMovie() {
      await axios
        .post("/api/movie", this.movie)
        .then((response) => {
          this.$router.push({ name: "showMovie" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
form {
  margin: 0 auto;
  width: 50%;
}
form input {
  margin: 2% 0;
}
button {
  width: fit-content;
  padding: 1% 2%;
}
</style>