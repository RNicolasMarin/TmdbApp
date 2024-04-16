import { ScrollView, StyleSheet } from "react-native";
import HorizontalMovieList from "../components/HorizontalMovieList";
import { fetchMoviesNowPlaying, fetchMoviesPopular, fetchMoviesTopRated, fetchMoviesUpcoming } from "../util/http";
import { useEffect, useState } from "react";
import { NowPlaying, Popular, TopRated, Upcoming } from "../constants/categories";

function HomeScreen({ navigation }) {
    const emptyData = [ {id: 1, title: "\n"}, {id: 2, title: "\n"}, {id: 3, title: "\n"}]
    const initialState = { loading: true, error: false, data: emptyData }
    const [nowPlaying, setNowPlaying] = useState(initialState)
    const [popular, setPopular] = useState(initialState)
    const [topRated, setTopRated] = useState(initialState)
    const [upcoming, setUpcoming] = useState(initialState)

    useEffect(() => {
        async function getMovies(fetchMovies, setMovies, movies) {
          try {
            const movies = await fetchMovies(8, 1)
            setMovies({ ...movies, loading: false, error: false, data: movies })
          } catch (error) {
            setMovies({ ...movies, loading: false, error: true, data: [] })
          }
        }

        getMovies(fetchMoviesNowPlaying, setNowPlaying, nowPlaying);

        getMovies(fetchMoviesPopular, setPopular, popular);

        getMovies(fetchMoviesTopRated, setTopRated, topRated);

        getMovies(fetchMoviesUpcoming, setUpcoming, upcoming);
    }, []);

    function goToMovies(category) {
      navigation.navigate('MovieListScreen', {
        category: category
      });
    }

    function goToMovieDetail(item) {
      navigation.navigate('MovieDetailsScreen', {
        item: item
      });
    }

    return (
        <ScrollView style={styles.container}>
            <HorizontalMovieList 
              category={NowPlaying} 
              movies={nowPlaying.data} 
              goToMovies={() => { goToMovies(NowPlaying) }} 
              onMoviePressed={goToMovieDetail} 
              isLoading={nowPlaying.loading}
            />
            <HorizontalMovieList 
              category={Popular} 
              movies={popular.data} 
              goToMovies={() => { goToMovies(Popular) }} 
              onMoviePressed={goToMovieDetail}
              isLoading={popular.loading}
            />
            <HorizontalMovieList 
              category={TopRated} 
              movies={topRated.data} 
              goToMovies={() => { goToMovies(TopRated) }} 
              onMoviePressed={goToMovieDetail}
              isLoading={topRated.loading}
            />
            <HorizontalMovieList 
              category={Upcoming} 
              movies={upcoming.data} 
              goToMovies={() => { goToMovies(Upcoming) }} 
              onMoviePressed={goToMovieDetail}
              isLoading={upcoming.loading}
            />
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
})