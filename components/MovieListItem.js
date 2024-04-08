import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { IMAGE_BASE_URL } from "../constants/WebConstants";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

function MovieListItem({ item, itemStyle, onMoviePressed, isLoading }) {
    return (
        isLoading ? (
            <ShimmerPlaceholder 
                style={styles.loading} 
                duration={1500}
                direction="up"
                shimmerColors={['#F0F0F0', '#C0C0C0', '#F0F0F0']}
            />
        ) : (
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
        )
    );
}

export default MovieListItem;

const styles = StyleSheet.create({
    loading: {
        width: 154,
        height: 298,
        borderRadius: 10 
    },
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