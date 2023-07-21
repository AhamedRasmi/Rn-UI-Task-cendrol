import { ScrollView, StyleSheet, View } from 'react-native';
import ProductsItems from '../components/ProductItems'
import SearchBar from '../components/SearchBar';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.home}>
                <SearchBar cityHandler={setCity} />
            </View>
            <ProductsItems navigation={navigation} />
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
