import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginRegister from './screens/LoginRegister'
import Register from './screens/Register'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "LoginRegister" component = { LoginRegister }  options={{ headerShown: false }}/>

          <Stack.Screen name = "Register" component = {Register} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}