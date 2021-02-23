import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App.vue'
import { reactive, watchEffect } from '@vue/composition-api';
const API_KEY = 'c8d8aebd';

Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'App',
        component: App
    },
    {
        path: '/actor',
        name: 'Actor',
        component: () =>
            import ('../views/AddActor.vue')
    }, {
        path: '/actors',
        name: 'Actors',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Actors.vue')
    },
    {
        path: '/movies',
        name: 'Movies',
        component: () =>
            import ('../views/Movies.vue')
    },
    {

        path: '/movie/:id',
        name: 'Movie',
        component: () =>
            import ('../views/MovieDetail.vue')
    },
    {
        path: '/movies/add',
        name: 'AddMovie',
        component: () =>
            import ('../views/AddMovie.vue')

    },
    {
        path: '/movies/search',
        name: 'Search',
        component: () =>
            import ('../components/Search.vue')
    }


]

const router = new VueRouter({
    routes
})

export default router

export const useMovieApi = () => {
    const state = reactive({
        search: 'Joker',
        loading: true,
        movies: []
    });

    watchEffect(() => {
        const MOVIE_API_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;

        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                state.movies = jsonResponse.Search;
                state.loading = false;
            });
    });

    return state;
};