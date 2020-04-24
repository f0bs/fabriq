import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

export default class FetchingEmails extends Component {
    render() {
      const { navigate } = this.props.navigation;
      
      return (
      <SafeAreaView style = {styles.container}>

        <View style = {styles.title_container}>
          <Text style = {styles.title}> Fetching Emails </Text>
        </View>

        <View style = {styles.activity_indicator_container}>
          <ActivityIndicator size="large" color="#0384fc" />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('EmailsFound', {clothing_data: []})}  >
          <Text style={styles.skip_text}>Skip (testing for now)</Text>
        </TouchableOpacity>

      </SafeAreaView>

    )
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
      alignItems: 'center',
      backgroundColor: 'white'
    },

    title_container: {
        marginTop: '20%',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10
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
  
    title: {
      color: 'black',
      fontSize: 30,
      fontFamily: 'Avenir-Medium'
    },
    
  })
