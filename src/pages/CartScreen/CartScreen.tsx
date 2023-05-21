import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { ImgBaksoItem } from '../../assets/img/img'
import { GlobalStyles } from '../../helpers/GlobalStyles'
import { Colors } from '../../utils/colors/Colors'
import { Fonts } from '../../utils/fonts/Fonts'
import { responsiveFonts } from '../../helpers/FontsHelper'
import { Icon } from '@rneui/themed'
import Gap from '../../components/Gap/Gap'
import { addToCart, deleteAllCart, deleteCart, removeCart } from '../../utils/redux/toolkit/MyCartSlice'
import { decreaseQty, increaseQty, resetData } from '../../utils/redux/toolkit/MyProductSlice'
import RBSheet from 'react-native-raw-bottom-sheet'
import DetailOrder from './components/DetailOrder'

const CartScreen = () => {
  const[review, setReview] = React.useState([])
  const myCartItems = useSelector(state => state.cart)
  const myMakanan = useSelector(state => state.product);
  const myDrinks = useSelector(state => state.drink);
  const dispatch = useDispatch();

  const refRBSheet = React.useRef();

  const getTotal = () => {
    let total = 0;

    myCartItems.map(item => {
      total = total + item.qty * item.harga
    })

    return total;
  }

  console.log(myCartItems);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 10}}>
        <Header
          title='Keranjang'
        />
      </View>

      <View style={{marginTop: 15}}>
        <FlatList
          data={myCartItems}
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
                          <TouchableOpacity style={{
                              backgroundColor: Colors.Secondary,
                              borderRadius: 5,
                              paddingHorizontal: 3,
                              paddingVertical: 2,
                            
                          }}>
                              <Icon name='shopping-cart' color={'black'} />
                          </TouchableOpacity>
                      ) : null}

                      {item.qty == 0 ? null : (
                          <TouchableOpacity onPress={() => {
                            dispatch(addToCart(item))
                            dispatch(increaseQty(item.id))
                          }} style={{
                              backgroundColor: Colors.Secondary,
                              borderRadius: 5,
                              
                          }}>
                              <Icon name='add' color={'white'} />
                          </TouchableOpacity>
                      )}

                      {item.qty == 0 ? null : (
                          <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5}}>
                            <Text>{item.qty}</Text>
                          </View>
                      )}
                  
    
                      {item.qty == 0 ? null : (
                          <TouchableOpacity onPress={() => {
                            if(item.qty > 1){
                              dispatch(removeCart(item))
                              dispatch(decreaseQty(item.id))
                            } else {
                              dispatch(deleteCart(item.id))
                              dispatch(decreaseQty(item.id))
                            }
                          }} style={{
                                  backgroundColor: Colors.Secondary,
                                  borderRadius: 5,
                              }}>
                                  <Icon name='remove' color={'white'} />
                          </TouchableOpacity>
                      )}
        
          
    
                    </View>
                  
                </View>
              </View>
            )
          }}
        />
      </View>

      <View style={{
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>

        {myCartItems.length == 0 ? null : (
          <View>
            <Text style={[GlobalStyles.customText, {
              fontFamily: Fonts.SemiBold,
              fontSize: responsiveFonts(15),
              color: Colors.Black
            }]}>Total :</Text>
            <Text style={[GlobalStyles.customText, {
              fontFamily: Fonts.Medium,
              fontSize: responsiveFonts(15),
              color: Colors.Black
            }]}>Rp. {getTotal()}</Text>
          </View>
        )}

        {myCartItems.length == 0 ? null : (
          <TouchableOpacity style={{
            backgroundColor: Colors.DarkBlue,
            paddingHorizontal: 15,
            borderRadius: 10,
            paddingVertical: 3
          }} onPress={() => {
            refRBSheet.current.open()
          }}>
            <Text style={[GlobalStyles.customText, {
              fontFamily: Fonts.Medium,
              fontSize: responsiveFonts(16),
              color: Colors.White
            }]}>Checkout</Text>
          </TouchableOpacity>
        )}

        
      </View>

      <RBSheet
          ref={refRBSheet}
          height={500}
          animationType='slide'
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "#9BA4B5"
            }
          }}
      >
        <DetailOrder
          dataOrderan={myCartItems}
          total={getTotal()}
          resetDatas={myMakanan}
          refRb={refRBSheet}
          dataDrinks={myDrinks}
        />
      </RBSheet>
    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 10
  },
  containerCard:{
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10
}
})