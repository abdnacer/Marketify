import {StyleSheet, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Logo from '../../assets/logo.png';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import { LOGIN_SUCCESS } from '../../features/authSclice';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

const Login = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [user, setUser] = useState({email: '', password: ''});
  const dispatch = useDispatch();

  const select = useSelector(state => state.auth.isLogin);
  console.log(select)

  const handleLogin = async () => {
    await axios
      .post('http://172.30.208.1:5000/api/auth/login', user)
      .then(res => {
        dispatch(LOGIN_SUCCESS(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <Header back />
      <Image source={Logo} style={styles.image} />
      {/* <Text>{select.id}</Text>
      <Text>{select.email}</Text>
      <Text>{select.token}</Text> */}
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
});
