import React from 'react'
import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import rncStyles from 'rncstyles'
import database from '@react-native-firebase/database'
import { useState } from 'react'

function Task() {

    const [model, setModel] = useState<any>({})
    const addTask = () => {

        const id = database().ref('tasks/').push().key

        database().ref(`tasks/${id}`).set({
            id: id,
            task: model.task,
            time: JSON.parse(JSON.stringify(new Date()))
        })
            .then(() => {
                ToastAndroid.show('Task Added Successfully', ToastAndroid.SHORT)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <View>
            <TextInput
                value={model.task}
                onChangeText={(e) => setModel({ ...model, task: e })}
                style={[
                    rncStyles.input,
                    rncStyles.bgWhite,
                    rncStyles.rounded,
                    rncStyles.border1,
                    rncStyles.borderPrimary,
                    rncStyles.my2
                ]}
                placeholder='Enter Todo' />
            <TouchableOpacity
                onPress={addTask} style={[rncStyles.btnPrimary]}>
                <Text style={[rncStyles.textWhite]}>
                    Add Dummy Text
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Task