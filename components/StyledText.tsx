import { View, Text } from 'react-native';
import React from 'react';

type StyledTextProps = {
  children: React.ReactNode;
  style?: any;
  small?: boolean;
  big?: boolean;
  bold?: boolean;
  color?: string;
};

export const StyledText = ({
  children,
  style,
  small,
  big,
  bold,
  color,
  ...props
}: StyledTextProps) => {
  return (
    <Text
      style={[
        style,
        small && { fontSize: 12 },
        big && { fontSize: 20 },
        bold && { fontWeight: 'bold' },
        color === 'part'
          ? { color: '#000' }
          : color === 'id'
          ? { color: '#ffffff' }
          : { color: 'grey' },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const BigText = ({ children, big, bold, color }: StyledTextProps) => {
  return (
    <Text
      style={[
        big ? { fontSize: 40 } : { fontSize: 20 },
        bold && { fontWeight: 'bold' },
        color === 'login' ? { color: '#ff0000' } : { color: '#0c017d' },
      ]}
    >
      {children}
    </Text>
  );
};
