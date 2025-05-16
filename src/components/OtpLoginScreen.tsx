import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CustomTextInput from '../common/CustomInput';
import Colors from '../common/Colors';
import GradientButton from '../common/GradientButton';
import { useNavigation } from '@react-navigation/native';
import bgImage from '../assets/background.png';
import LeftArrow from '../assets/left_arrow.svg'; // SVG back icon
import { Fonts } from '../common/fonts';

const OtpLoginScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleProceed = () => {
    navigation.navigate('OTPVerification');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex}>
      <ImageBackground source={bgImage} style={styles.imageBackground} resizeMode="cover">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <LeftArrow width={8} height={18} />
            </TouchableOpacity>

            <View style={styles.content}>
              <Text style={styles.title}>Login With Mail OTP !!!</Text>
              <Text style={styles.subtitle}>Welcome back you’ve{'\n'}been missed!</Text>

              <CustomTextInput
                placeholder="Enter your registered mail id"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <GradientButton title="PROCEED" onPress={handleProceed} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    marginBottom: 20,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 8,
    fontFamily:Fonts.Bold
  },
  subtitle: {
    fontSize: 18,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 32,
    fontFamily:Fonts.Medium
  },
});

export default OtpLoginScreen;
