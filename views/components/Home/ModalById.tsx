import { View, Text, SafeAreaView, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { BigText, StyledText } from '../../../components/StyledText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Firebase
import { getFirestore, collection, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import { app } from '../../../firebase';
import { getAuth } from 'firebase/auth';

export default function ModalById({ route, navigation }: any) {
  const { id, item } = route.params;
  const width = Math.round(Dimensions.get('window').width);
  const height = Math.round(Dimensions.get('window').height);

  //Get user id from firebase
  const user = getAuth().currentUser;
  const userId = user?.uid;

  const addItemToWishList = () => {
    console.log('add to wish list', id);
  };

  //! Firebase config to add to wish list
  const db = getFirestore(app);

  const addWishList = async () => {
    try {
      //? Add a new document with a generated id.
      // const docRef = await addDoc(collection(db, 'favourites'), {
      //   userUid: userId,
      //   selected: id
      // });
      // console.log('Document written with ID: ', docRef.id);
      
      //? Get all documents from a collection
      const dataFromFirebase =  (await getDocs(collection(db, 'favourites'))).docs.map((doc) => doc.data());
      console.log('data from firebase', dataFromFirebase);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  return (
    <SafeAreaView
      style={{
        width,
        height,
        backgroundColor: '#002f4b71',
      }}
    >
       <View   
              style={{
                position: 'absolute',
                bottom: height - 65,
                right: 20,
                zIndex: 100,
                backgroundColor: '#00000026',
                borderRadius: 50,
                padding: 10,
              }}>
            <MaterialCommunityIcons
              name="arrow-collapse"
              size={24}
              color="#000000"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View   
              style={{
                position: 'absolute',
                bottom: height - 65,
                left: 20,
                zIndex: 100,
                backgroundColor: '#ff000025',
                borderRadius: 50,
                padding: 10,
              }}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={24}
              color="#000000"
              onPress={() => addWishList()}
            />
          </View>
      <ScrollView>
        <Image
          source={{ uri: item.gifUrl }}
          style={{ width, height: 400, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
        />
         
        <View
          style={{
            alignSelf: 'center',
            marginVertical: 30,
          }}
        >
          <BigText bold>
            {item.name
              .split(' ')
              .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')}
          </BigText>
        </View>
        <View style={styles.container}>
          <StyledText
            style={{
              textAlign: 'center',
            }}
            bold
            color="id"
          >
            If you are looking to build muscle, you should be doing compound exercises. These are
            exercises that work multiple muscle groups at once. Squats, deadlifts, bench press, and
            overhead press are all examples of compound exercises. These exercises are great for
            building muscle and strength.
          </StyledText>
          {/* <Text>{item.target}</Text>

          <Text>{item.equipment}</Text>

          <Text>{id}</Text> */}
        </View>
        <View
          style={{
            marginVertical: 30,
            backgroundColor: '#ffffff1f',
            marginHorizontal: 50,
            padding: 5,
            borderRadius: 10,
          }}
        >
          <StyledText
            style={{
              marginVertical: 10,
              backgroundColor: '#0000007qf',
              textAlign: 'center',
              padding: 10,
            }}
            bold
            color=""
            big
          >
            Let's work the {item.target}
          </StyledText>
          <StyledText
            style={{
              marginLeft: 10,
            }}
            bold
            color="id"
          >
          {(item.equipment).split(',').map((s: any) => s.charAt(0).toUpperCase() + s.substring(1)).join(', ') } as equipment to be used for this exercise
          </StyledText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff1f',
    marginHorizontal: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
});
