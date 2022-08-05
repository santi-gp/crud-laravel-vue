<template>
  <section class="f-basis100">
    <h3 class="txt-center my-2">Editar película</h3>
    <form class="flex-row flex-column" @submit.prevent="editMovie">
      <input type="text" v-model="movie.name" />
      <input type="text" v-model="movie.genre" />
      <input type="text" v-model="movie.year" />
      <button class="bgc-3 m-1-auto border-r5" type="submit">Actualizar</button>
    </form>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "editMovie",
  data() {
    return {
      movie: {
        name: "",
        genre: "",
        year: "",
      },
    };
  },
  mounted() {
    this.showMovie();
  },

  methods: {
    async showMovie() {
      await axios
        .get(`/api/movie/${this.$route.params.id}`)
        .then((response) => {
          const { name, genre, year } = response.data;
          this.movie.name = name;
          this.movie.genre = genre;
          this.movie.year = year;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async editMovie() {
      await axios
        .put(`/api/movie/${this.$route.params.id}`, this.movie)
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
