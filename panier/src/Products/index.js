import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../res'
import LinearGradient from 'react-native-linear-gradient'
import Orange from '../assets/orange.png'
import WaterMelon from '../assets/watermelon.png'
import Panier from '../assets/Icons/Plus.png'
import Header from '../Header'
const Product = ({navigation}) => {
    return (
        <View style={{}}>
        <Header />
            <Text style={styles.Title}>Choose your fruit</Text>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.ContainerCategorie}>
                    <LinearGradient colors={['#FAFF01', '#D2FF01']} style={styles.Categorie}>
                        <Text>Popular</Text>
                    </LinearGradient>

                    <View style={styles.Categorie}>
                        <Text>Discounts</Text>
                    </View>

                    <View style={styles.Categorie}>
                        <Text>Newest</Text>
                    </View>
                    <View style={styles.Categorie}>
                        <Text>Newest</Text>
                    </View>
                </View>
            </ScrollView>


            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.ContainerProduct}>


                    <LinearGradient colors={['#FFFEDC', '#FFFF']} style={styles.Product}>
                        <View style={styles.PanierContainer}>
                            <Image source={Panier} style={styles.Pan} />
                        </View>
                        <Image source={WaterMelon} style={styles.Image} />
                        <View style={styles.FooterCard}>
                            <View style={styles.Info}>
                                <Text> Orange   </Text>
                                <Text style={{ fontWeight: 'bold' }}>1$</Text>
                            </View>

                        </View>


                    </LinearGradient>

                    <LinearGradient colors={['#E2FFFC', '#FFF']} style={styles.Product}>
                    <View style={styles.PanierContainer}>
                            <Image source={Panier} style={styles.Pan} />
                        </View>
                        <Image source={Orange} style={styles.Image} />
                        <View style={styles.FooterCard}>
                            <View style={styles.Info}>
                                <Text> Orange   </Text>
                                <Text style={{ fontWeight: 'bold' }}>1$</Text>
                            </View>

                        </View>
                    </LinearGradient>
                    <LinearGradient colors={['#FFFEDC', '#FFFF']} style={styles.Product}>
                        <View style={styles.PanierContainer}>
                            <Image source={Panier} style={styles.Pan} />
                        </View>
                        <Image source={WaterMelon} style={styles.Image} />
                        <View style={styles.FooterCard}>
                            <View style={styles.Info}>
                                <Text> Orange   </Text>
                                <Text style={{ fontWeight: 'bold' }}>1$</Text>
                            </View>

                        </View>


                    </LinearGradient>
                    <LinearGradient colors={['#FFFEDC', '#FFFF']} style={styles.Product}>
                        <View style={styles.PanierContainer}>
                            <Image source={Panier} style={styles.Pan} />
                        </View>
                        <Image source={WaterMelon} style={styles.Image} />
                        <View style={styles.FooterCard}>
                            <View style={styles.Info}>
                                <Text> Orange   </Text>
                                <Text style={{ fontWeight: 'bold' }}>1$</Text>
                            </View>

                        </View>


                    </LinearGradient>
                    <LinearGradient colors={['#FFFEDC', '#FFFF']} style={styles.Product}>
                        <View style={styles.PanierContainer}>
                            <Image source={Panier} style={styles.Pan} />
                        </View>
                        <Image source={WaterMelon} style={styles.Image} />
                        <View style={styles.FooterCard}>
                            <View style={styles.Info}>
                                <Text> Orange   </Text>
                                <Text style={{ fontWeight: 'bold' }}>1$</Text>
                            </View>

                        </View>


                    </LinearGradient>
                    <LinearGradient colors={['#FFFEDC', '#FFFF']} style={styles.Product}>
                        <View style={styles.PanierContainer}>
                            <Image source={Panier} style={styles.Pan} />
                        </View>
                        <Image source={WaterMelon} style={styles.Image} />
                        <View style={styles.FooterCard}>
                            <View style={styles.Info}>
                                <Text> Orange   </Text>
                                <Text style={{ fontWeight: 'bold' }}>1$</Text>
                            </View>

                        </View>


                    </LinearGradient>



                </View>
            </ScrollView>

            {/* <Text style={styles.h}> Fruit sets</Text> */}

        </View >
    )
}

export default Product

const styles = StyleSheet.create({
    Title: {
        fontFamily: fonts.Ru,
        color: colors.green,
        fontSize: 25,
        marginTop: 15,
        marginLeft: 10,



    },
    ContainerCategorie: {

        flex: 4,
        flexDirection: 'row',

        marginTop: 20,
        marginBottom: 20,

    },
    Categorie: {

        backgroundColor: 'white',
        borderRadius: 13,
        height: 32,
        padding: 6,
        width: 111,
        marginLeft: 12,

    },
    ContainerProduct: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    Product: {
        height: 250,
        backgroundColor: colors.green,
        width: 170,
        borderRadius: 25,
        margin: 10,
    },
    Image: {
        width: 150,
        resizeMode: 'contain',
        height: 140,
        alignSelf: 'center'

    },
    Info: {
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: '#FFEF47',
        padding: 10,
        width: 150,
        alignSelf: "center",
        margin:10,

    },
    h: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.green,
        marginStart: 10,
    },
    FooterCard: {
        flexDirection: 'row'
    },
    Pan: {
        width: 40,
        height: 40,
       margin: 8,
    }, 
    PanierContainer: {
        alignSelf: 'flex-end',

    }

})