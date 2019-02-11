
import React, {Component} from 'react';
import {Platform, createStackNavigator, StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';

 class FirstStep extends Component {

state = {
  fullName:'',
};

fullNameChangedHandler=(val)=>{
  this.setState({ 
    fullName:val
  });
};



render() {
 
  return (
    <View style={styles.container}>
    <Text>Step 1: Please fill the following information</Text>
    <View style={styles.inputsContainer}>
      
      <TextInput style={styles.placeInput} placeholder="Full Name" value={this.state.fullName}/>
      <Button  style={styles.placeSubmit} title="Next"/>
      </View>
    </View>
  );
}
}

export default FirstStep;

const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:50,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#F5FCFF',
    },
   inputsContainer: {
     width:"100%",
     flex:1,
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    placeInput:{
      width:"17%"
    },
    placeSubmit:{
      width:"40%"
    }
  });