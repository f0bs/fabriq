import React, { Component } from 'react';
import { Dimensions, View, Text, SafeAreaView, Image,
    TouchableOpacity, ScrollView, StyleSheet, 
    Animated, StatusBar } from 'react-native';
// import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class SellItem extends Component {
    constructor(props) {
      super(props)
      const sizeList = ["XS", "S", "M", "L", 'XL', 'XXL']
      const selected = 0
    
      this.state = {
        sizeList: sizeList,
        selected: selected,
        visible: false,

      }
    }

    selectCondition() {
        this.setState({
            selected: this.state.selected + 1
        })
    }


    render() {
      const { navigate } = this.props.navigation;
      const { item } = this.props.route.params;
      var radio_props = [
        {label: '', value: 0 }
      ];

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
        
        <View style = {styles.overall_condition_container}>
            <View style = {styles.condition_container}>
                <View style = {styles.name_container}>
                    <Text style = {styles.category_text}>{item.full_name}</Text>
                </View> 
            
                <View style = {{height: 35}}></View>
                    <View style = {styles.more_margin_container}>
                        <Text style = {styles.condition_text}>
                            Is item free of holes and tears?
                        </Text>

                        <RadioForm
                            radio_props={radio_props}
                            initial={1}
                            onPress={this.selectCondition.bind(this)}/>
                    </View>
                    <View style = {{height: 20}}></View>

                    <View style = {styles.more_margin_container}>
                        <Text style = {styles.condition_text}>
                            Is item free of stains?
                        </Text>

                    <RadioForm
            radio_props={radio_props}
            initial={1}
            onPress={this.selectCondition.bind(this)}/>
                
                </View>

                    <View style = {{height: 20}}></View>
                    <View style = {styles.more_margin_container}>
                        <Text style = {styles.condition_text}>
                            Is the color not faded?
                        </Text>

                        <RadioForm
            radio_props={radio_props}
            initial={1}
            onPress={this.selectCondition.bind(this)}/>  
                </View> 
                </View>
            </View>

            <View>

            </View>

        <TouchableOpacity

        style={this.state.selected >= 3 ? 
            styles.button : styles.disabled} 
          onPress={ () => navigate('ItemPutOnSale', {item: item}) } >
          <Text style={styles.skip_text}>Confirm</Text>
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

    name_container: {
        flex: 1,
        marginRight: 20,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
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

    condition_container: {
        marginHorizontal: '5%', 
        marginTop: 20, 
        textAlign: 'left',
        flex: 1, 
        flexGrow: 1,
        width: '90%'
    },

    overall_condition_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    more_margin_container: {
        marginLeft: '5%',  
        textAlign: 'left',
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'stretch',
        // flexGrow: 1,
        width: '90%',
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

    disabled: {

    },

      button: {
        flex: 1,
        marginLeft: '25%',
        marginTop: 40,
        marginBottom: 5,
        backgroundColor: "#03adfc", //"#03adfc",
        paddingHorizontal: '10%',
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

    condition_text: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Avenir'
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
