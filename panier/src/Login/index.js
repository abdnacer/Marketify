import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import Button from '../Button'
import Input from '../Input'
import Gap from '../Gap'
import Logo from  '../assets/logo.png'
import { colors } from '../res'
const Login = ({navigation}) => {
    return (
        <View>
            <Image source={Logo} style={styles.image} />
            <Text style={styles.title}>Welcome back </Text>
            <Input
                placeholder="username"
                name='username'

            />
            <Gap height={20} />

            <Input
                placeholder="Password"
                name='password'

                secureTextEntry
            />
            <View style={styles.containerBottom}>
                <Gap height={20}/>
                <Text style={{ alignSelf: 'flex-end', fontSize: 15, }}> Forgot your password</Text>


                {/* {error && <Text>{error}</Text>} */}
                <Button title="LOGIN" />
                {/* // onPress={() => navigation.replace('delivery')}

                /> */}
                <Text style={{ alignSelf: 'center', padding: 10 }} onPress={() => navigation.replace('register')}>
                    Don't have an account? 
                <Text style={{ color: '#E9AC12', fontWeight: 'bold' }}> Sign up</Text></Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        marginTop: 40,
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
        alignSelf: 'center'
    }
})