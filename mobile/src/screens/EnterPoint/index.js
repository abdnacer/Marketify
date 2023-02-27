import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import Window from '../../assets/window.png'
import Button from '../../components/Button'
import { colors, fonts } from '../../resources'

const GetStarted = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff' , height : "100%"}}>

      <Image source={Window} style={styles.image} />

      <Text style={styles.Title}>Make a fresh   </Text>
      <Text style={styles.Title}>food delivery  </Text>
      <View style={styles.description}>
      <Text style={styles.p}>We quickly deliver high-quality  </Text>
      <Text style={styles.p}>and fresh product to your home </Text>
      </View>
     
      <Button title='Order Now'  onPress={()=>navigation.replace('products')}/>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 400,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginStart:12,
  },
  Title: {
    fontSize: 40,
    //  alignSelf:'center',
    color: colors.green,
    marginLeft: 20,
    // fontWeight: 'bold',
    fontFamily: fonts.Ru
  },
  p: {
   
    fontSize: 17,
    marginLeft: 20,

  },
  description:{
    marginTop:15,
  }

})