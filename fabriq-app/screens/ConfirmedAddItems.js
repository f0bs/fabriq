import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import * as FabriqStyle from '../constants/style.js';

export default class ConfirmedAddItems extends Component {

    render() {
      const { navigate } = this.props.navigation;
      const { items } = this.props.route.params;
      
      const successIconFilePath = "../assets/white-green-tick.jpeg"

      return (
        <SafeAreaView style = {styles.container}>

        <View style = {styles.title_container}>
          <Text style = {styles.title}> Success! </Text>
        </View>

        <View style = {styles.subtitle_container}>
          <Text style = {styles.subtitle}>{`You have imported ${items.length} clothing item(s) into your wardrobe.`} </Text>
        </View>

        <View style = {styles.icon_container}>
        <Image source={require(successIconFilePath)}  style = {styles.success_icon} />

        <TouchableOpacity
          style={styles.wardrobe_button}
          onPress={() => navigate('Wardrobe', {justAdded: items})}  >
          <Text style={styles.wardrobe_text}>Continue</Text>
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
      justifyContent: 'flex-start', 
      alignItems: 'flex-start',
      backgroundColor: 'white',
      marginBottom: 10
  },

  subtitle_container: {
      marginTop: 10,
      marginLeft: '5%',
      width: '85%',
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
    fontSize: 30,
    fontFamily: 'Avenir-Medium'
  },

  subtitle: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'Avenir'
  },

  success_icon: {
    width: '50%',
    height: 200,
  },

  wardrobe_text: {
    fontSize: FabriqStyle.BUTTON_FONT_SIZE,
    fontWeight: '600',
    color: "white", // "#0384fc" //"white",
},

  wardrobe_button: {
    marginTop: 70,
    backgroundColor: FabriqStyle.LIGHTBLUE, //"#03adfc",
    paddingHorizontal: '15%',
    paddingVertical: 12,
    height: 45,
    borderRadius: 5,
    width: '50%',
    textAlign: 'center',
    shadowOffset:{  width: 10,  height: 5,  },
    shadowColor: 'gray',
    shadowOpacity: 0.1,
  },
})
