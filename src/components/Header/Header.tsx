import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { GlobalStyles } from '../../helpers/GlobalStyles'
import { Fonts } from '../../utils/fonts/Fonts'
import { responsiveFonts } from '../../helpers/FontsHelper'
import { Colors } from '../../utils/colors/Colors'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string,
  type?: string,
}

const Header = ({title, type}: Props) => {
    const nav = useNavigation();
    
    const handleBackNav = () => {
      switch(type){
        case 'dashboard':
          nav.navigate('DashboardScreen');
        default:
          nav.goBack();
          
      }
    }
  return (
    <View style={styles.container}>
      <Icon name='arrow-back-ios' color={'black'} onPress={handleBackNav}/>
      <Text style={[GlobalStyles.customText, {
          fontFamily: Fonts.SemiBold,
          fontSize: responsiveFonts(18),
          color: Colors.DarkBlue
      }]}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})