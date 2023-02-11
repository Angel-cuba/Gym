import { StyleSheet } from 'react-native';
import { StyledText } from '../components/StyledText';
import { View } from '../components/Themed';

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <StyledText big bold> Favourites </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
