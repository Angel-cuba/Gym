import { TextInput, StyleSheet } from 'react-native';
import React from 'react';

type CustomInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

const CustomInput = ({ placeholder, value, onChangeText, ...props }: CustomInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    margin: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
    borderTopColor: 'rgba(0,0,0,0.05)',
    borderRightColor: 'rgba(0,0,0,0.05)',
    borderRadius: 10,
    padding: 10,
    color: 'black',
  },
});
