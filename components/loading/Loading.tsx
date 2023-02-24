import { View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'


export default function Loading() {
const animation = '../../assets/lottie/bloks.json';
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff11',
    }}>
      <LottieView
      source={require(animation)}
      autoPlay
      loop
      style={{
        width: 500,
        height: 200,
        aspectRatio: 1,
      }}

      />
    </View>
  )
}