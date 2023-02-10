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
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderTopColor: 'rgba(78, 77, 77, 0.05)',
    borderRightColor: 'rgba(54, 47, 47, 0.05)',
    marginVertical: 30,
  },
})