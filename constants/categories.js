import { fetchMoviesNowPlaying, fetchMoviesPopular, fetchMoviesTopRated, fetchMoviesUpcoming } from "../util/http"

export const NowPlaying = "NowPlaying"
export const Popular = "Popular"
export const TopRated = "TopRated"
export const Upcoming = "Upcoming"

export function getTitle(category) {
    switch (category) {
        case NowPlaying:
            return "Now Playing"
        case Popular:
            return "Popular"
        case TopRated:
            return "Top Rated"
        default: //case Upcoming:
            return "Upcoming"
    }
}

export function getFetchMoviesCall(category) {
    switch (category) {
        case NowPlaying:
            return fetchMoviesNowPlaying
        case Popular:
            return fetchMoviesPopular
        case TopRated:
            return fetchMoviesTopRated
        default: //case Upcoming:
            return fetchMoviesUpcoming
    }
}



