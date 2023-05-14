import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import { DataDummyMinuman } from '../../utils/data/DataDummy'
import { Colors } from '../../utils/colors/Colors'
import { GlobalStyles } from '../../helpers/GlobalStyles'
import { Fonts } from '../../utils/fonts/Fonts'
import { responsiveFonts } from '../../helpers/FontsHelper'
import CardMenuItem from '../MakananScreen/components/CardMenuItem'

const MinumanScreen = () => {
    const[jumlahItem, setJumlahItem] = React.useState<object>();

    React.useEffect(() => {
        console.log(jumlahItem)
    }, [])
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 13, paddingBottom: 10}}>
        <Header
            title='Minuman'
        />
      </View>

      <ScrollView contentContainerStyle={{paddingHorizontal: 10, marginTop: 20, paddingBottom: 50}} showsVerticalScrollIndicator={false}>
          {DataDummyMinuman.map((item, index) => {
              return(
                  <CardMenuItem
                    key={index}
                    id={item.id}
                    title={item.nama}
                    harga={item.harga}
                    total={jumlahItem == item}
                  />
              )
          })}
      </ScrollView>

      <View style={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center'
      }}>
         <TouchableOpacity style={{
             backgroundColor: Colors.Secondary,
             paddingHorizontal: 20,
             paddingVertical: 7,
             borderRadius: 10,
         }}>
             <Text style={[
                 GlobalStyles.customText, {
                     fontFamily: `${Fonts.SemiBold}`,
                     fontSize: responsiveFonts(15),
                     color: Colors.DarkBlue
                 }
             ]}>Masukan Keranjang</Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default MinumanScreen

const styles = StyleSheet.create({})