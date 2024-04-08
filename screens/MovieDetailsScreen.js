import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { fetchMovieDetails } from "../util/http";
import { IMAGE_BASE_URL } from "../constants/WebConstants";
import MovieSectionWithName from "../components/MovieSectionWithName";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

function MovieDetailsScreen({ route, navigation }) {
    const title = route.params.item.title;
    const [isImageLoaded, setIsImageLoaded] = useState(false); 

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title,
        });
    }, [navigation, title]);

    const initialState = { loading: true, error: false, data: [] }
    const [movieDetails, setMovieDetails] = useState(initialState)

    useEffect(() => {
        async function getMovieDetails() {
          try {
            const result = await fetchMovieDetails(route.params.item.id)
            setMovieDetails({ loading: false, error: false, data: result })
          } catch (error) {
            setMovieDetails({ loading: false, error: true, data: [] })
          }
        }
        getMovieDetails();
    }, []);

    function getItemsToShow(items) {
        if (items !== undefined) {
            return items.map(item => item.name).join(', ');
        }
        return ""
    }

    function getContentToShow() {
        const details = movieDetails.data
        let genres = ""
        let companies = ""
        let countries = ""
        let languages = ""
        let description = ""
        let date = ""
        let status = ""
        let homepage = ""
        if (details !== undefined) {
            homepage = details.homepage
            status = details.status
            date = details.release_date
            description = details.description
            genres = getItemsToShow(details.genres)
            companies = getItemsToShow(details.companies)
            countries = getItemsToShow(details.countries)
            languages = getItemsToShow(details.languages)
        } 

        return (
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    { !isImageLoaded &&
                        <View style={[styles.image]}>
                            <ShimmerPlaceholder 
                                style={{ width: '100%', height: '100%'}}
                                duration={1500}
                                direction="up"
                                shimmerColors={['#F0F0F0', '#C0C0C0', '#F0F0F0']}
                            />
                        </View>
                    }
                    
                    <Image
                        style={[styles.image, !isImageLoaded && { width: '0%', height: '0%'}]}
                        source={{
                            uri: IMAGE_BASE_URL + details.image_landscape
                        }}
                        onLoad={() => {
                            setIsImageLoaded(true);
                        }} 
                    />
                </View>
                <MovieSectionWithName title={"Plot"} content={description} isLoading={movieDetails.loading} height={120}/>
                <MovieSectionWithName title={"Genres"} content={genres} isLoading={movieDetails.loading} height={60}/>
                <MovieSectionWithName title={"Studios"} content={companies} isLoading={movieDetails.loading} height={70}/>
                <MovieSectionWithName title={"Release Date"} content={date} isLoading={movieDetails.loading} height={60}/>
                <MovieSectionWithName title={"Countries"} content={countries} isLoading={movieDetails.loading} height={50}/>
                <MovieSectionWithName title={"Languages"} content={languages} isLoading={movieDetails.loading} height={60}/>
                <MovieSectionWithName title={"Status"} content={status} isLoading={movieDetails.loading} height={70}/>
                <MovieSectionWithName title={"HomePage"} content={homepage} isLoading={movieDetails.loading} height={60}/>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            {getContentToShow()}
        </ScrollView>
    )
}

export default MovieDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    innerContainer: {
        padding: 8
    },
    imageContainer: {
        borderWidth: 2, // Border width
        borderColor: 'white', // Border color
        borderRadius: 10, // Border radius (optional)
        overflow: 'hidden', // Clip image to border
    },
    image: {
        width: 'auto',
        resizeMode: 'cover',
        aspectRatio: 16 / 9
    }
});