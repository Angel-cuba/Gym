import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../../components/StyledButton'

export default function ButtonParts({ item, bodyPart, setBodyPart }: any) {
  const onPress = (parts: any) => {
    setBodyPart(parts);
  };
  return <CustomButton label={item} onPress={() => onPress(item)} radius={10} margin={10} 
  width='auto' padding={20} backgroundColor={
    item === bodyPart ? 'rgba(0, 55, 81, 0.674)' : '#34343493'
  }/>;
}