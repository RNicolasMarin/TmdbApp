import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { getTitle } from "../constants/categories";
import MovieListItem from "./MovieListItem";
import ItemSeparator from "./ItemSeparator";

function HorizontalMovieList({ category, movies, goToMovies, onMoviePressed, isLoading }) {
    const title = getTitle(category)

    return (
        <View style={styles.container}>
            <View style={styles.listHeader}>
                <Text style={styles.listTitle}>{title}</Text>
                <Pressable onPress={() => { goToMovies() }}>
                    <Text style={styles.listTitle}>More  &gt;</Text>
                </Pressable>
            </View>
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieListItem item={item} onMoviePressed={onMoviePressed} isLoading={isLoading}/>}
                keyExtractor={(item) => item.id}
                horizontal={true}
                ItemSeparatorComponent={ItemSeparator}
                scrollEnabled={!isLoading}
            />
        </View>
    );
}

export default HorizontalMovieList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 12
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginBottom: 10
    }
})