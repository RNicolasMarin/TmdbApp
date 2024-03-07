import axios from "axios";
import { ACCESS_TOKEN_TOKEN, BASE_URL } from "../constants/WebConstants";

export async function fetchMoviesNowPlaying() {
    const apiUrl = BASE_URL + 'movie/now_playing?language=en-US&page=1'
    const requestType = 'GET';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + ACCESS_TOKEN_TOKEN,
    };

    const response  = await axios({
      method: requestType,
      url: apiUrl,
      headers: headers,
    })

    const movies = []
    const results = response.data.results

    for (const key in results) {
        const data = results[key]
        const movie = {
            id: data.id,
            title: data.original_title,
            description: data.overview,
            image: data.poster_path,
            genres: data.genre_ids
        }
        console.log("Movie: {id: " + movie.id + ", title: " + movie.title + ", description: " + movie.description + ", image: " + movie.image + ", genres: " + movie.genres + "},\n")
        movies.push(movie);
    }

    return movies
}