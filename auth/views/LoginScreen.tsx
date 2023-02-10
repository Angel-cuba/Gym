import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import React from 'react';
import { BigText } from '../../components/StyledText';
import CustomInput from '../../components/StyledInput';
import CustomButton from '../../components/StyledButton';
import Separator from '../../components/Separator';

export default function LoginScreen({ navigation}: any) {
 const goToSignUp = () => {
    navigation.navigate('Register')
  }



  return (
    <SafeAreaView style={styles.container}>
      <BigText big bold color="login">
        LoginScreen
      </BigText>
      <View style={styles.inputsView}>
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          value=""
          onChangeText={(text) => {
            console.log(text);
          }}
        />
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          value=""
          onChangeText={(text) => {
            console.log(text);
          }}
        />
      </View>
      <Pressable
      style={styles.signup}
        onPress={goToSignUp}
      >
        <Text>
          Don't have an account?
          <Text style={{ color: '#ff0000' }}> Sign Up</Text>
        </Text>
      </Pressable>

      <CustomButton
        label="Login"
        backgroundColor="#ff0000"
        radius={10}
        fontSize={20}
        onPress={() => {
          console.log('Login');
        }}
      />

      <Separator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
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
  }
});
