import { View, Text } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const SearchBar = () => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        marginTop: 7,
                        fontWeight: '700'
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10

                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 8,
                        backgroundColor: 'white',
                        padding: 9,
                        borderRadius: 30
                    }}>
                        <AntDesign name="clockcircle" size={12} style={{ marginRight: 6 }} />
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '700' }}>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SearchBar;