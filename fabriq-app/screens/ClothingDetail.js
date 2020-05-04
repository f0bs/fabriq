import React, { Component } from 'react';
import { Dimensions, View, Text, SafeAreaView, Image,
    TouchableOpacity, ScrollView, StyleSheet, 
    Animated, StatusBar } from 'react-native';
// import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';

export default class ClothingDetail extends Component {
    constructor(props) {
      super(props)
      const sizeList = ["XS", "S", "M", "L", 'XL', 'XXL']
      const selected = [false, false, true, false, false]

      this.state = {
        sizeList: sizeList,
        buttonState: selected,
        visible: false,
      }
    }


    render() {
      const { navigate } = this.props.navigation;
      const { item } = this.props.route.params;

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
        
        <View style = {styles.description_container}>
            <Text style = {styles.category_text}>{item.category}</Text>
            <View style = {{height: 5}}></View>
            <Text style = {styles.name_text}>{item.name.full_name}</Text>
            <View style = {{height: 30}}></View>
            <Text style = {styles.subtext}>
            Enjoy the beauty of italian cotton all over your body. 
            This item will fit your body. 
            This item will fit your body and warm you up all over and during spring. 
            And over and over again, this is the text.
            </Text>
            <View style = {{height: 30}}></View>
            <Text style = {styles.category_text}>Size</Text>
            <View style = {styles.size_container}> 
              {this.state.sizeList.map((size, i) => {
                if (this.state.buttonState[i]) {
                  return (
                    <View style = {styles.selected_size_button}>
                      <Text style = {styles.selected_subtext}>{size}</Text>
                  </View> 
                  )
                } else {
                return(
                  <View style = {styles.size_button}>
                    <Text style = {styles.subtext}>{size}</Text>
                  </View>

                  // </TouchableOpacity>
              )}})}
              
            </View>
            <Text style = {styles.category_text}>Material: Cotton</Text>
            <View style = {{height: 10}}></View>
            <Text style = {styles.category_text}>Washing Instructions: Normal</Text>
        </View>


        <TouchableOpacity
          style={styles.button}
          onPress={ () => navigate('SellItem', {item: item}) } >
          <Text style={styles.skip_text}>Sell</Text>
        </TouchableOpacity>

        </ScrollView>
              
      </SafeAreaView>

    )
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },

    cover: {
      backgroundColor: "rgba(0,0,0,.5)",
    },

    sheet: {
      position: "absolute",
      top: Dimensions.get("window").height,
      left: 0,
      right: 0,
      height: "100%",
      justifyContent: "flex-end",
    },
    popup: {
      backgroundColor: "#FFF",
      marginHorizontal: 10,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      minHeight: 80,
      alignItems: "center",
      justifyContent: "center",
    },

    overlay: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      flex: 1,
      justifyContent: 'flex-end',
    },

    animated_container: {
      backgroundColor: 'white',
      paddingTop: 12,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
    },

    modalContainer: {
      // marginTop: '60%',
      opacity : 0.8,
      flex: 1,
      // width: '100%',
      // height: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },

    modal_content: {
      paddingTop: '80%',
      height: 100,
      width: 300,
      // opacity : 1.0,
      // width: 2400,
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
    },

    size_container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      width: '90%',
      marginLeft: '5%',
      marginTop: 25,
      marginBottom: 25,
    },

    description_container: {
        marginHorizontal: '5%', 
        marginTop: 20, 
        textAlign: 'left',
        flex: 1, 
        flexGrow: 1,
        width: '90%'
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
        marginLeft: '25%',
        marginTop: 40,
        marginBottom: 5,
        backgroundColor: "#03adfc", //"#03adfc",
        paddingHorizontal: '21%',
        paddingVertical: 10,
        borderRadius: 5,
        height: 45,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
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

    name_text: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'Avenir-Medium'
      },

      selected_subtext: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Avenir'
      },

      subtext: {
        color: 'gray',
        fontSize: 15,
        fontFamily: 'Avenir'
      }
    
  })
