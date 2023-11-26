import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import rncStyles from 'rncstyles';


function Home({ navigation }: any) {
    return (
        <View style={[rncStyles.p1, rncStyles.pt5]}>

            <Text style={[rncStyles.fsL, rncStyles.textCenter]}>Welcome To E-commerce Mobile Application</Text>
            <View style={[rncStyles.h100, rncStyles.pt5]}>
                <Text style={[rncStyles.textCenter, rncStyles.fs3, rncStyles.pt3, rncStyles.p1]}>You Can Click On Products to see List </Text>
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Products')
                    }}>
                        <Icon style={[rncStyles.textCenter, rncStyles.pt2]} name='shopping-cart' size={50} color='black' />
                        <Text style={[rncStyles.textCenter]}>Products</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Home