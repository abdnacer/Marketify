import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Started from "../../screens/started/Started"

const Stack = createNativeStackNavigator()

const AuthRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="started" component={Started} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}