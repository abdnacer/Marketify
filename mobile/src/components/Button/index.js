import { StyleSheet, Text, TouchableOpacity,Image, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import StartIcon from '../../assets/Icons/start.png'


const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <LinearGradient colors={['#2ecc71', '#2ecc71']} style={styles.button}>
                <Text style={styles.title}>
                    {props.title}  <Image style ={ styles.icon} source={StartIcon} />
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Button



const styles = StyleSheet.create({
    button:
    {
        padding: 15,
        width: 200,
        alignSelf: "center",
        borderRadius: 30,
        marginTop:25,
        alignSelf:'flex-start',
        marginStart : 15,
        shadowColor: 'black',
        shadowOffset: { width: 33, height: 14 },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 30,

    },
    title: {
        color: '#000',
        alignSelf: 'center',
        // fontWeight: "bold",
        fontSize:16
    },
    icon:  {
        width:18,
        height : 18,
    }
})