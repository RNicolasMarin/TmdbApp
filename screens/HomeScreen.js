import { ScrollView, StyleSheet } from "react-native";
import HorizontalMovieList from "../components/HorizontalMovieList";
import { fetchMoviesNowPlaying, fetchMoviesPopular, fetchMoviesTopRated, fetchMoviesUpcoming } from "../util/http";
import { useEffect, useState } from "react";
import { NowPlaying, Popular, TopRated, Upcoming } from "../constants/categories";

function HomeScreen({ navigation }) {
    const initialState = { loading: true, error: false, data: [] }
    const [nowPlaying, setNowPlaying] = useState(initialState)
    const [popular, setPopular] = useState(initialState)
    const [topRated, setTopRated] = useState(initialState)
    const [upcoming, setUpcoming] = useState(initialState)

    useEffect(() => {
        async function getMovies(fetchMovies, setMovies) {
          try {
            const movies = await fetchMovies(8)
            setMovies({ loading: false, error: false, data: movies })
          } catch (error) {
            setMovies({ loading: false, error: true, data: [] })
          }
        }

        async function getMoviesNowPlaying() {
          getMovies(fetchMoviesNowPlaying, setNowPlaying)  
        }
        getMoviesNowPlaying();

        async function getMoviesPopular() {
          getMovies(fetchMoviesPopular, setPopular)    
        }
        getMoviesPopular();

        async function getMoviesTopRated() {
          getMovies(fetchMoviesTopRated, setTopRated)    
        }
        getMoviesTopRated();

        async function getMoviesUpcoming() {
          getMovies(fetchMoviesUpcoming, setUpcoming)    
        }
        getMoviesUpcoming();
    }, []);

    function goToMovies(category) {
      navigation.navigate('MovieListScreen', {
        category: category
      });
    }

    return (
        <ScrollView style={styles.container}>
            <HorizontalMovieList category={NowPlaying} movies={nowPlaying.data} goToMovies={() => { goToMovies(NowPlaying) }} />
            <HorizontalMovieList category={Popular} movies={popular.data} goToMovies={() => { goToMovies(Popular) }} />
            <HorizontalMovieList category={TopRated} movies={topRated.data} goToMovies={() => { goToMovies(TopRated) }} />
            <HorizontalMovieList category={Upcoming} movies={upcoming.data} goToMovies={() => { goToMovies(Upcoming) }} />
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    
})