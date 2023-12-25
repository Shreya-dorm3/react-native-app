import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./pages/Product-Home.js";
import { ProductDetails } from "./pages/ProductDetail.js";
import { Cart } from "./pages/Cart.js";
import { CartProvider } from "./CardContext.js";
import { CartIcon } from "./components/Cart.js";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home } from "./pages/Home.js";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: true }}>
          <Tab.Screen name="Products" component={Home} />
          {/* <Tab.Screen name="ProductDetails" component={ProductDetails} options={({ navigation }) => ({ title: 'Product Detail', headerRight: () => <CartIcon navigation={navigation} /> })} /> */}
          <Tab.Screen name="Cart" component={Cart} options={({ navigation }) => ({ title: 'Cart', headerRight: () => <CartIcon navigation={navigation} /> })} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default App;