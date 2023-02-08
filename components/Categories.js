import { Image, ScrollView, Text, View } from "react-native";

const electronic = { uri: "https://img.freepik.com/free-vector/open-laptop-icon-cartoon-illustration_107791-4113.jpg" }
const smartphone = { uri: "https://img.freepik.com/free-vector/hand-holding-smartphone-mobile-phone-concept-hand-drawn-cartoon-art-illustration_56104-1117.jpg?w=2000" }
const television = { uri: "https://www.shutterstock.com/image-vector/modern-slim-hd-smart-tv-260nw-369545993.jpg" }
const smartwatch = { uri: "https://www.ebuyer.com/blog/wp-content/uploads/2015/06/what-is-a-smartwatch-feature.png" }
const earphones = { uri: "https://cdn-icons-png.flaticon.com/512/195/195142.png" }
const homeappliance = { uri: "https://as2.ftcdn.net/v2/jpg/02/01/67/29/500_F_201672942_nxyQFzPIjQ1MyYpwquGZaprwc1UE8acl.jpg" }

const items = [
    {
        image: smartphone,
        text: "Mobiles"
    },
    {
        image: electronic,
        text: "Laptops"
    },
    {
        image: television,
        text: "Television"
    },
    {
        image: smartwatch,
        text: "Watches"
    },
    {
        image: earphones,
        text: "Earphones"
    },
    {
        image: homeappliance,
        text: "Home Appliance"
    }
]

const Categories = () => {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingLeft: 20
        }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{

                }}
            >
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 60,
                                height: 60,
                                resizeMode: "contain",
                                borderRadius: 30
                            }}
                        />
                        <Text style={{ fontSize: 14, fontWeight: '900' }}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Categories;