import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as React from 'react'
import { GlobalStyles } from '../../../helpers/GlobalStyles'
import { Fonts } from '../../../utils/fonts/Fonts'
import { responsiveFonts } from '../../../helpers/FontsHelper'
import { Colors } from '../../../utils/colors/Colors'
import { useDispatch } from 'react-redux'
import { deleteAllCart } from '../../../utils/redux/toolkit/MyCartSlice'
import { resetData } from '../../../utils/redux/toolkit/MyProductSlice'
import { resetDataDrinks } from '../../../utils/redux/toolkit/MyProductDrinkSlice'

type DetailOrderType = {
    dataOrderan: Array<any>,
    total: number,
    resetDatas: any,
    dataDrinks: any,
    refRb: any
}

const DetailOrder = ({dataOrderan, total, resetDatas, refRb, dataDrinks}: DetailOrderType) => {

    const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyles.customText, {
          fontFamily: Fonts.SemiBold,
          fontSize: responsiveFonts(17)
      }]}>Detail Orderan</Text>
     
      <FlatList
        data={dataOrderan}
        renderItem={({item, index}) => {
            return(
                <View style={{
                    marginTop: 10
                }}>
                    <Text style={[GlobalStyles.customText, {
                        fontFamily: Fonts.SemiBold,
                        fontSize: responsiveFonts(15)
                    }]}>{item.nama}</Text>
                    <Text style={[GlobalStyles.customText, {
                        fontFamily: Fonts.Medium,
                        marginTop: 2,
                        fontSize: responsiveFonts(13)
                    }]}>Jumlah: {item.qty}</Text>
                    <Text style={[GlobalStyles.customText, {
                        fontFamily: Fonts.Medium,
                        fontSize: responsiveFonts(13)
                    }]}>Harga: Rp. {item.qty * item.harga}</Text>
                </View>
            )
        }}
      />
    
    <View style={{
        marginBottom: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }}>
        <View>
            <Text style={[GlobalStyles.customText, {
                fontFamily: Fonts.SemiBold,
                fontSize: responsiveFonts(17)
            }]}>Total Harga: Rp. {total}</Text>
        </View>

        <TouchableOpacity
            onPress={() => {
                dispatch(deleteAllCart(dataOrderan))
                dispatch(resetData(resetDatas))
                dispatch(resetDataDrinks(dataDrinks))
                refRb.current.close()
            }}
        >
            <View style={{
                backgroundColor: '#A0D8B3',
                paddingHorizontal: 20,
                borderRadius: 10,
                paddingVertical: 7
            }}>
                <Text style={[GlobalStyles.customText, {
                fontFamily: Fonts.Medium,
                fontSize: responsiveFonts(16),
                color: Colors.White
                }]}>Bayar</Text>
            </View>
        </TouchableOpacity>
    </View>


    </View>
  )
}

export default DetailOrder

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})