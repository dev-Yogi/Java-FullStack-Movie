<template>
  <div class="search">
    <h1>Search</h1>
    <input type='text' v-model='query' @keyup='getResult(query)'>
        <div v-for='result in results' :value="result.id" :key='result.id'>
             <p>{{result.title}}</p>
             <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path" width='100px'>
        </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'search',
 data () {
 return {
  query: '',
  results: ''
}
 },
 methods: {
     getResult(query) {
    axios.get('https://api.themoviedb.org/3/search/?api_key=7d8c97e0d0d685fe9ea3487465e82efc query=' + query)
    .then(response => { this.results = response.data.results})
   console.log(this.result)
  
 },
 mounted(){
   axios.get('https://api.themoviedb.org/3/search/movie?api_key=7d8c97e0d0d685fe9ea3487465e82efc')
   .then(response => {this.results = response.data.result}) 
 }
 }
 }

</script>
<style scoped>
h1{
    text-align: center;
    font-weight:bold;
    font-size: 2em;
    padding-top: 15px;

}
input{
   margin-left: 550px;
}
</style>