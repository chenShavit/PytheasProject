import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import PickImage from '../../components/PickImage/PickImage';

class AuthScreen extends Component {
    state = {
        foucsedLocation: {
            latitude: 48.856732,
            longitude: 2.352423,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122
        },
        locationChosen: false
    }
    pickLoction = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.foucsedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        });
        this.setState(prevState => {
            return {
                foucsedLocation: {
                    ...prevState.foucsedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }
        })
    }
    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const coordsEvent =  {
                nativeEvent: {
                    coordinate: {
                        latitude : pos.coords.latitude,
                        longitude : pos.coords.longitude
                    }
                }
            };
            this.pickLoction(coordsEvent)
        },
    err=>{
        console.log(error);
    }) 
    }
    render() {
        let marker = null;

        if (this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.foucsedLocation} />
        }
        return (
            <View style={styles.container}>
                <Text>Welcome to Auth screen</Text>
                <MapView initialRegion={this.state.foucsedLocation} region={this.state.foucsedLocation} style={styles.map} onPress={this.pickLoction} ref={ ref => this.map = ref}>
                {marker}
                </MapView>
                <Button title="My location" onPress={this.getLocationHandler} />
                <PickImage/>
                <Button title="Start" onPress={() => navigate('FirstStep', { name: 'pytheas.FirstStep' })} />
            </View>
        );
    }
}

export default AuthScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: "100%",
        height: 250,

    }
});