import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { getFetchMoviesCall, getTitle } from "../constants/categories";
import ItemSeparator from "../components/ItemSeparator";
import MovieListItem from "../components/MovieListItem";

function MovieListScreen({ route, navigation }) {
    const title = getTitle(route.params.category);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title,
        });
    }, [navigation, title]);
       
    const initialState = { loading: true, error: false, data: [] }
    const [movies, setMovies] = useState(initialState)
    
    useEffect(() => {
        async function getMovies() {
          try {
            const fetchMovies = getFetchMoviesCall(route.params.category)
            const result = await fetchMovies()
            setMovies({ loading: false, error: false, data: result })
          } catch (error) {
            setMovies({ loading: false, error: true, data: [] })
          }
        }
        getMovies();
    }, []);

    function goToMovieDetail(item) {
        navigation.navigate('MovieDetailsScreen', {
            item: item
        });
    }
        
    return (
        <View style={styles.container}>
            <FlatList style={styles.grid}
                data={movies.data}
                renderItem={({ item }) => <MovieListItem item={item} itemStyle={styles.item} onMoviePressed={goToMovieDetail}/>}
                keyExtractor={(item) => item.id}
                numColumns={2}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
}

export default MovieListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    grid: {
        flex: 1,
        padding: 12,
        marginBottom: 20
    },
    item: {
        paddingHorizontal: 5,
        paddingVertical: 10
    }
})