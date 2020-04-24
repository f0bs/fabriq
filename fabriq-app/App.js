import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginRegister from './screens/LoginRegister'
import Register from './screens/FindClothes'
import FetchingEmails from './screens/FetchingEmails'
import EmailsFound from './screens/EmailsFound'
import ConfirmedAddItems from './screens/ConfirmedAddItems'
import Wardrobe from './screens/Wardrobe'
import ClothingCategory from './screens/ClothingCategory'
import ClothingDetail from './screens/ClothingDetail'

import { NavigationContainer, HeaderBackButton } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const navigationOptions = ({ navigation }) => ({
  headerLeft: <HeaderBackButton onPress={() => navigation.goBack()} />,
})

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "LoginRegister" component = { LoginRegister }  options={{ headerShown: false }}/>
          <Stack.Screen name = "FindClothes" component = {Register} options={{ headerShown: false }}/>
          <Stack.Screen name = "FetchingEmails" component = {FetchingEmails} options={{ headerShown: false }}/>
          <Stack.Screen name = "EmailsFound" component = {EmailsFound} options={{ headerShown: false }}/>
          <Stack.Screen name = "ConfirmedAddItems" component = {ConfirmedAddItems} options={{ headerShown: false }}/>
          <Stack.Screen name = "Wardrobe" component = {Wardrobe} options={{ headerShown: false }}/>
          <Stack.Screen name = "ClothingCategory" component = {ClothingCategory} options={{ headerShown: false }}/>
          <Stack.Screen name = "ClothingDetail" component = {ClothingDetail} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}