import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export function Product({ title, price, images, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.image} source={{uri: images[0], height: 100, width: 100}} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.price}>Rs. {price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%'
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    infoContainer: {
        padding: 16
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    }
})