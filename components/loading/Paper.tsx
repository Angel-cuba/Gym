import { View, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

export default function Paper() {
  const animation = '../../assets/lottie/loading.json';

  return (
    <LottieView
      source={require(animation)}
      autoPlay
      loop
      style={{
        width: 500,
        height: 300,
        aspectRatio: 1,
        marginTop: 50,
      }}
    />
  );
}
