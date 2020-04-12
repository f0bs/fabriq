import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// import { Button } from 'react-native-elements';
// import { Button } from 'react-native-button';
import Register from './Register'

export default class LoginRegister extends Component {
    render() {
      const { navigate } = this.props.navigation;
      

      return (
      <View style = {styles.container}>
        <Text style = {styles.title}> fabriq </Text>
        <View style = {styles.subtitle_container}>
          <Text style = {styles.subtitle}> Manage all your clothing in one platform </Text>
        </View>
        <View style = {styles.button_container}>
        <Button title = "Create an account" onPress = {() => console.log("hi")}/>
        <Button title = "Login" onPress = {() => console.log("hi")}/>
        
        {/* <Button onPress={() => console.log("hi")}> Create an account </Button>  */}
        </View>
      </View>

    )
  }
}

  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: 'white'
    },

    subtitle_container: {
      marginTop: 10,
      width: '80%',
      alignItems: 'center',
      textAlign: 'center'
    },

    button: {
      backgroundColor: '#00aeef',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15 
    },

    button_container: {
      marginTop: 20,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    title: {
      color: 'black',
      fontSize: 50,
      fontFamily: 'Avenir-MediumOblique'
    },

    subtitle: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'Optima'
    }

    
  })
