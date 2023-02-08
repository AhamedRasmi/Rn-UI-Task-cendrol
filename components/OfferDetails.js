import { Text, View, StyleSheet } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OfferDetails = () => {
    return (
        <View>
            <Text style={{ marginHorizontal: 6, marginTop: 16 }}>Available offers</Text>
            <View style={styles.offerTxt}>
                <MaterialIcons size={20} name="local-offer" color={'#388e3c'} />
                <Text style={styles.text}>Bank Offer5% Cashback on Flipkart Axis Bank Card <Text style={styles.blueText}>T&C</Text></Text>
            </View>

            <View style={styles.offerNew}>
                <MaterialIcons size={20} name="local-offer" color={'#388e3c'} />
                <Text style={styles.text}>Special PriceGet extra ₹4500 off (price inclusive of cashback/coupon)  <Text style={styles.blueText}>T&C</Text></Text>
            </View>

            <View style={styles.offerTxt}>
                <MaterialIcons size={20} name="local-offer" color={'#388e3c'} />
                <Text style={styles.text}>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* <Text style={styles.blueText}>Know More</Text></Text>
            </View>

            <View style={styles.offerNew}>
                <MaterialIcons size={20} name="local-offer" color={'#388e3c'} />
                <Text style={styles.text}> Partner OfferPurchase now & get a surprise cashback coupon till November 2023 {'\n'}<Text style={styles.blueText}>Know More</Text></Text>
            </View>

            <View style={{ marginVertical: 15 }}>
                <Text style={styles.blueText}>View 1 more offer More</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 6
    },
    offerTxt: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    offerNew: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    blueText: {
        color: '#2874f0'
    }
})
export default OfferDetails;