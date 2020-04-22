import React, { Component }  from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class FindClothes extends Component {
render() {

  const { navigate } = this.props.navigation;
      
return (
  <View style = {styles.container}>
    <View style = {styles.title_container}>
      <Text style = {styles.text}> Find your clothes from  </Text>
      <Text style = {styles.text}> your emails </Text>
    </View>

    <View style = {styles.email_container}>
      <TextInput
        style={styles.email_textinput}
        placeholder="emily.fabriq@gmail.com"/>
    </View>

    <View style = {styles.button_container}>
      <TouchableOpacity
          style={styles.authorize_button}
          onPress={() => navigate('FetchingEmails')}  >
          <Text style={styles.authorize_text}>Authorize</Text>
        </TouchableOpacity>
    </View>

    <View style = {styles.disclaimer_container}>
      <Text> By authorizing, you agree to allow Fabriq to find related </Text>
      <Text> clothing information from your email account. </Text>
    </View>

  </View>
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
  height: 80, 
  marginTop: '25%',
  marginLeft: 25,
  width: '80%',
  // justifyContent: 'center', 
  // alignItems: 'center'
},

email_container: {
  marginTop: 25,
  justifyContent: 'center',
  alignItems: 'center'
},

email_textinput: {
  marginLeft: '5%',
  height: 50, 
  minWidth: '90%',
  borderColor: "#E4E4E4", 
  borderWidth: 2,
  borderRadius: 5,
  textAlign: "center"
},

button_container: {
  alignItems: 'center',
  justifyContent: 'center',
},

authorize_button: {
  marginLeft: '5%',
  height: 50, 
  marginTop: 25,
  marginBottom: 5,
  backgroundColor: "#58BFF9", //"#03adfc",
  paddingHorizontal: '35%',
  paddingVertical: 15,
  borderRadius: 5,
  minWidth: '90%',
  textAlign: 'center',
  shadowOffset:{  width: 10,  height: 5,  },
  shadowColor: 'black',
  shadowOpacity: 0.1,
},

authorize_text: {
  fontSize: 15,
  fontWeight: '600',
  color: "white", // "#0384fc" //"white",
},

text: {
  color: 'black',
  fontSize: 30,
  fontFamily: 'Optima'
},

disclaimer_container: {
  marginTop: 15,
  marginLeft: '5%',
  width: '90%',
  textAlign: 'center'
},
})
