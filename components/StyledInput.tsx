import { StyleSheet, View, Text, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';
import { StyledText } from './StyledText';
import { FontAwesome } from '@expo/vector-icons';

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
};

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  autoCapitalize,
  label,
  color,
  secureTextEntry,
  right,
}: CustomInputProps) => {
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
      />
      {/* <Pressable>
        <FontAwesome
          name={passwordVisible ? 'eye' : 'eye-slash'}
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      </Pressable> */}
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
