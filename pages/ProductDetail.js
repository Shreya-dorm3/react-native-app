import React, { useEffect, useState, useContext } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button, Dimensions } from "react-native";
import { getProduct } from '../services/ProductServices';
import { CartContext } from "../CardContext";
import Swiper from 'react-native-swiper';

const width = Dimensions.get("window");

export function ProductDetails({ route }) {

    const { productId } = route.params;
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        setProduct(getProduct(productId));
        setImages(getProduct(productId).images);
    })

    const { addItemToCart } = useContext(CartContext)

    function onAddToCart() {
        addItemToCart(product.id)
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Swiper showsHorizontalScrollIndicator={true} style={{ height: 300 }} scrollEnabled>
                        {images.map((item, index) => (
                            <Image
                                style={styles.image}
                                source={{ uri: item }}
                                key={index}
                            />
                        ))}
                    </Swiper>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{product.title}</Text>
                    <Text style={styles.price}>{'\u20A8'} {product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Button onPress={onAddToCart} title="Add To Cart" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: width
    },
    image: {
        height: 300,
        resizeMode: 'contain'
    },
    infoContainer: {
        padding: 16
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
    },
});