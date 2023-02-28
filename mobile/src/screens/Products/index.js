import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {colors, fonts} from '../../resources';
import LinearGradient from 'react-native-linear-gradient';
import Orange from '../../assets/orange.png';
import WaterMelon from '../../assets/watermelon.png';
import Panier from '../../assets/Icons/Plus.png';
import Header from '../../components/Header';
import axios from 'axios';
// import {PRODUCT_SUCCESS, PRODUCT_FAILED} from '../../features/productSlice';

const Product = ({navigation}) => {
  const [getProducts, setGetProducts] = useState([]);
  const [getDataCategories, setGetDataCategories] = useState([]);
  const [pressed, setPressed] = useState(false)

  const select = useSelector(state => state.auth.isLogin);

  const getCategories = async () => {
    await axios
      .get('http://172.30.208.1:5000/api/user/categories')
      .then(res => {
        setGetDataCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getProduct = async () => {
    await axios
      .get('http://172.30.208.1:5000/api/user/produits')
      .then(res => {
        // console.log(res.data)
        setGetProducts(res.data);
        // dispatch(PRODUCT_SUCCESS(res.data))
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const handlePanier = (id, name, client, prix) => {
  //   console.log(id, client, name, prix);
  // };

  useEffect(() => {
    getProduct();
    getCategories();
  }, []);

  return (
    <View style={{}}>
      <>{select ? <Header logout cart /> : <Header login cart />}</>
      <Text style={styles.Title}>Choose your fruit</Text>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.ContainerCategorie}>
          {getDataCategories.map((categorie, index) => {
            return (
              <LinearGradient
                key={index}
                colors={['#2ecc71', '#2ecc71']}
                style={styles.Categorie}>
                <Text style={styles.text}>{categorie.name}</Text>
              </LinearGradient>
            );
          })}
        </View>
      </ScrollView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 200}}>
        <View style={styles.ContainerProduct}>
          {getProducts.map((product, index) => {
            return (
              <LinearGradient
                key={index}
                colors={['#E2FFFC', '#FFF']}
                style={styles.Product}>
                <View style={styles.PanierContainer}>
                      <Image source={Panier} style={styles.Pan} />
                </View>
                <Image source={Orange} style={styles.Image} />
                <View style={styles.FooterCard}>
                  <View style={styles.Info}>
                    <Text style={styles.text}> {product.name} </Text>
                    <Text style={{fontWeight: 'bold', ...styles.text}}>
                      {product.prix} $
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            );
          })}
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
