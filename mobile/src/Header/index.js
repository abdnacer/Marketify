import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { Back, IC_Cart, Shopping } from '../../../res'
import shopping from '../assets/Icons/shopping.png'
import { useNavigation } from '@react-navigation/native';

const Header = ({ drawer, back, cart, onPress }) => {

    const navigation = useNavigation();

    const handleLoginPress = () => {
      navigation.navigate('login');
    }
  
    const handleShoppingPress = () => {
      navigation.navigate('panier');
    }
    return (
        <View style={styles.wrapperHeader}>
            <TouchableOpacity onPress={handleLoginPress}>
                {/* <Back /> */}
                <Text>Login</Text>
                {/* <Image source={Back}  style={styles.imageBack}/> */}
            </TouchableOpacity>

            <TouchableOpacity onPress={handleShoppingPress}>
                {/* <IC_Cart /> */}
                <Image source={shopping}  style={styles.image}/>
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
        backgroundColor: '#fff'
    },
    image:{
        width:20,
        height:30,
         resizeMode:'contain',
    },
    imageBack:{
        width:15,
        height:15,
       
        margin:7,

    }
})