import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EnterPoint from '../EnterPoint'
import Products from '../Products'
import Panier from '../Panier'
import Login from '../Login'
import  Register from  '../Register'

const Stack = createNativeStackNavigator();

const route = () => {
  return (
    <Stack.Navigator initialRouteName="start">
      <Stack.Screen name='start' component={EnterPoint} options={{ headerShown: false }} />
      <Stack.Screen name='products' component={Products} options={{ headerShown: false }} />
      <Stack.Screen name='panier' component={Panier} options={{ headerShown: false }} />
      <Stack.Screen name='login' component={Login}  />
      <Stack.Screen name='register' component={Register}  />
    </Stack.Navigator>
  )
}

export default route

const styles = StyleSheet.create({})