import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts} from '../../resources';
import LinearGradient from 'react-native-linear-gradient';
import Orange from '../../assets/orange.png';
import WaterMelon from '../../assets/watermelon.png';
import Panier from '../../assets/Icons/Plus.png';
import Header from '../../components/Header';
import axios from 'axios';
import {useSelector} from 'react-redux';

const Product = ({navigation}) => {
  const [dataproducts, setProducts] = useState([]);

  const selectLogin = useSelector(state => state.auth.isLogin);

  const allProduct = async () => {
    await axios
      .get('http://172.30.208.1:5001/api/user/produits')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getCategories = async () => {
    await axios
      .get('http://172.30.208.1:5001/api/user/produits')
  }

  useEffect(() => {
    allProduct();
  }, []);

  return (
    <View>
      <>{selectLogin ? <Header logout cart /> : <Header login cart />}</>
      <Text style={styles.Title}>Choose your fruit</Text>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.ContainerCategorie}>
          <LinearGradient
            colors={['#2ecc71', '#2ecc71']}
            style={styles.Categorie}>
            <Text style={styles.text}>Popular</Text>
          </LinearGradient>

          <View style={styles.Categorie}>
            <Text style={styles.text}>Discounts</Text>
          </View>

          <View style={styles.Categorie}>
            <Text style={styles.text}>Newest</Text>
          </View>
          <View style={styles.Categorie}>
            <Text style={styles.text}>Newest</Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 200}}>
        <View style={styles.ContainerProduct}>
          {dataproducts.map((product, index) => (
            <LinearGradient key={index} colors={['#E2FFFC', '#FFF']} style={styles.Product}>
              <View style={styles.PanierContainer}>
                <Image source={Panier} style={styles.Pan} />
              </View>
              {/* <Image source={`http://localhost:5001/${product.image}`} style={styles.Image} /> */}
              <Image source={Orange} style={styles.Image} />
              <View style={styles.FooterCard}>
                <View style={styles.Info}>
                  <Text style={styles.text}> {product.name} </Text>
                  <Text style={{fontWeight: 'bold', ...styles.text}}>{product.prix} $</Text>
                </View>
              </View>
            </LinearGradient>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  Title: {
    fontFamily: fonts.Ru,
    color: colors.green,
    fontSize: 25,
    marginTop: 15,
    marginLeft: 10,
  },
  text: {
    color: '#000',
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
    flexWrap: 'wrap',
    height: '100%',
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
    alignSelf: 'center',
  },
  Info: {
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: '#2ecc71',
    padding: 10,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'space-around',
    margin: 10,
  },
  h: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.green,
    marginStart: 10,
  },
  FooterCard: {
    flexDirection: 'row',
  },
  Pan: {
    width: 40,
    height: 40,
    margin: 8,
  },
  PanierContainer: {
    alignSelf: 'flex-end',
  },
});
