import { TextInput, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { StyledText } from './StyledText';

type CustomInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  label: string;
};

const CustomInput = ({ placeholder, value, onChangeText, label }: CustomInputProps) => {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <StyledText
        big
        bold
        style={{
          color: 'grey',
        }}
      >
        {label}
      </StyledText>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
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
