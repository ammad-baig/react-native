import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import rncStyles from 'rncstyles'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LocalData() {
    const [text, setText] = useState<any>('')
    const [list, setList] = useState<any>([])

    const add = async () => {
        try {
            list.push(text)
            const jsonValue = JSON.stringify(list);
            await AsyncStorage.setItem('todos', jsonValue);
            getData()
        } catch (err: any) {
            console.log(err.message)
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('todos');
            const data = jsonValue != null ? JSON.parse(jsonValue) : null;
            setList([...data]);
        } catch (err: any) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <ScrollView>
            <View style={[rncStyles.h100, rncStyles.bgLight, rncStyles.p2,]}>
                <Text style={[rncStyles.textPrimary, rncStyles.fs2, rncStyles.textCenter, rncStyles.py2]}>AsyncStorage</Text>
                <View>
                    <TextInput style={[rncStyles.input, rncStyles.border1]} placeholder='Todo'
                        onChangeText={(e) => setText(e)}
                    />
                    <TouchableOpacity onPress={add} style={[rncStyles.btnInfo, rncStyles.my2]} >
                        <Text style={[rncStyles.textCenter, rncStyles.textWhite]}>Add</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {list.map((x: any, i: any) => {
                        return (
                            <View key={i} style={[rncStyles.p1, rncStyles.flexRow, rncStyles.justifyContentBetween]}>
                                <Text style={[rncStyles.fs4]}>{x}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
};