import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/colors/Colors'
import { GlobalStyles } from '../../helpers/GlobalStyles'
import { Fonts } from '../../utils/fonts/Fonts'
import { responsiveFonts } from '../../helpers/FontsHelper'

type BtnAuth = {
    onPress?: () => void,
    title: string,
    disabled?: boolean
}

const BtnAuth = ({onPress, title, disabled}: BtnAuth) => {
  return (
    <TouchableOpacity style={[styles.container, {
      backgroundColor: disabled ? Colors.Primary : `${Colors.Secondary}`,
    }]} onPress={onPress} disabled={disabled}>
      <Text style={[GlobalStyles.customText, {
          fontFamily: `${Fonts.SemiBold}`,
          color: `${Colors.White}`,
          fontSize: responsiveFonts(14),
          textAlign: 'center'
      }]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BtnAuth

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 13,
        paddingVertical: 15,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})