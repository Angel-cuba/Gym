import { TextInput, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { StyledText } from './StyledText';

type CustomInputProps = {
  type?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  label: string;
  color?: string;
};

const CustomInput = ({ placeholder, value, onChangeText, label, color }: CustomInputProps) => {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <StyledText
        big
        bold
        style={{
          color: color === 'login' ? '#ff0000' : color === 'register' ? '#0c017d' : '#ffffff',
        }}
      >
        {label}
      </StyledText>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        cursorColor="#ff0000"
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
    borderColor: 'rgba(153, 153, 153, 0.5)',
    borderRadius: 10,
    padding: 8,
    color: '#ffffff',
    fontSize: 20,
  },
});
