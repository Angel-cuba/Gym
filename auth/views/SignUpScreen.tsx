import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { BigText } from '../../components/StyledText';
import CustomInput from '../../components/StyledInput';
import CustomButton from '../../components/StyledButton';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignUpScreen({ navigation }: any) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const auth = getAuth();
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      console.warn('Passwords do not match');
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('HomeNavigator', { screen: 'Authorization', params: { user } });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <BigText big bold color="regiter">
        Register
      </BigText>
      <View style={styles.inputsView}>
        <CustomInput
          label="Name"
          onChangeText={setName}
          value={name}
          placeholder="Write your name"
          color="register"
        />
        <CustomInput
          label="Email"
          onChangeText={setEmail}
          value={email}
          placeholder="Give an email"
          color="register"
        />
        <CustomInput
          label="Password"
          onChangeText={setPassword}
          value={password}
          placeholder="Write your password"
          color="register"
        />
        <CustomInput
          label="Confirm password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Repeat password"
          color="register"
        />
        <Pressable style={styles.signin} onPress={goToLogin}>
          <Text style={{ color: '#2c0000' }}>
            Already have an account?
            <Text style={{ color: '#ff0000', fontWeight: '600' }}> Login </Text>
          </Text>
        </Pressable>
        <CustomButton
          label="Register"
          backgroundColor="#3e3e3e"
          fontSize={20}
          radius={10}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0079a535',
  },
  inputsView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 100,
  },
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  signin: {
    marginTop: 20,
    marginBottom: 35,
  },
});
