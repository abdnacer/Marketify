import { StyleSheet,TextInput, Text, View } from 'react-native'
import React from 'react'

const Input = ({placeholder}) => {
  return (
    <View>
        <TextInput
        style={styles.input}
        placeholder={placeholder}
      /> 
    </View>
   

  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        height: 60,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: "#DFDFDF",
        width: 320,
        borderRadius: 5,
        paddingLeft:10,
         fontWeight:'bold'
      },
})