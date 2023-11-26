import axios from 'axios';
import { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import rncStyles from 'rncstyles';


function Products({ navigation }: any) {
    const [productList, setProductList] = useState<any>([])
    const api = 'https://fakestoreapi.com/products'

    const getData = () => {
        axios.get(api).then((res) => {
            setProductList([...res.data])
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <ScrollView>

            <View style={[{ padding: 2 }, rncStyles.pt2, rncStyles.flexRow, rncStyles.flexWrap]}>
                {productList.map((x: any, i: any) => {
                    return (
                        <TouchableOpacity key={i} onPress={() => {
                            navigation.navigate('SingleProduct', x)
                        }}>
                            <View style={[{ width: 175, margin: 1.5 }, rncStyles.p1, rncStyles.border1, rncStyles.bgWhite, rncStyles.rounded]}>
                                <Image source={{ uri: x.image }}
                                    style={[{ width: "100%", height: 200, objectFit: 'contain' },]} />
                                <Text numberOfLines={2} style={[rncStyles.p1, rncStyles.textCenter]}>
                                    <Text style={[rncStyles.textBold,]}>Title:</Text>{x.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default Products