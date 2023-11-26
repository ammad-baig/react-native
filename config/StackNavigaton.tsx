import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import Products from '../screens/Products'
import SingleProduct from '../screens/SingleProduct'
import SignUp from '../screens/Signup'
import Login from '../screens/Login'
import Task from '../screens/Task'
import ImagePicker from '../screens/ImagePicker'

const Stack = createNativeStackNavigator()

function StackNavigaton() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'skyblue',
                },
            }}>
                <Stack.Screen name='ImagePicker' component={ImagePicker} />
                <Stack.Screen name='Login' component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='Task' component={Task} />
                <Stack.Screen name='Signup' component={SignUp} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name='SingleProduct' component={SingleProduct} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigaton;