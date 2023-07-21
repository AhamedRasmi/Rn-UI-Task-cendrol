import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import ViewCart from "./products/ViewCart";

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

    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) =>
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...item,
                productName: item.title,
                checkboxValue: checkboxValue,
            },
        });

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );
    // const isProductIncart = (item, cartItems) => (
    //     Boolean(cartItems.find((item) => item.title === item.title))
    // )

    const renderItem = ({ item }) => {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                    <BouncyCheckbox
                        iconStyle={{ borderColor: 'lightgray' }}
                        fillColor="black"
                        // isChecked={isProductIncart(item, cartItems)}
                        onPress={(checkboxValue) => selectItem(item, checkboxValue)} />

                    <View>
                        <TouchableOpacity
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
                            {item.title.length > 25 ?
                                <Text style={styles.title}>{item.title.slice(0, 20) + '\n' + '...'}</Text>
                                : <Text style={styles.title}>{item.title.slice(0, 20)}</Text>
                            }
                            {item.description.length > 30 ?
                                <Text style={styles.description}>{item.description.slice(0, 30) + '\n' + '...'}</Text>
                                : <Text style={styles.description}>{item.description.slice(0, 30) + '...'}</Text>
                            }
                            <Text>${item.price}.00</Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <Image source={{ uri: item.thumbnail }} style={styles.image} />
                    </View>
                </View>
                <Divider width={0.5} orientation="vertical" />
            </View >
        );
    };
    return (
        <View style={styles.container}>
            {data && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data.products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
            <ViewCart navigation={navigation} />

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
        fontSize: 15,
        fontWeight: '600',

    },
    image: {
        height: 110,
        width: 110,
        borderRadius: 7
    },
    description: {
        fontSize: 12,
        // marginTop: 8,
        color: 'grey'
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