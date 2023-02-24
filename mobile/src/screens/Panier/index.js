import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import orange from '../../assets/orange.png'
import Moin from '../../assets/Icons/moin.png'
import Plus from '../../assets/Icons/Plus.png'
import Close from '../../assets/Icons/Close.png'
import { colors, fonts } from '../../resources'
import Back from '../../assets/Icons/back.png'
import Button from '../../components/Button'

const Panier = ({ navigation }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.replace('products')}>
          <Image source={Back} style={{ width: 25, height: 25, margin: 8 }} />
        </TouchableOpacity>
        <Text style={{ color: colors.green, fontSize: 25, fontFamily: fonts.Ru, marginStart: 10 }}>Panier</Text>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} style={{ height: 300 }}>
        <View style={styles.Product}>

          <View style={styles.FirstPart}>
            <Image style={styles.Image} source={orange} />
          </View>

          <View style={styles.SecondPart}>
            <Text style={{ color: colors.green, fontSize: 20, fontFamily: fonts.Ru }}> Orange </Text>
            <Text style={{ fontWeight: 'bold', marginStart: 8 }}> Details </Text>
            <View style={styles.ContainerCounter}>
              <Image style={styles.Moin} source={Moin} />
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginEnd: 5, marginStart: 5 }}>1</Text>
              <Image style={styles.Plus} source={Plus} />
            </View>
          </View>

          <View style={styles.Price}>
            <View><Text style={{ fontWeight: 'bold', fontSize: 17, alignSelf: 'center' }}>28$</Text></View>
          </View>

          <Image style={styles.CloseIcon} source={Close} />
        </View>

        <View style={styles.Product}>

          <View style={styles.FirstPart}>
            <Image style={styles.Image} source={orange} />

          </View>

          <View style={styles.SecondPart}>
            <Text style={{ color: colors.green, fontSize: 20, fontFamily: fonts.Ru }}> Orange </Text>
            <Text style={{ fontWeight: 'bold', marginStart: 8 }}> Details </Text>
            <View style={styles.ContainerCounter}>
              <Image style={styles.Moin} source={Moin} />
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginEnd: 5, marginStart: 5 }}>1</Text>
              <Image style={styles.Plus} source={Plus} />
            </View>
          </View>

          <View style={styles.Price}>
            {/* <View>  <Image style={styles.Image} source={Close} /> </View> */}
            <View><Text style={{ fontWeight: 'bold', fontSize: 17, alignSelf: 'center' }}>28$</Text></View>
          </View>

          <Image style={styles.CloseIcon} source={Close} />
        </View>


        <View style={styles.Product}>

          <View style={styles.FirstPart}>
            <Image style={styles.Image} source={orange} />

          </View>

          <View style={styles.SecondPart}>
            <Text style={{ color: colors.green, fontSize: 20, fontFamily: fonts.Ru }}> Orange </Text>
            <Text style={{ fontWeight: 'bold', marginStart: 8 }}> Details </Text>
            <View style={styles.ContainerCounter}>
              <Image style={styles.Moin} source={Moin} />
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginEnd: 5, marginStart: 5 }}>1</Text>
              <Image style={styles.Plus} source={Plus} />
            </View>
          </View>

          <View style={styles.Price}>
            {/* <View>  <Image style={styles.Image} source={Close} /> </View> */}
            <View><Text style={{ fontWeight: 'bold', fontSize: 17, alignSelf: 'center' }}>28$</Text></View>
          </View>

          <Image style={styles.CloseIcon} source={Close} />
        </View>

        <View style={styles.Product}>

          <View style={styles.FirstPart}>
            <Image style={styles.Image} source={orange} />

          </View>

          <View style={styles.SecondPart}>
            <Text style={{ color: colors.green, fontSize: 20, fontFamily: fonts.Ru }}> Orange </Text>
            <Text style={{ fontWeight: 'bold', marginStart: 8 }}> Details </Text>
            <View style={styles.ContainerCounter}>
              <Image style={styles.Moin} source={Moin} />
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginEnd: 5, marginStart: 5 }}>1</Text>
              <Image style={styles.Plus} source={Plus} />
            </View>
          </View>

          <View style={styles.Price}>
            {/* <View>  <Image style={styles.Image} source={Close} /> </View> */}
            <View><Text style={{ fontWeight: 'bold', fontSize: 17, alignSelf: 'center' }}>28$</Text></View>
          </View>

          <Image style={styles.CloseIcon} source={Close} />
        </View>

        <View style={styles.Product}>

          <View style={styles.FirstPart}>
            <Image style={styles.Image} source={orange} />

          </View>

          <View style={styles.SecondPart}>
            <Text style={{ color: colors.green, fontSize: 20, fontFamily: fonts.Ru }}> Orange </Text>
            <Text style={{ fontWeight: 'bold', marginStart: 8 }}> Details </Text>
            <View style={styles.ContainerCounter}>
              <Image style={styles.Moin} source={Moin} />
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginEnd: 5, marginStart: 5 }}>1</Text>
              <Image style={styles.Plus} source={Plus} />
            </View>
          </View>

          <View style={styles.Price}>
            {/* <View>  <Image style={styles.Image} source={Close} /> </View> */}
            <View><Text style={{ fontWeight: 'bold', fontSize: 17, alignSelf: 'center' }}>28$</Text></View>
          </View>

          <Image style={styles.CloseIcon} source={Close} />
        </View>

      </ScrollView>


      <View style={styles.FactureContainer}>
        <View >
          <Text style={styles.FactureInfo}> Facture</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.FactureInfo}>Total Panier :   </Text>
            <Text style={styles.FactureInfo}>40</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.FactureInfo}>Fras de laivraison  :  </Text>
            <Text style={styles.FactureInfo}>40</Text>
          </View>
        </View>
        <View style={styles.TotalContainer}>
          <Text style={styles.FactureInfo}> Total </Text>
          <Text style={styles.FactureInfo}> 64,30 $ </Text>
        </View>


      </View>
      <View style={{ alignSelf: 'center' }}>
        <Button title='confirm order' />
      </View>

    </View>

  )
}

export default Panier

const styles = StyleSheet.create({

  Product: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    margin: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 3,
    shadowRadius: 2,
    elevation: 8
  },
  Image: {
    width: 60,
    height: 60,
  },
  Moin: {
    width: 25,
    height: 30,
  },
  Plus: {
    width: 30,
    height: 30,
  },
  ContainerCounter: {
    flexDirection: 'row',

  },
  CloseIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  FirstPart: {

  },
  SecondPart: {
    width: 170,
  },
  Price: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFE853',
    // padding: 10,
    borderRadius: 10,
    width: 60,
    height: 30,
  },
  FactureContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    margin: 18,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 3,
    shadowRadius: 2,
    elevation: 8


  },
  TotalContainer: {
    borderTopStyle: 'dashed',
    borderTopColor: '#C7C7C7',
    borderTopWidth: 2,
    flexDirection: 'row', justifyContent: 'space-between'
  },
  FactureInfo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#4E4E4E',
    padding: 10,


  }

})