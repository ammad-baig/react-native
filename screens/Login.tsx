
import { View, TextInput, TouchableOpacity, Text, ToastAndroid } from 'react-native'
import rncStyles from 'rncstyles'
import { useState } from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'

export default function Login({ navigation }: any) {

    const [model, setModel] = useState<any>({})

    const loginUser = () => {
        auth().signInWithEmailAndPassword(model.email, model.password)
            .then((res) => {
                const id = res.user.uid
                database().ref(`users/${id}`).on('value', (data) => {
                    const user = data.val()
                    console.log(user)
                    ToastAndroid.show(`Welcome ${model.email}`, ToastAndroid.SHORT)
                })
                navigation.navigate('Home')

            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return <>
        <View
            style={[
                rncStyles.h100,
                rncStyles.bgWhite
            ]}>
            <View
                style={[
                    rncStyles.h100,
                    rncStyles.p2,
                    rncStyles.justifyContentCenter
                ]}>
                <View
                    style={rncStyles.py5}>
                    <Text
                        style={[
                            rncStyles.fs1,
                            rncStyles.textPrimary,
                            rncStyles.textBold,
                            rncStyles.mb1
                        ]}
                    >Login</Text>
                    <Text
                        style={[
                            rncStyles.fs5,
                            rncStyles.textSecondary
                        ]}
                    >Please Sign in to continue.</Text>
                </View>
                <View>
                    <View
                        style={rncStyles.pb1}>
                        <Text
                            style={[
                                rncStyles.textPrimary,
                                rncStyles.p1
                            ]}
                        >Email</Text>
                        <TextInput
                            value={model.email}
                            onChangeText={(e) => setModel({ ...model, email: e })}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary
                            ]}
                            placeholder='example@abc.com'
                        />
                    </View>
                    <View
                        style={rncStyles.pb1}>
                        <Text
                            style={[
                                rncStyles.textPrimary,
                                rncStyles.p1
                            ]}
                        >Password</Text>
                        <TextInput
                            value={model.password}
                            onChangeText={(e) => setModel({ ...model, password: e })}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary
                            ]}
                            placeholder='Enter Password atleast 6 characters'
                        />
                    </View>
                    <View
                        style={rncStyles.py1}
                    >
                        <TouchableOpacity>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.fs5,
                                    rncStyles.textEnd
                                ]}
                            >Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={rncStyles.py2}
                    >
                        <TouchableOpacity
                            onPress={loginUser}
                            style={[
                                rncStyles.btnPrimary,
                                rncStyles.rounded
                            ]}
                        >
                            <Text
                                style={[
                                    rncStyles.fs5,
                                    rncStyles.textWhite,
                                    rncStyles.textCenter
                                ]}
                            >Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={[
                        rncStyles.py2,
                        rncStyles.flexRow,
                        rncStyles.justifyContentCenter
                    ]}
                >
                    <Text
                        style={[
                            rncStyles.textBold,
                            rncStyles.textSecondary,
                            rncStyles.fs5
                        ]}
                    >Not Registerar yet?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Signup');
                        }}
                    >
                        <Text
                            style={[
                                rncStyles.textBold,
                                rncStyles.fs5,
                                rncStyles.ms1,
                                rncStyles.textPrimary
                            ]}
                        >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

