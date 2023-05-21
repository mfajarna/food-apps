import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import { Colors } from '../../utils/colors/Colors'
import { GlobalStyles } from '../../helpers/GlobalStyles'
import { Fonts } from '../../utils/fonts/Fonts'
import { responsiveFonts } from '../../helpers/FontsHelper'
import { Icon } from '@rneui/themed'
import { Image } from 'react-native'
import { ImgBaksoItem, ImgEsTeh } from '../../assets/img/img'
import Gap from '../../components/Gap/Gap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteCart, removeCart } from '../../utils/redux/toolkit/MyCartSlice'
import { RootStackParamsList } from '../../utils/routes/Route'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { addMyProducts, decreaseQty, increaseQty } from '../../utils/redux/toolkit/MyProductSlice'
import { increaseQtyDrinks } from '../../utils/redux/toolkit/MyProductDrinkSlice'

type Props = NativeStackScreenProps<RootStackParamsList, "SigninScreen">

const MinumanScreen = ({navigation}: Props) => {

  const myMinuman = useSelector(state => state.drink);
  const myCartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;

    myCartItems.map(item => {
      total = total + item.qty * item.harga
    })

    return total;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 13, paddingBottom: 10}}>
        <Header 
            title='Minuman'
        />
      </View>

      <FlatList
        data={myMinuman}
        renderItem={({item, index}) => {
          return(
            <View style={styles.containerCard}>
              <View style={{flexDirection: 'row',}}>
              <Image source={{uri : `${item.img}`}} resizeMode='cover' style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20
                }} />
        
                <View style={{marginLeft: 10, alignItems: 'flex-start', marginTop: 5}}>
                    <Text style={[GlobalStyles.customText, {
                        fontFamily: Fonts.SemiBold,
                        color: Colors.DarkBlue,
                        fontSize: responsiveFonts(15)
                    }]}>{item.nama}</Text>
                    <Gap height={5} />
                    <Text style={[GlobalStyles.customText, {
                        fontFamily: Fonts.Medium,
                        color: Colors.Grey,
                        fontSize: responsiveFonts(13)
                    }]}>Rp. {item.harga}</Text>
                </View>
              </View>
        
              <View style={{
                  justifyContent: 'flex-end',
              }}>
                  <View style={{
                      flexDirection: 'row'
                  }}>
                    {item.qty == 0 ? (
                        <TouchableOpacity onPress={() => {
                          dispatch(addToCart(item))
                          dispatch(increaseQtyDrinks(item.id))
                        }} style={{
                            backgroundColor: Colors.Secondary,
                            borderRadius: 5,
                            paddingHorizontal: 3,
                            paddingVertical: 2,
                          
                        }}>
                            <Icon name='shopping-cart' color={'black'} />
                        </TouchableOpacity>
                    ) : null}
                      {item.qty == 0 ? null : (
                          <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5}}>
                            <Icon name='done' color={'green'} />
                          </View>
                      )}  
                  </View>
                
              </View>
            </View>
          )
        }}
      
      />

      <View style={{
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10
      }}>
        <View>
          <Text style={[
                  GlobalStyles.customText, {
                      fontFamily: `${Fonts.Medium}`,
                      fontSize: responsiveFonts(14),
                      color: Colors.DarkBlue
                  }
              ]}>{`added items ${myCartItems.length}`}</Text>

              <Text>{`Total ${getTotal()}`}</Text>
        </View>
        <View>
          <TouchableOpacity style={{
              backgroundColor: Colors.Secondary,
              paddingHorizontal: 20,
              paddingVertical: 7,
              borderRadius: 10,
          }} onPress={() => navigation.navigate('CartScreen')}>
              <Text style={[
                  GlobalStyles.customText, {
                      fontFamily: `${Fonts.SemiBold}`,
                      fontSize: responsiveFonts(15),
                      color: Colors.DarkBlue
                  }
              ]}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MinumanScreen

const styles = StyleSheet.create({
  containerCard:{
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent: 'space-between',
      paddingHorizontal: 10
  }
})
