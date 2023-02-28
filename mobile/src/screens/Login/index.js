import {StyleSheet, Image, Text, View, ToastAndroid, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Logo from '../../assets/logo.png';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {LOGIN_FAILED, LOGIN_SUCCESS} from '../../features/authSclice';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [user, setUser] = useState({email: '', password: ''});
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    await axios
      .post('http://172.30.208.1:5000/api/auth/login', user)
      .then(res => {
        if (!res.data.token) {
          dispatch(LOGIN_FAILED());
        }
        else if (res.data.user.role === 'client') {
          dispatch(LOGIN_SUCCESS(res.data));
          AsyncStorage.setItem('user', JSON.stringify(res.data.user));
          AsyncStorage.setItem('token', res.data.token);
          navigation.replace('products');
        }
        else if (res.data.user.role !== 'client') {
          dispatch(LOGIN_FAILED());
          navigation.replace('pageNotAccess');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const valuex = await AsyncStorage.getItem('user');
  //     setValue(JSON.parse(valuex));
  //   };

  //   fetchUser();
  // }, []);

  // console.log('Objet utilisateur récupéré avec succès : ', value);

  return (
    <View>
      <Header back />
      <Image source={Logo} style={styles.image} />
      <Input
        placeholder="Email"
        onChangeText={value => setUser({...user, email: value})}
        name="email"
      />
      <Gap height={20} />
      <Input
        placeholder="Password"
        name="password"
        secureTextEntry={true}
        onChangeText={value => setUser({...user, password: value})}
      />
      <View style={styles.containerBottom}>
        <Gap height={20} />
        <Button title="LOGIN" onPress={handleLogin} />
        <Text
          style={{
            alignSelf: 'center',
            padding: 10,
            marginTop: 10,
            color: '#000',
          }}
          onPress={() => navigation.replace('register')}>
          Don't have an account?
          <Text style={{color: '#2ecc71', fontWeight: 'bold'}}> Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  containerBottom: {
    alignSelf: 'center',
  },
  extAlign: 'center',
});
