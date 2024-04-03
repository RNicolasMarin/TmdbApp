import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { fetchMovieDetails } from "../util/http";
import { IMAGE_BASE_URL } from "../constants/WebConstants";
import MovieSectionWithName from "../components/MovieSectionWithName";

function MovieDetailsScreen({ route, navigation }) {
    const title = route.params.item.title;

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
        if (movieDetails.data === undefined) {
            return <View style={styles.innerContainer}/>
        } 

        const genres = getItemsToShow(details.genres)
        const companies = getItemsToShow(details.companies)
        const countries = getItemsToShow(details.countries)
        const languages = getItemsToShow(details.languages)
        
        return (
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={[styles.image, { aspectRatio: 16 / 9 }]}
                        source={{
                            uri: IMAGE_BASE_URL + details.image_landscape
                        }} 
                    />
                </View>
                <MovieSectionWithName title={"Plot"} content={details.description}/>
                <MovieSectionWithName title={"Genres"} content={genres}/>
                <MovieSectionWithName title={"Studios"} content={companies}/>
                <MovieSectionWithName title={"Release Date"} content={details.release_date}/>
                <MovieSectionWithName title={"Countries"} content={countries}/>
                <MovieSectionWithName title={"Languages"} content={languages}/>
                <MovieSectionWithName title={"Status"} content={details.status}/>
                <MovieSectionWithName title={"HomePage"} content={details.homepage}/>
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
    }
});