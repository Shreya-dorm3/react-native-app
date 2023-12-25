import React, { useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { CartContext } from "../CardContext";

export function CartIcon({ navigation }) {
    const { getItemsCount } = useContext(CartContext);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text} onPress={() => { navigation.navigate('Cart') }}>
                Cart ({getItemsCount()})
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        backgroundColor: 'orange',
        height: 39,
        padding: 12,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13
    }
})