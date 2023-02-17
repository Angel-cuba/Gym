import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../../components/StyledButton'

export default function ButtonParts({ item }: any) {
  const onPress = (parts: any) => {
    console.log('button pressed', parts);

  };
  return <CustomButton label={item} onPress={() => onPress(item)} radius={10} margin={10} 
  width='auto' padding={20} backgroundColor='#343434'/>;
}