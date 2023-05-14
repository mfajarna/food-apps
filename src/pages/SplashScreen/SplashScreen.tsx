import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Ic_background } from '../../assets/icon/icon'
import { Colors } from '../../utils/colors/Colors'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../utils/routes/Route'
import { getUser } from '../../helpers/AsyncstoreServices'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../utils/redux/action/globalAction'

type Props = NativeStackScreenProps<RootStackParamsList, "SplashScreen">

const SplashScreen = ({navigation}: Props) => {

  const dispatch = useDispatch();

  const getIsAuth = async () => {
    const user = await getUser();
    const isAuth: boolean = user.isAuth;

    if(isAuth){
      navigation.replace('DashboardScreen');
    }else{
      navigation.replace('AuthScreen');
    }

    dispatch(setLoading(false));
    return Promise.resolve(user);

  }
  useEffect(() => {
      dispatch(setLoading(true))
      setTimeout(() => {
        getIsAuth();
      }, 3000)
  }, [])

  return (
    <View style={styles.container}>
        <Ic_background />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: `${Colors.Primary}`,
    justifyContent: 'center',
    alignItems: 'center'
  }
})