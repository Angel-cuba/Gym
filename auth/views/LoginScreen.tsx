import { View, Text, StyleSheet, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import { BigText } from '../../components/StyledText';
import CustomInput from '../../components/StyledInput';
import CustomButton from '../../components/StyledButton';
import Separator from '../../components/Separator';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const auth = getAuth(app);

  const goToSignUp = () => {
    navigation.navigate('Register');
  };

  const handleSubmit = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const { email, uid } = user;
        navigation.navigate('Authorization', { screen: 'Home', params: { email, uid } });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    console.log('submit');
    console.log(email, password);
  };

  const imageUrlFromCloudinary =
    'https://res.cloudinary.com/dqaerysgb/image/upload/v1673656213/Random/main_bg_mab3uj.jpg';

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageUrlFromCloudinary }}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.main}>
          <BigText big bold color="login">
            Welcome
          </BigText>
          <View style={styles.inputsView}>
            <CustomInput
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              color="login"
              right={false}
            />
            <CustomInput
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              color="login"
              right={true}
              secureTextEntry
            />
          </View>
          <Pressable style={styles.signup} onPress={goToSignUp}>
            <Text style={{ color: '#ffffff' }}>
              Don't have an account?
              <Text style={{ color: '#ff0000' }}> Sign Up</Text>
            </Text>
          </Pressable>

          <CustomButton
            label="Login"
            backgroundColor="#ff0000"
            radius={10}
            fontSize={20}
            onPress={handleSubmit}
          />

          <Separator />
        </View>
      </ImageBackground>
    </View>

    // {/* </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  inputsView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 150,
  },
  signup: {
    marginTop: 10,
    marginBottom: 35,
  },
});
