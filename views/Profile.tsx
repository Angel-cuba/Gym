import { View, Text, StyleSheet } from 'react-native';
import React, { useId } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import CustomInput from '../components/StyledInput';
import CustomButton from '../components/StyledButton';


export default function ProfileScreen() {
  const [user, setUser] = React.useState<any>(null);
  const auth = getAuth();
  // console.log('user', user);

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [photo, setPhoto] = React.useState('');

  React.useEffect(() => {
    const authUser = getAuth()?.currentUser;
    if (authUser) {
      setUser(authUser as any);
      console.log('authUser', authUser.uid);
    }
  }, []);

  const handleText = (text: string) => {
    console.log(text);
    //auth.updateCurrentUser({})

  };

  const handleUpdate = () => {
    console.log('update', name, phone, photo);
    try {
      if(user) {
        updateProfile(user, {
      displayName: name,
      photoURL: photo,
      // phoneNumber: phone,
    }).then(() => {
      console.log('update success');
    }
    ).catch((error) => {
      console.log('error', error);
    }
    ); 
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <CustomInput
        label={`${user?.email}`}
        value={`${user?.email}`}
        placeholder={`${user?.email}`}
        onChangeText={handleText}
      /> */}
      <Text>{user.email}</Text>
      <CustomInput
        label={`${user?.displayName}`}
        value={name}
        placeholder={`${user?.displayName}`}
        onChangeText={(text) => setName(text)}
      />
      <CustomInput
        label={`${user?.phoneNumber}`}
        value={phone}
        placeholder={`${user?.phoneNumber}`}
        onChangeText={(text) => setPhone(text)}
      />
      <CustomInput
        label={`${user?.photoURL}`}
        value={photo}
        placeholder={`${user?.photoURL}`}
        onChangeText={(text) => setPhoto(text)}
      />
      <Text style={{ backgroundColor: 'red', color: 'black' }}>creado --{user?.createdAt}</Text>
      <Text style={{ backgroundColor: 'red', color: 'black' }}>ultimo login --{user?.lastLoginAt}</Text>  
      <CustomButton label='Update user' onPress={handleUpdate} radius={10}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});