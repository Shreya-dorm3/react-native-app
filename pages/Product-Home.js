import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getProductList } from "../services/ProductServices.js";
import { Product } from "../components/Product";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetails } from "./ProductDetail.js";

const Stack = createNativeStackNavigator();

export function ProductsList({ navigation }) {

    function renderProduct({ item: product }) {
        return (
            <Product
                {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', { productId: product.id })
                }}
            />
        )
    }

    const [products, setProducts] = useState([]);
    var PRODUCTS = [];

    useEffect(() => {
        async function getProductsAPI() {
            const response = await fetch('https://dummyjson.com/products');
            const json = await response.json();
            PRODUCTS = json.products;
            setProducts(PRODUCTS)
        }
        getProductsAPI();
        getProductList();
    }, [])

    return (
        <FlatList
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    )
}

const styles = StyleSheet.create({
    productsList: {
        backgroundColor: "#eeeeee",
    },
    productsListContainer: {
        backgroundColor: "#eeeeee",
        paddingVertical: 8,
        marginHorizontal: 8,
    },
});
