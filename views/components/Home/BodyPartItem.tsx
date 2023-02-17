import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { StyledText } from '../../../components/StyledText';

export default function BodyPartItem({ item }: any) {
  const goToBodyPart = (id: any) => {
    console.log(id, item);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={() => goToBodyPart(item.id)}>
      <View
        style={{
          paddingHorizontal: 5,
          shadowOpacity: 0.03,
        }}
      >
        <Image
          source={{ uri: item.gifUrl }}
          style={{ width: 100, height: 100, borderRadius: 5, alignSelf: 'center' }}
        />
        <StyledText
          bold
          color="part"
          style={{
            width: '100%',
            textAlign: 'right',
            marginTop: 5,
          }}
        >
          {item.name.toUpperCase()}
        </StyledText>
        <StyledText
          style={{
            width: '100%',
            marginLeft: 15,
          }}
        >
          {item.target
            .split(' ')
            .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#rgba(25, 2, 0, 0.021)',
    margin: 3,
    width: '48%',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
