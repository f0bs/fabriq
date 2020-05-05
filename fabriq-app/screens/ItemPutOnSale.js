import React, { Component } from 'react';
import { Dimensions, View, Text, SafeAreaView, Image,
    TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight,
    Animated, StatusBar, Modal, ModalHeader } from 'react-native';

export default class ItemPutOnSale extends Component {
    constructor(props) {
      super(props)
      this.state = {
          modalOpen: false
      }
    }

    handleOpen = () => {
        console.log("Cart Open", this.state.modalOpen);
        this.setState({ 
          modalOpen: true 
        });
        // setTimeout(this.handleClose(), 3000);
      };


    render() {
      const { navigate } = this.props.navigation;
      const { item } = this.props.route.params;
      const successIconFilePath = "../assets/white-green-tick.jpeg";
      const price = Number(item.purchase_price.replace(/\$/g, '')) * 0.5;

      return (
        <SafeAreaView style = {styles.container}>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={true}
          onContentSizeChange={this.onContentSizeChange}
        >
        <View>
            <Image style={styles.image_style} source={{uri:item.uri}}/>
        </View>
        
        <View style = {styles.condition_container}>
            <View style = {styles.name_container}>
                <Text style = {styles.category_text}>{item.full_name}</Text>
            </View> 
            
            <View style = {{height: 35}}></View>
        
        <View style = {styles.description_container}>
            <Text style = {styles.condition_text}>
                Your clothing item has a estimated value of:
            </Text>

            <View style = {{height: 20}}></View>

            <Text style = {styles.price_text}>
                ${price}
            </Text>
        </View>
        </View>

        <TouchableOpacity
        style={styles.button} 
          onPress={ this.handleOpen.bind(this) } >
          <Text style={styles.skip_text}>List on marketplace</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.alt_button} 
          onPress={ () => navigate('ItemPutOnSale', {item: item}) } >
          <Text style={styles.skip_text}>Sell back to brand</Text>
        </TouchableOpacity>
        </ScrollView>

        <View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalOpen}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={require(successIconFilePath)}  style = {styles.success_icon} />
            <Text style={styles.condition_text}>You have successfully listed your item in marketplace!</Text>

            <View style = {styles.anchor_bottom}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                navigate('Wardrobe', {justAdded: []});
              }}
            >
              <Text style={styles.textStyle}>Back to Wardrobe</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

        </View>

      </SafeAreaView>


    )
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },

    success_icon: {
        width: '50%',
        height: 200,
      },

    anchor_bottom: {
        marginTop: 50,
        bottom: 0,
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        height: '50%',
        width: '90%',
        borderRadius: 5,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#03adfc",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: '100%',
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },

    name_container: {
        marginRight: 20,
        width: '80%',
    },

    condition_container: {
        marginHorizontal: '5%', 
        marginTop: 20, 
        textAlign: 'left',
        flex: 1, 
        flexGrow: 1,
        width: '90%'
    },

    description_container: {
        alignItems: 'center'
    },

    image_style: {
        marginTop: 30,
        paddingTop: '100%',
        width: '100%',
    },

    selected_size_button: {
      width: '12%', //'12%',
      height: '93%', //'12%',
      borderWidth: 1,
      borderColor: '#03adfc',
      backgroundColor: '#03adfc',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingVertical: '4%', //'7%',
      // paddingHorizontal: 5,
      // paddingHorizontal: '50%', //'5%',
      marginRight: '5%', 
      // paddingTop: '20%'
    },


    size_button: {
      width: '12%', //'12%',
      height: '93%', //'12%',
      borderWidth: 1,
      borderColor: 'lightgray',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingVertical: '4%', //'7%',
      // paddingHorizontal: 5,
      // paddingHorizontal: '50%', //'5%',
      marginRight: '5%', 
      // paddingTop: '20%'
    },

      button: {
        flex: 1,
        marginLeft: '15%',
        marginTop: 40,
        backgroundColor: "#03adfc", //"#03adfc",
        paddingHorizontal: '5%',
        paddingVertical: 10,
        borderRadius: 5,
        height: 45,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        shadowOffset:{  width: 10,  height: 5,  },
        shadowColor: 'gray',
        shadowOpacity: 0.1,
      },

      alt_button: {
        flex: 1,
        marginLeft: '15%',
        marginTop: 15,
        marginBottom: 5,
        backgroundColor: "black", //"#03adfc",
        paddingHorizontal: '5%',
        paddingVertical: 10,
        borderRadius: 5,
        height: 45,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        shadowOffset:{  width: 10,  height: 5,  },
        shadowColor: 'gray',
        shadowOpacity: 0.1,
      },

      activity_indicator_container: {
        marginTop: 30,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',
      },

      skip_text: {
        fontSize: 15,
        fontWeight: '600',
        color: "white", // "#0384fc" //"white",
      },
  
    category_text: {
      color: 'black',
      fontSize: 20,
      fontFamily: 'Avenir-Medium'
    },

    condition_text: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Avenir-Medium'
      },

      price_text: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'Avenir-Medium'
      },

    name_text: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'Avenir-Medium'
      },

      selected_subtext: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Avenir'
      }
    
  })
