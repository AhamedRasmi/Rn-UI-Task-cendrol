import { ScrollView, StyleSheet, View } from 'react-native';
import ProductsItems from '../components/ProductItems'
import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {

    const [activeTab, setActiveTab] = useState("Dashboard");
    const [city, setCity] = useState("San Francisco");

    return (
        <View style={styles.container}>
            <View style={styles.home}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ProductsItems navigation={navigation} />
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    home: {
        backgroundColor: 'white',
        padding: 16
    }
});
