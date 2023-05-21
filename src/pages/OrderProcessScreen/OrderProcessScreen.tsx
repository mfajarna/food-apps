import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import Header from '../../components/Header/Header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../utils/routes/Route'


type Props = NativeStackScreenProps<RootStackParamsList, "OrderProcessScreen">

const OrderProcessScreen = ({route, navigation}: Props) => {

  const{redirect_url} = route.params;

  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <Header
        title='Done'
        type='dashboard'
      />
      <WebView source={{uri: `${redirect_url}`}} style={{flex: 1}}></WebView>
    </SafeAreaView>
  )
}

export default OrderProcessScreen

const styles = StyleSheet.create({})