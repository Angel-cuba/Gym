import { View, Text, Pressable, useColorScheme } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { useTheme } from '../../context/context';

export default function Toggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  };
  return (
    <Pressable
      onPress={toggleTheme}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <View
        style={{
          width: 50,
          height: 40,
          marginLeft: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FontAwesome
          name={theme === 'dark' ? 'moon-o' : 'sun-o'}
          size={25}
          color={theme === 'dark' ? '#a0a0a0' : '#ffe100'}
        />
      </View>
    </Pressable>
  );
}
