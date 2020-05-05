import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity,TouchableWithoutFeedback, ActivityIndicator, StyleSheet,Alert } from 'react-native';
import * as FabriqStyle from '../constants/style.js';

export default class TrackDelivery extends Component {
  constructor(props) {
    super(props)
  }
  

    render() {

      const { navigate } = this.props.navigation;
      
      const trackStatusFilePath = "../assets/trackOrder.png";

      return (
        <SafeAreaView style = {styles.container}>

        <View style = {styles.title_container}>
          <Text style = {styles.title}> Your Sellings </Text>
        </View>

        <View style = {styles.image_container}>
        <Image source={require(trackStatusFilePath)}  style = {styles.image} />

        </View>
        < TouchableWithoutFeedback onPress={() => navigate('Market')}>
                <Image source={require('../assets/navbar.png')} style={styles.navbar} resizeMode="stretch"></Image>
        </TouchableWithoutFeedback>

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

  image_container: {
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

 image: {
    width: '100%',
    height: 400,
  },

  wardrobe_text: {
    fontSize: FabriqStyle.BUTTON_FONT_SIZE,
    fontWeight: '600',
    color: "white", // "#0384fc" //"white",
    textAlign: 'center',
},

  wardrobe_button: {
    marginTop: 250,
    backgroundColor: "#32BEA6", //"#03adfc",
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
  }, 
  navbar: {
    height: 60,
    width: 400,
    marginLeft: 5,
    marginTop: 240
  }
})
