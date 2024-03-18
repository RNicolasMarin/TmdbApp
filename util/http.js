import axios from "axios";
import { ACCESS_TOKEN_TOKEN, BASE_URL } from "../constants/WebConstants";

async function fetchMovies(limit, apiUrl) {
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
    if (limit && parseInt(key) >= limit) {
      break;
    }

    const data = results[key]
    const movie = {
        id: data.id,
        title: data.title,
        description: data.overview,
        image: data.poster_path,
        genres: data.genre_ids
    }
    //console.log("key: " + key + ", Movie: {id: " + movie.id + ", title: " + movie.title + "},\n");// + ", description: " + movie.description + ", image: " + movie.image + ", genres: " + movie.genres + "},\n")
    movies.push(movie);
  }

  //console.log("Size: " + movies.length);
  return movies
}

export async function fetchMoviesNowPlaying(limit) {
  const apiUrl = BASE_URL + 'movie/now_playing?language=en-US&page=1'
  return fetchMovies(limit, apiUrl)
}

export async function fetchMoviesPopular(limit) {
  const apiUrl = BASE_URL + 'movie/popular?language=en-US&page=1'
  return fetchMovies(limit, apiUrl)
}

export async function fetchMoviesTopRated(limit) {
  const apiUrl = BASE_URL + 'movie/top_rated?language=en-US&page=1'
  return fetchMovies(limit, apiUrl)
}

export async function fetchMoviesUpcoming(limit) {
  const apiUrl = BASE_URL + 'movie/upcoming?language=en-US&page=1'
  return fetchMovies(limit, apiUrl)
}