import { useState } from "react";
import { Text, TouchableOpacity, View, Modal, StyleSheet } from "react-native"
import { useSelector } from "react-redux";

const ViewCart = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const { items, productName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{productName}</Text>
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>${totalUSD}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 14,
                                    borderRadius: 40,
                                    width: '90%',
                                    position: "relative",
                                }}
                                onPress={() => {
                                    () => { navigation.navigate('') }
                                    setModalVisible(false);

                                }}
                            >
                                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                                <Text
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                        color: "white",
                                        fontSize: 15,
                                        top: 17,
                                    }}
                                >
                                    ${total ? totalUSD : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        position: "absolute",
                        bottom: 80,
                        zIndex: 999,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={{
                                marginTop: 20,
                                backgroundColor: "black",
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: "flex-end",
                                padding: 15,
                                borderRadius: 40,
                                width: '80%',
                                position: "relative",
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ color: "white", fontSize: 18, marginRight: 45 }}>
                                View Cart
                            </Text>
                            <Text style={{ color: "white", fontSize: 16 }}>${totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (<></>)
            }
        </>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
    },

    restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10,
    },

    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },

    subtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
    },
})
export default ViewCart;