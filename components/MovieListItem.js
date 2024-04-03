import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { IMAGE_BASE_URL } from "../constants/WebConstants";

function MovieListItem({ item, itemStyle, onMoviePressed }) {
    return (
        <Pressable 
            style={[styles.item, itemStyle]}
            onPress={() => {
                onMoviePressed(item)
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: IMAGE_BASE_URL + item.image_portrait
                    }} 
                />
            </View>
            <Text style={styles.movieTitle}>{item.title}</Text>
        </Pressable>
    );
}

export default MovieListItem;

const styles = StyleSheet.create({
    item: {
        
    },
    imageContainer: {
        borderWidth: 2, // Border width
        borderColor: 'white', // Border color
        borderRadius: 10, // Border radius (optional)
        overflow: 'hidden', // Clip image to border
    },
    image: {
        width: 150,
        height: 250,
        resizeMode: 'cover',
    },
    movieTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        marginTop: 6,
        width: 150
    }
});