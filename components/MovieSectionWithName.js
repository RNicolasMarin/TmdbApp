import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function MovieSectionWithName({ title, content }) {
    const isUrl = content !== undefined && content.startsWith("http")

    let contentText = <Text style={styles.content}>{content}</Text>

    const handlePress = async () => {
        // Checking if the link is supported
        const supported = await Linking.canOpenURL(content);
        if (supported) {
          // Opening the link in the default browser app
          await Linking.openURL(content);
        } else {
          console.error("Don't know how to open URI: " + content);
        }
      };

    if (isUrl) {
        contentText = (
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.content}>{content}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {contentText}
        </View>
    )
}

export default MovieSectionWithName;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        borderWidth: 2, // Border width
        borderColor: 'white', // Border color
        borderRadius: 10, // Border radius (optional)
        overflow: 'hidden',
        marginTop: 6,
        padding: 5
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    content: {
        fontSize: 15,
        color: 'white',
    }
});