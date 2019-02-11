import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

import ImagePicker from 'react-native-image-picker';

class PickImage extends Component {
    state = {
        PickImaged: null
    }
    PickImageHandler = () => {
        ImagePicker.showImagePicker({ title: "Please pick an Image" }, res => {
            if (res.didCancel) {
                console.log("user canceld");
            } else if (res.error) {
                console.log("Eror!");
            }
            else {
                this.setState({
                    PickImaged: { uri: res.uri }
                })
            }
        });
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.placeholder}>
                    <Image source={this.state.PickImaged} style={style.preview} />
                </View>
                <Button title="Pick Image" onPress={this.PickImageHandler} />
            </View>

        );
    }
}
export default PickImage;

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    placeholder: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'blue',
    },
    preview:{
        width: "100%",
        height: 250,
    }
});