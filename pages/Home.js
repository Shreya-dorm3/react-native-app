import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetails } from "./ProductDetail.js";
import { ProductsList } from "./Product-Home.js";
import { CartIcon } from "../components/Cart.js";

const Stack = createNativeStackNavigator();

export function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={ProductsList} options={({ navigation }) => ({ title: 'Products', headerRight: () => <CartIcon navigation={navigation} /> })} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={({ navigation }) => ({ title: 'Product Detail', headerRight: () => <CartIcon navigation={navigation} /> })} />
        </Stack.Navigator>
    )
}

export default Home;