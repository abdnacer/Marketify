import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Panier from '../../assets/Icons/panier.png';
import Back from '../../assets/Icons/back.png';
import {useNavigation} from '@react-navigation/native';
import {fonts} from '../../resources';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../features/authSclice';
import axios from 'axios';

const Header = ({login, logout, back, cart, onPress}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const handleLoginPress = () => {
    navigation.navigate('login');
  };

  const handleShoppingPress = () => {
    navigation.navigate('panier');
  };

  const handleLogout = async () => {
    await axios.get('http://172.30.208.1:5001/api/auth/logout')
    .then(() =>  {
      dispatch(LOGOUT())
    })
    .catch(err => {
      console.log(err)
    })
  }

  if (login && cart) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShoppingPress}>
          <Image source={Panier} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  }
  if (back) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Back} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  } 
  if (logout && cart) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShoppingPress}>
          <Image source={Panier} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.wrapperHeader}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Back} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cartProduct:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    color: '#000',
    fontFamily: fonts.Ru,
  },
  image: {
    width: 30,
    height: 25,
    marginTop: 10,
    resizeMode: 'contain',
  },
  imageBack: {
    width: 15,
    height: 15,
    margin: 7,
  },
});
