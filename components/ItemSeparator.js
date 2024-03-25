import { StyleSheet, View } from "react-native";

function ItemSeparator() {
    return <View style={styles.separator} />
}

export default ItemSeparator;

const styles = StyleSheet.create({
    separator: {
        width: 10
    }
})