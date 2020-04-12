import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
          style={styles.register_button}
          onPress={() => navigate('Register')}  >
          <Text style={styles.register_text}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.login_button}
          onPress={() => {}}  >
          <Text style={styles.login_text}>Log in</Text>
        </TouchableOpacity>

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
      backgroundColor: 'lightblue'
    },

    subtitle_container: {
      marginTop: 5,
      width: '80%',
      alignItems: 'center',
      textAlign: 'center'
    },

    login_button: {
      // height: 45,
      marginTop: 10,
      marginBottom: 5,
      backgroundColor: "white", //"#03adfc",
      paddingHorizontal: '40%',
      paddingVertical: 10,
      borderRadius: 10,
      // borderColor: "black",
      // borderWidth: 2,
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      width: '99%',
    },

    register_button: {
      marginTop: 10,
      marginBottom: 5,
      backgroundColor: "black", //"#03adfc",
      paddingHorizontal: '38%',
      paddingVertical: 10,
      borderRadius: 10,
      borderColor: "black",
      borderWidth: 2,
      width: '99%',
      textAlign: 'center'
    },

    button_container: {
      bottom: 40,
      position: 'absolute',
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    login_text: {
      fontSize: 18,
      fontWeight: '500',
      color: "black", // "#0384fc" //"white",
    },

    register_text: {
      fontSize: 18,
      fontWeight: '500',
      color: "white", // "#0384fc" //"white",
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
