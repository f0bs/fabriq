import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image,
    TouchableOpacity, ScrollView, StyleSheet, StatusBar } from 'react-native';

export default class ClothingDetail extends Component {
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
        </View>


        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('EmailsFound', {clothing_data: []})}  >
          <Text style={styles.skip_text}>Skip (testing for now)</Text>
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

      button: {
        // height: 45,
        marginTop: 40,
        marginBottom: 5,
        backgroundColor: "#03adfc", //"#03adfc",
        paddingHorizontal: '21%',
        paddingVertical: 10,
        borderRadius: 5,
        height: 45,
        // borderWidth: 2,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: '80%',
        shadowOffset:{  width: 10,  height: 5,  },
        shadowColor: 'black',
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

      subtext: {
        color: 'gray',
        fontSize: 15,
        fontFamily: 'Avenir'
      },
    
  })
