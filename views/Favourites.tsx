import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { StyledText } from '../components/StyledText';
import { View } from '../components/Themed';
import { app } from '../firebase';
import { fetchingData, optionsUrl, urlById } from '../utils/queries';


const screenWidth = Math.round(Dimensions.get('window').width);

export default function FavouritesScreen() {
  const [favouritesSelected, setFavouritesSelected] = React.useState<any>([]);
  //!Get user id from firebase
  const user = getAuth().currentUser;
  const userId = user?.uid;
  const db = getFirestore(app);

  const getData = async () => {
    //? Get all documents from a collection
    const dataFromFirebase = (await getDocs(collection(db, 'favourites'))).docs.map((doc) =>
      doc.data()
    );
    //? Filter by user id
    const filteredFavourites = dataFromFirebase.filter((doc: any) => doc.userUid === userId);
    // const favourites = filteredFavourites.map((doc: any) => doc.selected);
    // console.log('data from firebase en favourites', favourites);
    console.log('cantidad de docs', filteredFavourites.length);
    console.log('cantidad de docs', filteredFavourites);
    setFavouritesSelected(filteredFavourites[0]);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <StyledText big bold>
        Favourites
      </StyledText>
      {!favouritesSelected.selected ? (
        <StyledText> No favourites </StyledText>
      ) : (
        favouritesSelected.selected.map((id: any) => <FavouriteItem key={id} id={id} />)
      )}
    </View>
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
      <Card item={favourite}/>
    </View>
  );
};

const Card = ({ item }: any) => {
  return (
    <View style={{
      width: screenWidth - 40,
      backgroundColor: '#0057b4c7',
      borderRadius: 10,
      marginVertical: 10,

    }}>
      <Image source={{ uri: item.gifUrl }} style={{ width: 150, height: 150 }} />
      <StyledText big color=''> {item.name} </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
