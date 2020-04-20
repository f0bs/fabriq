import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import * as FabriqStyle from '../constants/style.js';
import { GoogleSignin, statusCodes, GoogleSigninButton} from '@react-native-community/google-signin';

export default class LoginRegister extends Component {
    render() {
      const { navigate } = this.props.navigation;
      
      // Work on Google login setup: 
      // https://enappd.com/blog/google-login-in-react-native-android-apps-with-firebase/90/
      return (
      <SafeAreaView style = {styles.container}>
      <View style = {styles.container}>
        <View style = {styles.title_container}>
          <Text style = {styles.title}> fabriq </Text>
        </View>
        <View style = {styles.subtitle_container}>
          <Text style = {styles.subtitle}> Manage all your clothing in one platform </Text>
        </View>

        <View style = {styles.button_container}>
        <GoogleSigninButton style = {styles.google_button} 
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={this._signIn} />

        <View style = {styles.or_container}>
          <Text style= {color = 'gray'}> OR </Text>
        </View>

        <TouchableOpacity
          style={styles.login_button}
          onPress={() => {}}  >
          <Text style={styles.login_text}>Log in with email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.register_button}
          onPress={() => navigate('FindClothes')}  >
          <Text style={styles.register_text}>Sign Up</Text>
        </TouchableOpacity>

        </View>
      </View>
      </SafeAreaView>

    )
  }
}

  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      backgroundColor: 'white'
      // justifyContent: 'center', 
      // alignItems: 'center',
    },

    title_container: {
      marginTop: '20%',
      alignItems: 'center',
      backgroundColor: 'white',
      marginBottom: 10
    },

    subtitle_container: {
      width: '80%',
      alignItems: 'center',
      textAlign: 'center',
    },

    or_container: {
      marginTop: 5,
      marginBottom: 5,
      alignItems: 'center',
      textAlign: 'center',
    },

    google_button: {
      marginBottom: 5,
      height: 49,
      paddingHorizontal: '50%',
      width: '99%',
      marginBottom: 10,
      shadowOffset:{  width: 10,  height: 5,  },
      shadowColor: 'black',
      shadowOpacity: 0.1,
    },
    
    login_button: {
      // height: 45,
      marginTop: 15,
      marginBottom: 5,
      backgroundColor: "black", //"#03adfc",
      paddingHorizontal: '31%',
      paddingVertical: 10,
      borderRadius: 5,
      height: 45,
      // borderWidth: 2,
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      width: '99%',
      shadowOffset:{  width: 10,  height: 5,  },
      shadowColor: 'black',
      shadowOpacity: 0.1,
    },

    register_button: {
      marginTop: 15,
      marginBottom: 5,
      backgroundColor: FabriqStyle.LIGHTBLUE, //"#03adfc",
      paddingHorizontal: '41%',
      paddingVertical: 12,
      height: 45,
      borderRadius: 5,
      width: '99%',
      textAlign: 'center',
      shadowOffset:{  width: 10,  height: 5,  },
      shadowColor: 'black',
      shadowOpacity: 0.1,
    },

    button_container: {
      // bottom: 40,
      // position: 'absolute',
      marginTop: '15%',
      alignItems: 'center',
      justifyContent: 'center',
      width: '85%'
    },

    login_text: {
      fontSize: FabriqStyle.BUTTON_FONT_SIZE,
      fontWeight: '500',
      color: "white", // "#0384fc" //"white",
    },

    register_text: {
      fontSize: FabriqStyle.BUTTON_FONT_SIZE,
      fontWeight: '500',
      color: "white", // "#0384fc" //"white",
    },
  
    title: {
      color: FabriqStyle.LIGHTBLUE,
      fontSize: 50,
      fontFamily: 'Avenir-LightOblique'
    },

    subtitle: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'Optima'
    }

    
  })
