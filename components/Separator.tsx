import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Separator() {
  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '96%',
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginVertical: 30,
  },
})