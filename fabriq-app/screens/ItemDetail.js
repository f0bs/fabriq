import React, { Component } from "react";
import { FlatList, Text, StyleSheet,View,Image,SafeAreaView,TouchableOpacity } from "react-native";
import * as FabriqStyle from '../constants/style.js';

export default class ItemDetail extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            < SafeAreaView style = {
                styles.container
            } >
                <View style = {styles.title_container}>
                    <Text style = {styles.title_main}> Product Detail </Text>
                </View>
                {/*white tee:  https: //www.team1newport.com/images/POTS211M_FTHG.jpg */}
                <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMX-1BJYN4shWp9grSvA0-F6QyhVjWqneh10oA_h5DUzE63w0aj7y8CXUu2dUJuZO6m-GDyKM&usqp=CAc'}} 
                style = {styles.image}>
                </Image>
                <View style = {styles.content}>
                    <Text style = {styles.category}>
                        T-shirts
                    </Text>
                    <Text style = {styles.name}>
                        Patagonia Tee - MOUNTAIN DESIGN
                    </Text>
                    <Text style = {styles.description}>
                        Enjoy the beauty of italian cotton all over your body.This item will fit your body.This item will 

                        And over and over again, this is the text.
                    </Text>
                    <Text style = {styles.sub_title}>
                        Make Your Offer
                    </Text>
                    <Text style = {styles.description}>
                        Enter your best offer and we will send it to users that own. They have 24h to accept your offer
                    </Text>
                    <Text style = {styles.sub_title}>
                        Your Offer : $ 12
                    </Text>

                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate('ConfirmedOffer')}  >
                    <Text style={styles.button_text}>Send an Offer</Text>
                </TouchableOpacity>
            </ SafeAreaView>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },
    title_container: {
        marginLeft: '5%',
        width: '85%',
        marginTop: '6%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 5
    },
    title_main: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Avenir-Medium'
    },
    image:{
        width:400,
        height:400,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:5
    },
    content:{
        marginLeft: '10%',
        width: '85%',
        marginTop: '7%',
    },
    category:{
        fontFamily: 'Avenir',
        fontSize: 18,
        fontWeight: '600'
    },
    name:{
        color: 'black',
        fontSize: 28,
        fontFamily: 'Avenir-Medium',
        fontWeight:'700',
        lineHeight:35,
        marginVertical:10
    },
    description:{
        marginVertical:5,
        fontSize: 14,
    },
    sub_title:{
        marginVertical: 5,
        fontWeight:'600',
        fontSize: 16,
    },
    button_text: {
      fontSize: FabriqStyle.BUTTON_FONT_SIZE,
      fontWeight: '500',
      color: "white", // "#0384fc" //"white",
      marginLeft:5
    },
    button: {
      marginTop: 15,
      marginBottom: 5,
      backgroundColor: FabriqStyle.LIGHTBLUE, //"#03adfc",
      paddingHorizontal: '20%',
      paddingVertical: '2%',
      height: 35,
      borderRadius: 5,
      width: 300,
      marginLeft:'15%',
      textAlign: 'center',
      shadowOffset:{  width: 10,  height: 5,  },
      shadowColor: 'black',
      shadowOpacity: 0.1,
    },
});