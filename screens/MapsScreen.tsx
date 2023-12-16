import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Pin from '../assets/pin.png';
import Car from '../assets/sedan.png';
import Store from '../assets/store.png';
import Home from '../assets/home.png';
import Institute from '../assets/institution.png';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default function MapsScreen() {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 24.8988795933153,
                    longitude: 67.03076107707795,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    image={Home}
                    coordinate={{
                        latitude: 24.8988795933153,
                        longitude: 67.03076107707795,
                    }} />
                <Marker
                    image={Car}
                    coordinate={{
                        latitude: 24.932469325522664,
                        longitude: 67.08727452528717,
                    }} />
                <Marker
                    image={Store}
                    coordinate={{
                        latitude: 24.862625847493554,
                        longitude: 67.02328366409482,
                    }} />
                <Marker
                    image={Institute}
                    coordinate={{
                        latitude: 24.914422360248103,
                        longitude: 67.05827865412209,
                    }} />
            </MapView>
        </View>
    )
};