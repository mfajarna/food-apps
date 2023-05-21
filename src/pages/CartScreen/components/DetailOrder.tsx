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
import { orderTransactios } from '../../../API/transactions-handler'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

type DetailOrderType = {
    dataOrderan: Array<any>,
    total: number,
    resetDatas: any,
    dataDrinks: any,
    refRb: any,
    onPress?: any
}

const DetailOrder = ({dataOrderan, total, resetDatas, refRb, dataDrinks, onPress}: DetailOrderType) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const newArray = dataOrderan.map(obj => {
        const newObj = {};
      
        Object.keys(obj).forEach(oldKey => {
          // Define the mapping of old key names to new key names
          const keyMap = {
            nama: 'name',
            qty: 'quantity',
            harga: 'price',

            // Add more key mappings as needed
          };
      
          const newKey = keyMap[oldKey] || oldKey;
          newObj[newKey] = obj[oldKey];
        });
      
        return newObj;
    });


    function makeid(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const handlerTransactions = async () => {

        let data = JSON.stringify({
          "payment_type": "qris",
          "transaction_details": {
            "order_id": `TRX-${makeid(10)}`,
            "gross_amount": total
          },
          "item_details": newArray,
          "customer_details": {
            "first_name": "angel",
            "last_name": "caca",
            "email": "angel.caca@midtrans.com",
            "phone": "085777735141"
          },
          "qris": {
            "acquirer": "gopay"
          }
        });
    
        let config: object = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://app.sandbox.midtrans.com/snap/v1/transactions',
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': 'Basic U0ItTWlkLXNlcnZlci1UZWNUQ1k1MGh1MmNtWEZtS2s3anI3YjU6U0ItTWlkLXNlcnZlci1UZWNUQ1k1MGh1MmNtWEZtS2s3anI3YjU='
            },
            data : data
        }
    
        const result = axios(config)
        .then((res) => {
            console.log(JSON.stringify(res.data));
            const redirect_url = res.data.redirect_url;

            navigation.navigate('OrderProcessScreen', {redirect_url});
        }).catch((err) => {
            console.log(err.response)
        })
    
        return Promise.resolve(result);
    }

      

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
                        fontSize: responsiveFonts(15),
                        color: 'black'
                    }]}>{item.nama}</Text>
                    <Text style={[GlobalStyles.customText, {
                        fontFamily: Fonts.Medium,
                        marginTop: 2,
                        fontSize: responsiveFonts(13),
                        color: 'black'
                    }]}>Jumlah: {item.qty}</Text>
                    <Text style={[GlobalStyles.customText, {
                        fontFamily: Fonts.Medium,
                        fontSize: responsiveFonts(13),
                        color: 'black'
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
                fontSize: responsiveFonts(17),
                color: 'black'
            }]}>Total Harga: Rp. {total}</Text>
        </View>

        <TouchableOpacity
            onPress={() => {
                dispatch(deleteAllCart(dataOrderan))
                dispatch(resetData(resetDatas))
                dispatch(resetDataDrinks(dataDrinks))
                handlerTransactions()
                
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