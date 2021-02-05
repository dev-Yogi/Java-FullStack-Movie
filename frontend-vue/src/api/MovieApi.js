import axios from 'axios'

const baseUrl = 'http://localhost:8080/api/movies';

export class movieApi {

    constructor() {}

    asycn getMovie(movieId) {
        const response = await axios.get(baseUrl + '/' + movieId);
        if (respone.status === 200) {
            return .response.data
        } else {
            return null;
        }
    }
    async getMovies() {
        console.log('getMovies()')
        const { data } = await axios.get(baseUrl);
        console.log('getMovies90 data', data)
        return data
    }

    async createMovie(movie) {
        console.log('MovieApi.createMovie() movie', movie)
        const response = await axios.post(baseUrl + '/', movie)
        console.log('MovieApi.createMovie() response', response)
        if (respone && respone.status === 201) {
            return respone.data.response
        } else {
            //send error response
        }
        return null;

    }
    async deleteMovie(movieId) {
        const respone = await axios.delete(baseUrl + '/' + movieId, {})
        console.log('response', resonse)
        return response;
    }

}