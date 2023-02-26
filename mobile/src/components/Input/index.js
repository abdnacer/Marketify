import { StyleSheet,TextInput, Text, View } from 'react-native'
import React from 'react'

const Input = ({placeholder, onChangeText, secureTextEntry}) => {
  return (
    <View>
        <TextInput style={styles.input} secureTextEntry={secureTextEntry} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#333"  /> 
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        width: 320,
        fontWeight:'bold',
        height: 40,
        borderBottomColor: "#2ecc71",
        borderBottomWidth: 2,
        padding: 10,
        color: 'black',
      },
})