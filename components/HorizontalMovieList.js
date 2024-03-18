import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { IMAGE_BASE_URL } from "../constants/WebConstants";

function HorizontalMovieList({ title, movies }) {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: IMAGE_BASE_URL + item.image
                    }} 
                />
            </View>
            <Text style={styles.movieTitle}>{item.title}</Text>
        </View>
      );

    const ItemSeparator = () => <View style={styles.separator} />;

    return (
        <View style={styles.container}>
            <View style={styles.listHeader}>
                <Text style={styles.listTitle}>{title}</Text>
                <Pressable onPress={() => {
                    console.log("PRESSED");
                }}>
                    <Text style={styles.listTitle}>More  &gt;</Text>
                </Pressable>
            </View>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    )
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
    },
    item: {

    },
    separator: {
        width: 10
    },
    imageContainer: {
        borderWidth: 2, // Border width
        borderColor: 'white', // Border color
        borderRadius: 10, // Border radius (optional)
        overflow: 'hidden', // Clip image to border
    },
    movieTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        marginTop: 6,
        width: 150
    },
    image: {
        width: 150,
        height: 250,
        resizeMode: 'cover',
    }
})