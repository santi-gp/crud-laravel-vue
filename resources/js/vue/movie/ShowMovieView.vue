<template>
  <section>
    <article>
      <div class="flex-row jc-end m-2">
        <router-link
          class="bgc-4 pyx-05-1 fit-content border-r5 color-1"
          :to="{ name: 'createMovie' }"
          >Añadir Nueva</router-link
        >
      </div>
      <div class="grid-color mx-2">
        <div class="grid-5 bgc-1 color-white">
          <div>ID</div>
          <div>Nombre</div>
          <div>Género</div>
          <div>Año</div>
          <div>Acciones</div>
        </div>
        <div v-for="(item, n) in movies" :key="n" class="grid-5">
          <div>{{ item.id }}</div>
          <div>{{ item.name }}</div>
          <div>{{ item.genre }}</div>
          <div>{{ item.year }}</div>
          <div>
            <router-link
              :to="{ name: 'editMovie', params: { id: item.id } }"
              class="border-r5 bgc-yellow pyx-1-2 color-1"
            >
              Editar
            </router-link>
            <a
              type="button"
              @click="deleteMovie(item.id)"
              class="border-r5 bgc-red pyx-1-2 color-white"
            >
              Eliminar
            </a>
          </div>
        </div>
      </div>
    </article>
  </section>
  <aside></aside>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowMovieView",
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.showMovie();
  },
  methods: {
    async showMovie() {
      await axios
        .get("/api/movie")
        .then((response) => {
          this.movies = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.movies = [];
        });
    },
    deleteMovie(id) {
      if (confirm("¿Confirma eliminar película?")) {
        axios
          .delete(`/api/movie/${id}`)
          .then((response) => {
            this.showMovie();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
