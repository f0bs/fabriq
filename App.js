import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}> Fabriq </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },

  text: {
    color: 'black',
    fontSize: 30,
  }
})

export default App;