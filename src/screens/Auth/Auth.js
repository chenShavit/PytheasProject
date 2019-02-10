import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';

class AuthScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
            <Text>Welcome to Auth screen</Text>
        
              
              <Button  title="Start"  onPress={() => navigate('FirstStep', {name: 'pytheas.FirstStep'})}/>
            </View>
        );
    }
}

export default AuthScreen;


const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:50,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#F5FCFF',
    }
  });