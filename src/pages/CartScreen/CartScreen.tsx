import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../../components/Header/Header'

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 10}}>
        <Header
          title='Keranjang'
        />
      </View>

      <View>
        
      </View>

      <View>

      </View>
    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 10
  }
})