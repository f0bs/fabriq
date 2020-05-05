import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity,TouchableWithoutFeedback, ActivityIndicator, StyleSheet } from 'react-native';
import * as FabriqStyle from '../constants/style.js';
import { ListItem, Avatar } from 'react-native-elements';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
        orderNumber: 458765342
    }
  }

    render() {
      const { navigate } = this.props.navigation;
      const data = this.props.route.params;
      let currentPrice = Number(data.offerPrice).toFixed(2);
      let result = Number(currentPrice.replace(/\$/g, '')) + 5.99;
      result = result.toFixed(2);

      return (
        <SafeAreaView style = {styles.container}>
        <View style = {styles.title_container}>
          <Text style = {styles.title}> Shopping Cart </Text>
        </View>

        <Image source={require('../assets/checkout.png')} style={styles.checkout} resizeMode="stretch"></Image>

        <Text style = {styles.order_number}> Order number is {this.state.orderNumber}</Text>

        <View style = {clothingStyles.clothinglist_container}>
            <ListItem
                leftAvatar = {<Avatar large source={{uri: data.itemData.uri}} height={`90%`} width={`20%`}/>}
                title={` ${data.itemData.name.full_name}  \n`}
                rightTitle = {`${currentPrice}`}
                rightTitleStyle = {clothingStyles.right_title_style}
                titleNumberOfLines = {2}
                titleStyle = {clothingStyles.title_style}
                titleContainerStyle = {clothingStyles.title_container}
                subtitle={` Size: M \n Quantity: 1`}
                subtitleStyle = {clothingStyles.subtitle_style}
                bottomDivider
                containerStyle={{ borderBottomWidth: 0 }}
            />
        </View>

        <Image source={require('../assets/delivery.png')} style={styles.delivery} resizeMode="stretch"></Image>

        <View style = {styles.icon_container}>
            <View style = {styles.price}>
                <Text style = {styles.priceText}>  Order:                                                   ${currentPrice} 
                </Text>
                <Text style = {styles.priceText}>  Delivery:                                               $5.99 
                </Text>
                <Text style = {styles.priceText}>  Total order:                                          ${result} 
                </Text>
            </View>

            <TouchableOpacity
            style={styles.wardrobe_button}
            // onPress={() => navigate('Wardrobe')}  >
            onPress={() => navigate('OrderCompleted',{itemData:data.itemData,offerPrice:data.offerPrice})}  >
            <Text style={styles.wardrobe_text}>Go to checkout</Text>
            </TouchableOpacity>
        </View>
        < TouchableWithoutFeedback onPress={() => navigate('Market')}>
                <Image source={require('../assets/navbar.png')} style={styles.navbar} resizeMode="stretch"></Image>
        </TouchableWithoutFeedback>

      </SafeAreaView>

    )
  }
}

  const clothingStyles = StyleSheet.create({
      clothinglist_container: {
          marginLeft: '5%',
          width: '90%',
          borderRadius:5,
          borderBottomWidth: 1,
          borderBottomColor: '#E4E4E4',
          marginTop: 20,
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          backgroundColor: 'white',
          marginBottom: 10
      },

      add_button_unselected: {
          marginTop: 15,
          marginBottom: 5,
          backgroundColor: FabriqStyle.LIGHTBLUE, //"#03adfc",
          paddingHorizontal: 10,
          paddingVertical: 5,
          height: 30,
          borderRadius: 5,
          width: 95,
          textAlign: 'center',
      },

      add_button_selected: {
          marginTop: 15,
          marginBottom: 5,
          backgroundColor: FabriqStyle.GREEN, //"#03adfc",
          paddingHorizontal: 18,
          paddingVertical: 5,
          height: 30,
          borderRadius: 5,
          width: 95,
          textAlign: 'center',
      },

      continue_button: {
          // marginTop: 15,
          // marginBottom: 5,
          backgroundColor: FabriqStyle.TURQUOISE, //"#03adfc",
          paddingHorizontal: 40,
          paddingVertical: 12,
          height: 45,
          borderRadius: 5,
          width: 150,
          shadowOffset: {
              width: 5,
              height: 5,
          },
          shadowColor: 'gray',
          shadowOpacity: 0.1,
          // textAlign: 'center',
      },



      button_text: {
          fontSize: FabriqStyle.BUTTON_FONT_SIZE,
          fontWeight: '600',
          color: "white", // "#0384fc" //"white",
      },

      title_style: {
          color: 'black',
          fontSize: 17,
          fontFamily: 'Avenir-Medium'
      },

      subtitle_style: {
          fontFamily: 'Avenir-Medium',
          color: '#151522',
          fontSize:14
      },
      right_title_style:{
          color:'black',
          marginBottom:65
      }
  })
  
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

  order_number:{
    color: 'black',
    fontSize: 18,
    fontFamily: 'Avenir-Medium',
    marginLeft:30,
    marginTop:30
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
    marginTop: 40,
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
      color:'black'
  }, 
  navbar: {
      height: 60,
      width: 400,
      marginLeft: 5,
      marginTop: 5
  },
  checkout: {
      height: 65,
      width: 340,
      marginLeft: 25,
      marginTop: 10
  },
  delivery:{
      width:365,
      marginLeft:20,
      height:210
  },
  priceText:{
      fontSize: 17,
      lineHeight:28
  },
  price:{
      marginTop:-30
  }
})
