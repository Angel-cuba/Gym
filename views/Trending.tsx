import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { RootTabScreenProps } from '../types';

export default function TrendingScreen({ route}: RootTabScreenProps<'Trending'>) {
  return (
    <View style={styles.container}>
      <Text>TrendingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});