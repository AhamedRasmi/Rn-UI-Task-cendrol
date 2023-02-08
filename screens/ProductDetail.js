import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import PrimaryButton from "../components/Button";
import OfferDetails from "../components/OfferDetails";

const ProductDetail = ({ route, navigation }) => {

    const { title, description, image, images, price, rating, brand, reviews, discount } = route.params;
    return (

        <ScrollView style={styles.container}>
            <Image source={{ uri: image }} style={{ height: 350, width: '100%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, }} />
            <TouchableOpacity style={{
                position: 'absolute', left: 20, top: 25
            }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={25} color="#388e3c" />
            </TouchableOpacity>

            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Text style={styles.title}>{title} (<Text>{brand}</Text>)</Text>
                <Text style={styles.description}>{description}</Text>


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{
                        width: 70,
                        backgroundColor: '#388e3c',
                        padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 6,
                        flexDirection: 'row',
                    }}>

                        <Text style={{ color: 'white', fontWeight: '600', marginHorizontal: 4 }}>{rating}</Text>
                        <AntDesign size={20} name="star" color={'white'} />
                    </View>
                    <View>
                        <Text style={{ marginHorizontal: 9, color: 'grey' }}>({reviews}) Reviews</Text>
                    </View>
                </View>
                <OfferDetails />
                <PrimaryButton>Buy now</PrimaryButton>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 4,
        color: '#000'
    },
    description: {
        color: 'grey',
        fontSize: 14,
        marginVertical: 12
    }

});

export default ProductDetail;