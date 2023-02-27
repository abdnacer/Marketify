import {StyleSheet, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Logo from '../../assets/logo.png';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {LOGOUT, LOGIN_SUCCESS, LOGIN_FAILED} from '../../features/authSclice';
import axios from 'axios';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = async () => {
        await axios.post('https://localhost:5000/api/auth/login', {email, password,})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    
  }

  return (
    <View>
      <Header back />
      <Image source={Logo} style={styles.image} />
      <Input placeholder="Email" onChangeText={value => setEmail({...email, email: value}) } name="email" />
      <Gap height={20} />
      <Input placeholder="Password" name="password" secureTextEntry={true} onChangeText={value => setPassword({...password, password: value})} />
      <View style={styles.containerBottom}>
        <Gap height={20} />
        <Button title="LOGIN" onPress={handleLogin} />
        <Text style={{alignSelf: 'center', padding: 10, marginTop: 10, color: '#000'}} onPress={() => navigation.replace('register')} >
          Don't have an account?
          <Text style={{color: '#2ecc71', fontWeight: 'bold'}}> Sign up</Text>
        </Text>
      </View>
    </View>
  );
}

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
