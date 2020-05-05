import React, { Component } from "react";
import { FlatList, Text, StyleSheet,View,Image,SafeAreaView,TouchableOpacity,TouchableWithoutFeedback,TextInput,ScrollView, Alert } from "react-native";
import * as FabriqStyle from '../constants/style.js';

export default class ItemDetail extends Component {
    constructor(props) {
        super(props);
        state = {offerPrice: ''};
    }
    state = {
        offerPrice: ''
    };


    render() {
        const { navigate } = this.props.navigation;
        

        return (
            < SafeAreaView style = {
                styles.container
            } >
                < ScrollView >
                <View style = {styles.title_container}>
                    <Text style = {styles.title_main}> Product Detail </Text>
                </View>
                {/*white tee:  https: //www.team1newport.com/images/POTS211M_FTHG.jpg */}
                <Image source = {{uri:this.props.route.params.rowData.uri}} 
                style = {styles.image}>
                </Image>
                <View style = {styles.content}>
                    <Text style = {styles.category}>
                       {this.props.route.params.rowData.category}
                    </Text>
                    <Text style = {styles.name}>
                        {this.props.route.params.rowData.name.full_name}
                    </Text>
                    <Text style = {styles.description}>
                        Enjoy the beauty of italian cotton all over your body.This item will fit your body.
                    </Text>
                    <Text style = {styles.sub_title}>
                        Make Your Offer
                    </Text>
                    <Text style = {styles.description}>
                        Enter your best offer and we will send it to users that own. They have 24h to accept your offer
                    </Text>
                    <Text style = {styles.sub_title}>
                        Min price : {this.props.route.params.rowData.selling_price}
                    </Text>
                    <Text style = {styles.sub_title}>
                        Your Offer : $
                    </Text>
                    <TextInput 
                        style = {styles.input}
                        value = {this.state.offerPrice}
                        onChangeText = {offerPrice => this.setState({offerPrice})}
                        />

                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate('ConfirmedOffer',{
                        itemData:this.props.route.params.rowData,
                        offerPrice: this.state.offerPrice
                        })}
                    disabled={Number(this.state.offerPrice) <= Number(this.props.route.params.rowData.selling_price)}  >
                    <Text style={styles.button_text}>Send an Offer</Text>
                </TouchableOpacity>
                < TouchableWithoutFeedback onPress={() => navigate('Market')}>
                        <Image source={require('../assets/navbar.png')} style={styles.navbar} resizeMode="stretch"></Image>
                </TouchableWithoutFeedback>
                </ScrollView>
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
        height:380,
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
        fontWeight: '600',
        marginTop:-15
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
      marginTop: 10,
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
    navbar: {
        height: 60,
        width: 400,
        marginLeft: 5,
        marginTop: 10
    },
    input: {
        height: 30,
        borderColor: '#E4E4E4',
        borderWidth: 1,
        width: 60,
        marginLeft:100,
        marginTop:-30,
        textAlign:"center"
    }
});