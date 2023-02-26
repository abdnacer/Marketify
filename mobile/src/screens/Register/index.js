import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import React, { useState } from 'react';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../assets/logo.png';
import {colors} from '../../resources';
import Header from '../../components/Header';
import axios from 'axios';



const Register = ({navigation}) => {

  const [user, setUser] = useState({
    first_name: '', 
    last_name: '',
    phone: '',
    address: '',
    email: '',
    password: ''
  })

  const handleSignup = async () => {
    await axios.post('http://172.30.208.1:5001/api/auth/register', user)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <ScrollView>
      <Header back />
      <Image source={Logo} style={styles.image} />
      <Text style={styles.title}>Create Account</Text>
      <Gap height={23} />
      <View style={styles.containerInput}>
        <Input placeholder="First Name" name='first_name' onChangeText={value => setUser({...user, first_name: value})} />
        <Gap height={20} />
        <Input placeholder="Last Name" name='last_name' onChangeText={value => setUser({...user, last_name: value})} />
        <Gap height={20} />
        <Input placeholder="Phone" name='phone' onChangeText={value => setUser({...user, phone: value})} />
        <Gap height={20} />
        <Input placeholder="Address" name='address' onChangeText={value => setUser({...user, address: value})} />
        <Gap height={20} />
        <Input placeholder="Email" name='email' onChangeText={value => setUser({...user, email: value})} />
        <Gap height={20} />
        <Input placeholder="Password" name='password' secureTextEntry={true} onChangeText={value => setUser({...user, password: value})} />
        <Gap height={20} />
        <Input placeholder="Confirm Password" secureTextEntry={true} />
        <View style={styles.containerBottom}>
        <Gap height={30} />
        <Button title="SIGN UP" onPress={handleSignup} />
        <Gap height={15} />
        <Text style={{ flexWrap:'nowrap'}}>Already  have an account? <Text style={{ color: '#2ecc71', fontWeight: 'bold' }} onPress={() => navigation.replace('login')} > Login </Text></Text>
      </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 28,
    color: colors.green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerInput: {
    marginBottom: 60
  },
  containerBottom: {    
    alignSelf: 'center'
  }
});
