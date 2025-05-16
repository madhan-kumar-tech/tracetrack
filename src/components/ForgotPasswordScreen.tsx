import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ForgotPasswordSVG from '../assets/forget_password.svg';
import backgroundImg from '../assets/background.png';
import GradientButton from '../common/GradientButton';
import LeftArrow from '../assets/left_arrow.svg';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Colors from '../common/Colors';
import { Fonts } from '../common/fonts';

type RootStackParamList = {
  ForgotPassword: undefined;
  OTPVerification: { isFromForgotPassword: boolean };
};
type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={backgroundImg}
        style={styles.background}
        resizeMode="cover">
        <ScrollView contentContainerStyle={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow width="8" height={18} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Forgot Password</Text>
          </View>

          {/* SVG Illustration */}
          <View style={styles.imageWrapper}>
            <ForgotPasswordSVG width="300" height={292} />
          </View>

          {/* Title and Description */}
          <View style={styles.textSection}>
            <Text style={styles.title}>Forgot{'\n'}Password?</Text>
            <Text style={styles.description}>
              Don’t worry! It happens. Please enter the Email ID. We will send
              the OTP to this Email ID.
            </Text>
          </View>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your registered mail id"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />

          {/* Gradient Button */}
          <GradientButton title="PROCEED" onPress={() => {
            navigation.navigate('OTPVerification',{isFromForgotPassword: true})
          }} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 20,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    color: Colors.primary,
    textAlign: 'center',
    marginRight: 24,
    fontFamily:Fonts.Bold
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textSection: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: Colors.black,
    lineHeight: 30,
    fontFamily: Fonts.Bold
  },
  description: {
    fontSize: 18,
    color: Colors.darkGrey,
    marginTop: 10,
    fontFamily: Fonts.Medium
  },
  input: {
    backgroundColor: Colors.accent,
    padding: 14,
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 20,
  },
});
