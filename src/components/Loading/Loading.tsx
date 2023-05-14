import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator} from 'react-native-paper';
import { Colors } from '../../utils/colors/Colors';
import { Fonts } from '../../utils/fonts/Fonts';

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ActivityIndicator size="large" color={Colors.Primary} />
          <Text style={styles.loading}>Loading ...</Text>
        </View>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    loading: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        marginTop: 12,
        color: 'white',
        textAlign: 'center'
    },
    wrapper:{
      width: 150,
      paddingVertical: 10,
      borderRadius: 10
    }
})