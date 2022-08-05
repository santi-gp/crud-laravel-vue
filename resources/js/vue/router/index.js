import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShowMovieView from '../movie/ShowMovieView.vue';
import CreateMovieView from '../movie/CreateMovieView.vue';
import EditMovieView from '../movie/EditMovieView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/movie/movies',
    name: 'showMovie',
    component: ShowMovieView,
  },
  {
    path: '/movie/create',
    name: 'createMovie',
    component: CreateMovieView,
  },
  {
    path: '/movie/edit',
    name: 'editMovie',
    component: EditMovieView,
  },

];

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;
