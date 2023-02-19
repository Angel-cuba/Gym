import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useId } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import CustomInput from '../components/StyledInput';
import CustomButton from '../components/StyledButton';
import ImageView from '../components/profile/ImageView';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Deafault image from cloudinary
const imageUrlFromCloudinary =
  'https://res.cloudinary.com/dqaerysgb/image/upload/v1648218398/istockphoto-1132926013-612x612_t1xwec.jpg';

export default function ProfileScreen() {
  const [user, setUser] = React.useState<any>(null);
  const [name, setName] = React.useState('');
  const [photo, setPhoto] = React.useState('');
  const [openPhoto, setOpen] = React.useState(false);
  const loggedUser = getAuth().currentUser;

  React.useEffect(() => {
    setUser(loggedUser);
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const handleUpdate = async () => {
    try {
      if (user) {
        await updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log('update success');
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handle = async () => {
    setOpen(!openPhoto);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        {/* <Text style={{ backgroundColor: 'red', color: 'black' }}>
        ultimo login --{user?.lastLoginAt}
      </Text> */}
        <TouchableOpacity onPress={handle}>
           <View
          style={{
            position: 'absolute',
            top: user?.photoURL ? 10 : 25,
            left: user?.photoURL ? 4 : 43,
            zIndex: 1,
          }}
        >
          <MaterialCommunityIcons
            name={user?.photoURL ? 'camera-flip-outline' : 'camera-plus-outline'}
            size={user?.photoURL ? 25 : 30}
            color="#250000"
          />
        </View>
        <ImageView
          placeHolderImageView={imageUrlFromCloudinary}
          selectedImage={user?.photoURL}
          width={100}
          height={100}
          radius={50}
        />
        </TouchableOpacity>
        <Text style={styles.email}>{user?.email}</Text>
      </View>
      <CustomInput
        label={user?.displayName ? `${user?.displayName}` : 'Give a name or nickname'}
        value={name}
        placeholder={user?.displayName ? 'Give new name...' : 'Enter your name'}
        onChangeText={(text) => setName(text)}
      />
      {openPhoto && (
        <>
          <ImageView
            placeHolderImageView={imageUrlFromCloudinary}
            selectedImage={photo}
            width={200}
            height={200}
            radius={10}
          />
          <CustomButton
            label={user?.photoURL ? 'Update image' : 'Select an image'}
            onPress={pickImageAsync}
            backgroundColor="#343434"
            radius={10}
            margin={12}
          />
        </>
      )}
      <CustomButton label="Update user" onPress={handleUpdate} radius={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
    width: '90%',
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});
