import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import * as FabriqStyle from '../constants/style.js';

export default class ConfirmedOffer extends Component {

    render() {
      const { navigate } = this.props.navigation;
      
      const successIconFilePath = "../assets/white-green-tick.jpeg"

      return (
        <SafeAreaView style = {styles.container}>

        <View style = {styles.title_container}>
          <Text style = {styles.title}> Patagonia Logo Tee </Text>
        </View>

        <View style = {styles.icon_container}>
        <Image source={require(successIconFilePath)}  style = {styles.success_icon} />
            <View>
                <Text style = {styles.title}> Offer sent! </Text>
                
            </View>
            <View>
                <Text style = {styles.message}> Sells now have 24h to accept your offer </Text>
            </View>

        <TouchableOpacity
          style={styles.wardrobe_button}
          // onPress={() => navigate('Wardrobe')}  >
          onPress={() => navigate('Market')}  >
          <Text style={styles.wardrobe_text}>Find more items</Text>
        </TouchableOpacity>
        </View>

      </SafeAreaView>

    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },

  title_container: {
      marginLeft: '5%',
      width: '85%',
      marginTop: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      marginBottom: 10
  },

  icon_container: {
    marginLeft: '5%',
    width: '85%',
    marginTop: '10%',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10
},

  title: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Avenir-Medium'
  },

  subtitle: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'Optima'
  },

  success_icon: {
    width: '50%',
    height: 200,
  },

  wardrobe_text: {
    fontSize: FabriqStyle.BUTTON_FONT_SIZE,
    fontWeight: '600',
    color: "white", // "#0384fc" //"white",
    textAlign: 'center',
},

  wardrobe_button: {
    marginTop: 250,
    backgroundColor: FabriqStyle.LIGHTBLUE, //"#03adfc",
    paddingHorizontal: '18%',
    paddingVertical: 12,
    marginLeft:'5%',
    height: 45,
    borderRadius: 5,
    width: '70%',
    textAlign: 'center',
    shadowOffset:{  width: 10,  height: 5,  },
    shadowColor: 'gray',
    shadowOpacity: 0.1,
  },
  message:{
      marginTop:20,
      color:'grey'
  }
})
