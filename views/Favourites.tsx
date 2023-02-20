import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { StyledText } from '../components/StyledText';
import { View } from '../components/Themed';
import { app } from '../firebase';
import { fetchingData, optionsUrl, urlById } from '../utils/queries';
import LottieView from 'lottie-react-native';
import Loading from '../components/Loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function FavouritesScreen({ navigation }: any) {
  const [favouritesSelected, setFavouritesSelected] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);

  const favourites = favouritesSelected?.map((doc: any) => doc.selected);

  //!Get user id from firebase
  const user = getAuth().currentUser;
  const userId = user?.uid;
  const db = getFirestore(app);

  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    //? Get all documents from a collection
    const dataFromFirebase = (await getDocs(collection(db, 'favourites'))).docs.map((doc) =>
      doc.data()
    );
    //? Filter by user id
    const filteredFavourites = dataFromFirebase.filter((doc: any) => doc.userUid === userId);
    setFavouritesSelected(filteredFavourites);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {!favourites ? (
        <View style={{ alignItems: 'center', height: screenHeight }}>
          <StyledText
            big
            bold
            color="part"
            style={{
              marginTop: 50,
              marginBottom: 20,
            }}
          >
            {' '}
            Nothing to show here
          </StyledText>
          <View
            style={{
              width: screenWidth - 100,
            }}
          >
            <StyledText
              style={{
                textAlign: 'center',
              }}
            >
              Check some exercises and if you like it, give it a like and it will appear here!
            </StyledText>
          </View>
          <LottieView
            source={require('../assets/lottie/loading-paperplane.json')}
            autoPlay
            loop
            style={{ width: 200, height: 300, aspectRatio: 1 }}
            duration={3000}
          />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={[{ backgroundColor: '#d3d3d3' }]}>
          <View style={{ alignItems: 'center', paddingTop: 10 }}>
            {favourites?.map((id: any) => (
              <FavouriteItem key={id} id={id} />
            ))}
          </View>
        </ScrollView>
      )}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 50,
          height: 50,
          backgroundColor: '#003d7d',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}
        onPress={() => navigation.navigate('Home')}
      >
        <MaterialCommunityIcons name="plus" color="#fff" size={30} />
      </TouchableOpacity>
    </>
  );
}

const FavouriteItem = ({ id }: any) => {
  const [favourite, setFavourite] = React.useState<any>([]);
  React.useEffect(() => {
    getFavorite();
  }, []);
  const getFavorite = async () => {
    fetchingData(`${urlById}${id}`, optionsUrl)
      .then((data) => {
        setFavourite(data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  return (
    <View>
      <Card item={favourite} />
    </View>
  );
};

const Card = ({ item }: any) => {
  return (
    <View
      style={{
        width: screenWidth - 40,
        backgroundColor: '#8fbff316',
        borderRadius: 10,
        marginVertical: 10,
      }}
    >
      <Image source={{ uri: item.gifUrl }} style={{ width: 150, height: 150 }} />
      <StyledText big color="">
        {' '}
        {item.name}{' '}
      </StyledText>
    </View>
  );
};
