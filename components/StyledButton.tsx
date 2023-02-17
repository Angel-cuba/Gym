import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

type CustomButtonProps = {
  label: string;
  onPress: () => void;
  radius?: number;
  fontSize?: number;
  backgroundColor?: string;
  width?: string;
  margin?: number;
  padding?: number;
};

const CustomButton = ({ label, onPress, radius, fontSize, backgroundColor, margin, width, padding }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { borderRadius: radius, backgroundColor: backgroundColor || '#15AAF5',
          margin: margin || 0,
          width: width || '90%',
          padding: padding || 0,
           },
      ]}
    >
      <Text style={[styles.textField, { fontSize: fontSize }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    // width: '90%',
    paddingVertical: 15,
    elevation: 6
  },
  textField: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
