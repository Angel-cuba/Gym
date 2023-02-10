import { View, Text, StyleSheet, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import { BigText } from '../../components/StyledText';
import CustomInput from '../../components/StyledInput';
import CustomButton from '../../components/StyledButton';
import Separator from '../../components/Separator';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const goToSignUp = () => {
    navigation.navigate('Register');
  };

  const handleSubmit = () => {
    console.log('submit');
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
            />
            <CustomInput
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              color="login"
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
