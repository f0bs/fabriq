import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

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
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}  >
          <Text style={styles.customBtnText}>Create an account</Text>
        </TouchableOpacity>

        <Button title = "Login" onPress = {() => console.log("hi")}/>
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
      marginTop: 5,
      width: '80%',
      alignItems: 'center',
      textAlign: 'center'
    },

    button: {
      marginTop: 10,
      marginBottom: 5,
      backgroundColor: "#03adfc",
      paddingHorizontal: 60,
      paddingVertical: 10,
      padding: 20,
      borderRadius: 10
    },

    button_container: {
      marginTop: 20,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    customBtnText: {
      fontSize: 20,
      fontWeight: '400',
      color: "white",
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
