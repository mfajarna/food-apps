import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { Colors } from '../../utils/colors/Colors'
import { Ic_rounded_bg } from '../../assets/icon/icon'
import { GlobalStyles } from '../../helpers/GlobalStyles'
import { Fonts } from '../../utils/fonts/Fonts'
import { responsiveFonts } from '../../helpers/FontsHelper'
import Gap from '../../components/Gap/Gap'
import BtnAuth from '../../components/CustomButtons/BtnAuth'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../utils/routes/Route'

type Props = NativeStackScreenProps<RootStackParamsList, "AuthScreen">

const AuthScreen = ({navigation}: Props) => {

  const handleMovePage = () => navigation.navigate("SigninScreen")

  return (
    <View style={styles.container}>
      <View style={{
        flex: 0.7,
        backgroundColor: `${Colors.Secondary}`,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100
      }}>
          <View style={{
            flex: 1,
            position: 'absolute',
            alignSelf: 'center',
            bottom: 1,
            marginBottom: -50

          }}>
              <Ic_rounded_bg />
          </View>
      </View>

      <View style={{
          flex: 0.2
      }}>

      </View>

      <View style={{
        flex: 0.4,
        paddingHorizontal: 20
      }}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={[GlobalStyles.customText, {
            fontFamily: `${Fonts.SemiBold}`,
            fontSize: responsiveFonts(30)
          }]}>Bakso Japra Food</Text>

          <Gap height={30} />

          <Text style={[GlobalStyles.customText, {
            fontFamily: `${Fonts.Regular}`,
            fontSize: responsiveFonts(14),
            color: `${Colors.Grey}`,
            maxWidth: 300,
            textAlign: 'center'
          }]}>Platform untuk memudahkan pemesanan bakso japra</Text>
        </View>
          
      </View>

      <View style={{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <BtnAuth
          title='Lanjutkan untuk memulai'
          onPress={handleMovePage}
        />
      </View>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: `${Colors.White}`
  }
})