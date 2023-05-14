import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../utils/colors/Colors'
import { GlobalStyles } from '../../helpers/GlobalStyles'
import { Fonts } from '../../utils/fonts/Fonts'
import { responsiveFonts } from '../../helpers/FontsHelper'
import Gap from '../../components/Gap/Gap'
import InputAuth from '../../components/CustomInputs/InputAuth'
import BtnAuth from '../../components/CustomButtons/BtnAuth'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../utils/routes/Route'
import UseForm from '../../helpers/UseForm'
import { getUser } from '../../helpers/AsyncstoreServices'

type Props = NativeStackScreenProps<RootStackParamsList, "SigninScreen">

const SigninScreen = ({navigation}: Props) => {
    
    let result = false;

    const data = [
        {
            nama: 'kojaydev'
        },
        {
            nama: 'mfajarna'
        }
    ]

    const handleSignupPage = () => navigation.navigate("SignupScreen");
    const handleSigninPage = async () => {


        const user = await getUser();

        const username = form.username;
        const password = form.password;

       if(username == user.username && password == user.password){
            navigation.navigate("DashboardScreen");
       }else{
           Alert.alert('Username atau password tidak ada!');
       }

    }
    const[form, setForm] = UseForm({
        username: '',
        password: ''
    })


  return (
    <SafeAreaView style={styles.container}>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 20
        }}>
            <Text style={[GlobalStyles.customText, {
                fontFamily: Fonts.SemiBold,
                color: Colors.DarkBlue,
                fontSize: responsiveFonts(25)
            }]}>Sign in</Text>
            <Gap height={6} />
            <Text style={[GlobalStyles.customText, {
                fontFamily: Fonts.Regular,
                color: Colors.Grey,
                fontSize: responsiveFonts(13),
            }]}>
                Sign in untuk menikmati fitur yang kami sediakan
            </Text>
        </View>

        <View style={{
            flex: 4,
            paddingHorizontal: 20
        }}>
            <InputAuth
                title='Username'
                placeholder='Masukan username...'
                value={form.username}
                onChangeText={(value: string) => setForm('username', value) }
            />
            <Gap height={25} />
            <InputAuth
                title='Password'
                placeholder='Masukan password...'
                type='password'
                value={form.password}
                onChangeText={(value: string) => setForm('password', value) }
            />
            
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <Text style={[GlobalStyles.customText, {
                fontFamily: Fonts.Regular,
                color: Colors.DarkBlue,
                fontSize: responsiveFonts(13),
                }]}>
                    Belum punya akun?{' '}
                </Text>

                <TouchableOpacity onPress={handleSignupPage}>
                    <Text style={[GlobalStyles.customText, {
                        fontFamily: Fonts.Regular,
                        color: Colors.DarkBlue,
                        fontSize: responsiveFonts(13),
                    }]}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                marginBottom: 15,
                flex: 1,
                justifyContent: 'flex-end',
            }}>
                <BtnAuth
                    title='Signin Sekarang'
                    onPress={handleSigninPage}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: `${Colors.White}`,
    }
})