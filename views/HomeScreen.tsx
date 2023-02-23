import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { ColorSchemeName, Dimensions, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { StyledText } from '../components/StyledText';
import { View } from '../components/Themed';
import { app } from '../firebase';
import { RootTabScreenProps } from '../types';
import { BodyPart } from '../utils/types';
import BodyPartItem from './components/Home/BodyPartItem';
import ButtonParts from './components/Home/ButtonParts';

// Url and options for the fetch request
import { fetchingData, optionsUrl, urlBodyParts, urlBodyPartsToFetch } from '../utils/queries';
import Loading from '../components/Loading';
import { useTheme } from '../context/context';
import Colors from '../constants/Colors';

export default function HomeScreen() {
  const { theme } = useTheme();

  const auth = getAuth(app);
  const goOut = () => {
    signOut(auth);
  };

  const [bodyPartsData, setBodyPartsData] = React.useState<any>();
  const [bodyParts, setBodyParts] = React.useState<any>('back');
  const [gymData, setGymData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  //TODO: add error state
  const [error, setError] = React.useState(false);

  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  React.useEffect(() => {
    fetchingData(urlBodyParts, optionsUrl).then((data) => {
      setBodyPartsData(data);
      setLoading(false);
    });
    fetchingData(`${urlBodyPartsToFetch}${bodyParts}`, optionsUrl).then((data) => {
      setGymData(data);
    });
  }, [bodyParts]);

  if (loading) return <Loading />;

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    bodypart: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'light' ? Colors.dark.bgList : Colors.light.bgList,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 5,
    },
    mainBg: {
      backgroundColor: theme === 'light' ? Colors.dark.bgList : Colors.light.bgList,
    },
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Button onPress={goOut}>Log out</Button>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <FlatList
          data={bodyPartsData}
          renderItem={({ item }) => (
            <ButtonParts item={item} bodyPart={bodyParts} setBodyPart={setBodyParts} />
          )}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.mainBg}
        />
      </View>
      <StyledText color="part" bold style={{margin: 10}}>
        {gymData ? `We got ${gymData.length} differents exercises for you!` : 'No exercises found'}
      </StyledText>
      <View
 
      >
        <View style={[styles.bodypart, { width: screenWidth, height: screenHeight }]}>
          {/* -200 */}
          <FlatList
            data={gymData}
            renderItem={({ item }) => <BodyPartItem item={item as BodyPart} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}
