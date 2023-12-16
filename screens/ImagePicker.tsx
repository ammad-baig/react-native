import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native'
import rncStyles from 'rncstyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



function ImagePicker() {

    const [imageUri, setImageUri] = useState<any>('https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg')

    const openCamera = async () => {
        let res: any = await launchCamera({
            mediaType: 'mixed',
            includeBase64: true
        })
        const file = res.assets[0];
        console.log(file);
        setImageUri(`data:image/png;base64,${file.base64}`)

    }
    const openGallery = async () => {
        let res: any = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true
        })
        // const file = res.asset[0];
        // console.log(file);
        // setImageUri(`data:image/png;base64,${file.base64}`)
    }

    return (
        <View style={[rncStyles.h100, rncStyles.alignItemsCenter, rncStyles.justifyContentCenter]}>
            <Text style={[rncStyles.fs1, rncStyles.my2]}>Image Picker</Text>
            <View style={[rncStyles.flexRow]}>
                <TouchableOpacity style={[rncStyles.p1]}
                    onPress={openCamera}>
                    <Icon name='add-a-photo' size={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={[rncStyles.p1]}
                    onPress={openGallery}>
                    <Icon name='image' size={50} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Image style={{ width: 200, height: 200 }} source={{ uri: imageUri }} />
            </View>
        </View>
    )
}

export default ImagePicker