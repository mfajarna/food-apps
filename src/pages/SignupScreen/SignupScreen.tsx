import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import { Alert } from 'react-native'
import { deleteUser, getUser, setUser } from '../../helpers/AsyncstoreServices'


type Props = NativeStackScreenProps<RootStackParamsList, "SignupScreen">

const SignupScreen = ({navigation}: Props) => {

  const handleSignupPage = () => navigation.goBack();
  const[isBtnDisabled, setIsBtnDisabled] = React.useState(true);
  const[form, setForm] = UseForm({
    username: '',
    nama: '',
    password: '',
    konfirmasi_password: ''
  });

  const lengthUsername = form.username.length;
  const lengthNama = form.nama.length;
  const lengthKonfirmasiPass = form.konfirmasi_password.length;
  const lengthPassword = form.password.length;


  const handleSignup = async () => {
    
        if(form.password == form.konfirmasi_password){
            setUser({
                username: form.username,
                nama: form.nama,
                password: form.password,
                isAuth: true
            })


            // const user = await getUser();

            // console.log(user)

            navigation.replace('SigninScreen');

            

        }else{
            Alert.alert('Password tidak sesuai!');

            return false;
        }
  }

  React.useEffect(() => {
    if(lengthNama != 0 && lengthUsername != 0 && lengthPassword > 5  && lengthKonfirmasiPass !=0){
        setIsBtnDisabled(false)
    }else{
        setIsBtnDisabled(true)
    }
  }, [lengthPassword, lengthNama, lengthKonfirmasiPass, lengthUsername])

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
            }]}>Sign up</Text>
            <Gap height={6} />
            <Text style={[GlobalStyles.customText, {
                fontFamily: Fonts.Regular,
                color: Colors.Grey,
                fontSize: responsiveFonts(13),
            }]}>
                Silahkan sign up untuk membuat akun lifetime
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
                onChangeText={(value: string) => setForm('username', value)}
            />
            <Gap height={25} />
            <InputAuth
                title='Nama'
                placeholder='Masukan nama...'
                value={form.nama}
                onChangeText={(value: string) => setForm('nama', value)}
            />
            <Gap height={25} />
            <InputAuth
                title='Password'
                placeholder='Masukan password...'
                type='password'
                lengthPassword={lengthPassword}
                value={form.password}
                onChangeText={(value: string) => setForm('password', value)}
            />
            <Gap height={25} />
            <InputAuth
                title='Konfirmasi Password'
                placeholder='Konfirmasi password...'
                type='konfirmasi-password'
                value={form.konfirmasi_password}
                onChangeText={(value: string) => setForm('konfirmasi_password', value)}
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
            }]}>Sudah punya akun? </Text>
                <TouchableOpacity onPress={handleSignupPage}>
                    <Text style={[GlobalStyles.customText, {
                fontFamily: Fonts.Regular,
                color: Colors.DarkBlue,
                fontSize: responsiveFonts(13),
            }]}>Sign in</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                marginBottom: 20,
                flex: 1,
                justifyContent: 'flex-end',
            }}>
                <BtnAuth
                    title='Signup Sekarang'
                    onPress={handleSignup}
                    disabled={isBtnDisabled}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: `${Colors.White}`,
    }
})