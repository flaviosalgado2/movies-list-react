import axios from 'axios';

const API_KEY = '01bcb73836f3de5be343cfca3f63f9fe';
const BASE_URL = 'https://api.themoviedb.org/3/'

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;
export class MoviesService {
    static getMovies(){
        return axios(withBaseUrl('movie/popular'))
    }

    static getMoviesDetail(id){
        return axios(withBaseUrl(`movie/${id}`))
    }
}