import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HeaderTab = () => {
    const [activeTab, setActiveTab] = useState("Dashboard")
    return (

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
            <HeaderButton
                text="Dashboard"
                btnColor="black"
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="New Offers"
                btnColor="white"
                textColor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View >
    )
}

const HeaderButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.activeTab === props.text ? 'black' : 'white',
                paddingHorizontal: 16,
                paddingVertical: 6,
                borderRadius: 30
            }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <View>
                <Text
                    style={{ color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: '900' }}>{props.text}</Text>
            </View>
        </TouchableOpacity>

    )
}
export default HeaderTab;