import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../utils/colors/Colors'
import { TouchableOpacity } from 'react-native'
import { ImgBakso, ImgTea } from '../../../assets/img/img'
import { GlobalStyles } from '../../../helpers/GlobalStyles'
import { Fonts } from '../../../utils/fonts/Fonts'
import { responsiveFonts } from '../../../helpers/FontsHelper'
import Gap from '../../../components/Gap/Gap'

type Props = {
    onPress?: () => void,
    title: string
}

const CategoryMenuCard = ({title, onPress}: Props) => {

    const img = title == 'Makanan' ? ImgBakso : ImgTea;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[
          GlobalStyles.customText,{
              fontFamily: Fonts.SemiBold,
              fontSize: responsiveFonts(15),
              color: Colors.DarkBlue
          }
      ]}>{title}</Text>
      <Gap height={3} />
      <Text style={[
          GlobalStyles.customText,{
              fontFamily: Fonts.Medium,
              fontSize: responsiveFonts(12),
              color: Colors.DarkBlue,
              maxWidth: 290,
              letterSpacing: 0.5
          }
      ]}>Terdapat berbagai macam menu {title ? title.toLowerCase() : ''} yang bisa kamu pesan!</Text>
      <View style={{
          alignItems: 'flex-end'
      }}>
          <Image source={img} resizeMode='cover' style={{
              width: 50,
              height: 50
          }} />
      </View>
    
    </TouchableOpacity>
  )
}

export default CategoryMenuCard

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        paddingVertical:10,
        backgroundColor: Colors.Secondary,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 15
    }
})