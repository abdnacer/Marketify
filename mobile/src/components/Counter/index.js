import { StyleSheet, Image,Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Moin from '../../assets/Icons/moin.png'
import Plus from '../../assets/Icons/Plus.png'

const Counter = ({ onValueChange }) => {
    const [value, setValue] = useState(1)
    useEffect(() => {
        onValueChange(value)
    }, [onValueChange, value])

    const onCount = type => {
        let result = value;
        if (type === 'plus') {
            result = value + 1;
        }
        if (type === 'minus') {

            if (value > 1) {
                result = value - 1;
            }
        }

        setValue(result);
        onValueChange(result);
    }
    return (
        <View style={styles.counter}>
            <TouchableOpacity onPress={() => onCount('minus')}>
            <Image style={styles.Moin} source={Moin} />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginEnd: 5, marginStart: 5 }}>{value}</Text>

            <TouchableOpacity onPress={() => onCount('plus')}>
            <Image style={styles.Plus} source={Plus} />
            </TouchableOpacity>
        </View>


    )
}

export default Counter

const styles = StyleSheet.create({
    counter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Moin: {
        width: 25,
        height: 30,
      },
      Plus: {
        width: 30,
        height: 30,
      },
})