import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../assets/logo.png';
import {colors} from '../../resources';
import axios from 'axios';

const Register = ({navigation}) => {
  const [userRegister, setUserRegister] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  const addUserClient = async () => {
    await axios
      .post('http://172.30.208.1:5000/api/auth/register', userRegister)
      .then(() => {
        navigation.replace('login')
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.title}>Create Account </Text>
      <View style={styles.containerInput}>
        <Input
          placeholder="First Name"
          name="first_name"
          onChangeText={value =>
            setUserRegister({...userRegister, first_name: value})
          }
        />
        <Gap height={20} />
        <Input
          placeholder="Last Name"
          name="last_name"
          onChangeText={value =>
            setUserRegister({...userRegister, last_name: value})
          }
        />
        <Gap height={20} />
        <Input
          placeholder="Phone"
          name="phone"
          onChangeText={value =>
            setUserRegister({...userRegister, phone: value})
          }
        />
        <Gap height={20} />
        <Input
          placeholder="Address"
          name="address"
          onChangeText={value =>
            setUserRegister({...userRegister, address: value})
          }
        />
        <Gap height={20} />
        <Input
          placeholder="Email"
          name="email"
          onChangeText={value =>
            setUserRegister({...userRegister, email: value})
          }
        />
        <Gap height={20} />
        <Input
          placeholder="Password"
          name="password"
          secureTextEntry={true}
          onChangeText={value =>
            setUserRegister({...userRegister, password: value})
          }
        />
        <Gap height={20} />
        <Input placeholder="Confirm Password" secureTextEntry={true} />
        <Gap height={20} />
        <View style={styles.containerBottom}>
          <Gap height={15} />
          <Button title="SIGN UP" onPress={addUserClient} />
          <Text style={{flexWrap: 'nowrap', marginTop: 10}}>
            Already have an account?{' '}
            <Text
              style={{color: '#E9AC12', fontWeight: 'bold'}}
              onPress={() => navigation.replace('login')}>
              {' '}
              Login{' '}
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    marginTop: 20,
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 28,
    color: colors.green,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 20,
  },
  containerBottom: {
    alignSelf: 'center',
  },
  containerInput: {
    marginBottom: 40,
  },
});
