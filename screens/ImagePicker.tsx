import React from 'react'
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native'
import rncStyles from 'rncstyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



function ImagePicker() {

    const openCamera = () => {
        let res: any = launchCamera({
            mediaType: 'photo',
            includeBase64: true
        })
        console.log(res);
    }
    const openGallery = () => {
        let res: any = launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true
        })
    }

    return (
        <View style={[rncStyles.h100, rncStyles.alignItemsCenter, rncStyles.justifyContentCenter]}>
            <Text style={[rncStyles.fs1, rncStyles.my2]}>Image Picker</Text>
            <View style={[rncStyles.flexRow]}>
                <TouchableOpacity style={[rncStyles.p1]} onPress={openCamera}>
                    <Icon name='add-a-photo' size={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={[rncStyles.p1]}
                    onPress={openGallery}>
                    <Icon name='image' size={50} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                {/* <Image source={{ uri: imageUri }} /> */}
            </View>
        </View>
    )
}

export default ImagePicker