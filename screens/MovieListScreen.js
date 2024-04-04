import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
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
       
    const initialState = { loading: true, error: false, data: [], loadingMore: false, page: 1 }
    const [movies, setMovies] = useState(initialState)
    
    useEffect(() => {
        async function getMovies() {
          try {
            const fetchMovies = getFetchMoviesCall(route.params.category)
            const result = await fetchMovies(undefined, movies.page)
            setMovies({ ...movies, loading: false, error: false, data: result, page: movies.page + 1 })
          } catch (error) {
            setMovies({ ...movies, loading: false, error: true, data: []})
          }
        }
        getMovies();
    }, []);

    function goToMovieDetail(item) {
        navigation.navigate('MovieDetailsScreen', {
            item: item
        });
    }

    const loadMoreItems = async () => {
        setMovies({ ...movies, loadingMore: true })

        try {
            const fetchMovies = getFetchMoviesCall(route.params.category)
            const result = await fetchMovies(undefined, movies.page)
            const newMovies = [...movies.data, ...result]
            setMovies({ ...movies, data: newMovies, loadingMore: false, page: movies.page + 1 })
        } catch (error) {
            setMovies({ ...movies, error: true, loadingMore: false })
        }
    };

    const renderItem = ({ item }) => <MovieListItem item={item} itemStyle={styles.item} onMoviePressed={goToMovieDetail}/>

    const renderFooter = () => (
        <View style={styles.loading}>
            <ActivityIndicator size="small" color="white"/>
        </View>
    );
        
    return (
        <View style={styles.container}>
            <FlatList style={styles.grid}
                data={movies.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                ItemSeparatorComponent={ItemSeparator}
                onEndReached={loadMoreItems} // Call loadMoreItems when end is reached
                ListFooterComponent={renderFooter}
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
    },
    loading: {
        alignItems: 'center',
        padding: 15
    }
})