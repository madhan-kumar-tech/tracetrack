import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CustomTextInput from '../common/CustomInput';
import Colors from '../common/Colors';
import GradientButton from '../common/GradientButton';

const OtpLoginScreen = () => {
  const [email, setEmail] = useState('');

  const handleProceed = () => {
    console.log('Email for OTP:', email);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Login With Mail OTP !!!</Text>
          <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>
          <CustomTextInput
            placeholder="Enter your registered mail id"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        
          <GradientButton
            title="Proceed"
            onPress={() => console.log('Login pressed')}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
    marginVertical: 24,
    width:160,
    alignSelf:'center'
  },
});

export default OtpLoginScreen;
