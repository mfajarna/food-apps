import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { Colors } from '../../utils/colors/Colors'
import HeaderDashboard from './components/HeaderDashboard'
import { GlobalStyles } from '../../helpers/GlobalStyles'
import { Fonts } from '../../utils/fonts/Fonts'
import { responsiveFonts } from '../../helpers/FontsHelper'
import Gap from '../../components/Gap/Gap'
import CategoryMenuCard from './components/CategoryMenuCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../utils/routes/Route'
import { getUser } from '../../helpers/AsyncstoreServices'

type Props = NativeStackScreenProps<RootStackParamsList, "DashboardScreen">

const DashboardScreen = ({navigation}: Props) => {

    const[username, setUsername] = React.useState('');

    const getUserInfo = async () => {
        const user = await getUser();
        setUsername(user.username)

        console.log(user)

        return Promise.resolve(user);
    }

    React.useEffect(() => {
        getUserInfo();
    }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
          paddingHorizontal: 20,
          flex: 1
      }}>
        <HeaderDashboard
            username={username}
        />

        <Gap
            height={25}
        />
        <Text style={[GlobalStyles.customText, {
          fontFamily: Fonts.SemiBold,
          fontSize: responsiveFonts(28),
          color: Colors.DarkBlue,
      }]}>
            Hari ini mau <Text style={[GlobalStyles.customText, {
                        fontFamily: Fonts.SemiBold,
                        fontSize: responsiveFonts(28),
                        color: Colors.Secondary,
                    }]}>
            memesan menu apa?
            </Text>
        </Text>
        <Gap height={20} />
        <Text style={[GlobalStyles.customText, {
                        fontFamily: Fonts.Medium,
                        fontSize: responsiveFonts(15),
                        color: Colors.DarkBlue,
                    }]}>
            Category Menu 
        </Text>

        <View style={{
            justifyContent: 'space-between',
            marginTop: 10
        }}>
            <CategoryMenuCard
                title='Makanan'
                onPress={() => navigation.navigate('MakananScreen')}
            />
            <CategoryMenuCard
                title='Minuman'
                onPress={() => navigation.navigate('MinumanScreen')}
            />
        </View>

      </View>
 
    </SafeAreaView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.White,

    }
})