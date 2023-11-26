import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import rncStyles from 'rncstyles';



function SingleProduct({ navigation, route }: any) {

    let obj = route.params
    return (
        <ScrollView>

            < View style={[rncStyles.h100, rncStyles.justifyContentCenter, rncStyles.p3]}>
                <View style={[rncStyles.p1, rncStyles.border1, rncStyles.bgWhite, rncStyles.rounded]}>
                    <Image source={{ uri: obj.image }}
                        style={[{ width: "auto", height: 300, objectFit: 'contain' },]} />
                </View>
                <Text style={[rncStyles.textCenter, rncStyles.p1]}>
                    <Text style={[rncStyles.textBold]}>
                        Title:
                    </Text>
                    {obj.title}
                </Text>
                <Text style={[rncStyles.textCenter, rncStyles.p1]}>
                    <Text style={[rncStyles.textBold]}>
                        Category:
                    </Text>
                    {obj.category}
                </Text>
                <Text style={[rncStyles.textCenter, rncStyles.p1]}>
                    <Text style={[rncStyles.textBold]}>
                        Description:
                    </Text>
                    {obj.description}
                </Text>
                <Text style={[rncStyles.textCenter, rncStyles.p1]}>
                    <Text style={[rncStyles.textBold]}>
                        Price:
                    </Text>
                    ${obj.price}
                </Text>
                <Text style={[rncStyles.textCenter, rncStyles.p1]}>
                    <Text style={[rncStyles.textBold]}>
                        Rating:
                    </Text>
                    {obj.rating.rate}
                </Text>
                <Text style={[rncStyles.textCenter, rncStyles.p1]}>
                    <Text style={[rncStyles.textBold]}>
                        Count:
                    </Text>
                    {obj.rating.count}
                </Text>

            </ View >
        </ScrollView>

    )
}

export default SingleProduct