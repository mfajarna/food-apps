import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { Icon } from '@rneui/themed'
import Gap from '../../../components/Gap/Gap'
import { GlobalStyles } from '../../../helpers/GlobalStyles'
import { Fonts } from '../../../utils/fonts/Fonts'
import { responsiveFonts } from '../../../helpers/FontsHelper'
import { Colors } from '../../../utils/colors/Colors'
import { useNavigation } from '@react-navigation/native'
import { deleteUser } from '../../../helpers/AsyncstoreServices'

type Props = {
  username: string
}

const HeaderDashboard = ({username}: Props) => {
  const nav = useNavigation();
  const handleLogout = async () => {
    const logoutUser = await deleteUser();

    nav.navigate('SigninScreen')

    return Promise.resolve(logoutUser);

  }
  return (
    <View style={styles.container}>
      <Text style={[GlobalStyles.customText, {
          fontFamily: Fonts.SemiBold,
          fontSize: responsiveFonts(20),
          color: Colors.DarkBlue,
          maxWidth: 250
      }]}>👋 Hi, {username}</Text>
      
      <View style={{
          flexDirection: 'row'
      }}>
          <Icon name='shopping-cart' color={'black'} onPress={() => nav.navigate('CartScreen')} />
          <Gap width={15} />
          <Icon name='logout' color={'black'} onPress={handleLogout} />
      </View>
    </View>
  )
}

export default HeaderDashboard

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
})