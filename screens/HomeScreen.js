import { ScrollView, StyleSheet, Text, View } from "react-native";
import HorizontalMovieList from "../components/HorizontalMovieList";
import { fetchMoviesNowPlaying } from "../util/http";
import { useEffect, useState } from "react";

function HomeScreen() {
    const [nowPlaying, setNowPlaying] = useState({
        loading: true,
        error: false,
        data: []
    })

    useEffect(() => {
        async function getMoviesNowPlaying() {
          try {
            const movies = await fetchMoviesNowPlaying(8)
            console.log("Success: " + movies)
            setNowPlaying({
                loading: false,
                error: false,
                data: movies
            })
          } catch (error) {
            console.log("error: " + error);
            setNowPlaying({
                loading: false,
                error: true,
                data: []
            })
          }
          
        }
        getMoviesNowPlaying();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <HorizontalMovieList title="Now Playing" movies={nowPlaying.data} />
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    
})