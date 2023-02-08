import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProductDetail from "../screens/ProductDetail";


export default function RootNavigator() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Product" component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}