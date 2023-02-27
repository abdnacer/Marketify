import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EnterPoint from '../screens/EnterPoint'
import Products from '../screens/Products'
import Panier from '../screens/Panier'
import Login from '../screens/Login'
import Register from  '../screens/Register'
import PageNotAccess from '../screens/PageNotAccess'

const Stack = createNativeStackNavigator();

const route = () => {
  return (
    <Stack.Navigator initialRouteName="start">
      <Stack.Screen name='start' component={EnterPoint} options={{ headerShown: false }} />
      <Stack.Screen name='products' component={Products} options={{ headerShown: false }} />
      <Stack.Screen name='panier' component={Panier} options={{ headerShown: false }} />
      <Stack.Screen name='login' component={Login} options={{ headerShown: false }}  />
      <Stack.Screen name='register' component={Register} options={{ headerShown: false }}  />
      <Stack.Screen name='pageNotAccess' component={PageNotAccess} options={{ headerShown: false }}  />
    </Stack.Navigator>
  )
}

export default route

const styles = StyleSheet.create({})