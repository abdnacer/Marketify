import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Panier from '../../assets/Icons/panier.png';
import Back from '../../assets/Icons/back.png'
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../../resources';

const Header = ({ login, back, cart, onPress }) => {

    const navigation = useNavigation();

    const handleLoginPress = () => {
      navigation.navigate('login');
    }
  
    const handleShoppingPress = () => {
      navigation.navigate('panier');
    }
    
    if (login && cart) {
        return (
          <View style={styles.wrapperHeader}>
            <TouchableOpacity onPress={handleLoginPress}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShoppingPress}>
              <Image source={Panier} style={styles.image}/>
            </TouchableOpacity>
          </View>
        )
    }
    if(back){
        return(
            <View style={styles.wrapperHeader}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Back} style={styles.image}/>
            </TouchableOpacity>
          </View>
        )
    }

    return (
        <View style={styles.wrapperHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Image source={Back} style={styles.image}/>
          </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    wrapperHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        // backgroundColor: '#fff'
    },
    text: {
        color: '#000',
        fontFamily: fonts.Ru
    },
    image:{
        width: 30,
        height: 25,
        marginTop: 10,
        resizeMode:'contain',
    },
    imageBack:{
        width:15,
        height:15,
       
        margin:7,

    }
})