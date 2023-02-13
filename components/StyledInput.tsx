import { StyleSheet, View, Text, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';
import { StyledText } from './StyledText';

type CustomInputProps = {
  type?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  label: string;
  color?: string;
  secureTextEntry?: boolean;
  right?: boolean;
  underlineColor?: string;
};

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  autoCapitalize,
  label,
  color,
  secureTextEntry,
  right}: CustomInputProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(true);
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
        autoCapitalize={autoCapitalize || 'none'}
        cursorColor="#ff0000"
        secureTextEntry={secureTextEntry && passwordVisible}
        right={right &&
          <TextInput.Icon
            icon={passwordVisible ? 'eye' : 'eye-off'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
        underlineColor='transparent'
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    margin: 12,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    color: '#d3d3d3bd',
    fontSize: 20,
    underlineColor: 'transparent',
  },
});
