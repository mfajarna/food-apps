import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'

type GapProps = {
    width?: number,
    height?: number
}

const Gap = ({width, height}: GapProps) => {
  return (
    <View style={{
        width: width,
        height: height
    }}>
    </View>
  )
}

export default Gap

const styles = StyleSheet.create({})