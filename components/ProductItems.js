import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductsItems = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch("https://dummyjson.com/products");
        const data = await resp.json();
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={{ marginVertical: 16 }}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('Product',
                        {
                            title: item.title,
                            description: item.description,
                            image: item.thumbnail,
                            price: item.price,
                            rating: item.rating,
                            brand: item.brand,
                            reviews: item.stock,
                            images: item.images,
                            discount: item.discountPercentage
                        })}
                >
                    <Image source={{ uri: item.thumbnail }} style={styles.image} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            {item.description.length > 2 ?
                                <Text style={styles.description}>{item.description.slice(0, 37) + '\n' + item.description.slice(38, 50)}</Text>
                                : <Text style={styles.description}>{item.description.slice(0, 30) + '...'}</Text>
                            }
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.price}>${item.price}.00</Text>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.rating}>{item.rating}</Text>
                                <AntDesign size={20} name="star" color={'white'} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
        );
    };
    return (
        <View style={styles.container}>
            {data && (
                <FlatList
                    data={data.products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#eee',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 4,
        color: 'grey'
    },
    image: {
        height: 320,
        width: '100%',
        borderRadius: 16
    },
    price: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
        marginTop: 8
    },
    ratingContainer: {
        width: 70,
        backgroundColor: '#388e3c',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        flexDirection: 'row',
        marginTop: 8
    },
    rating: {
        color: 'white',
        fontWeight: '600',
        marginHorizontal: 4
    }

})

export default ProductsItems;