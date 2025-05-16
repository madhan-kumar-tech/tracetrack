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

const ForgotPasswordScreen = ({navigation}) => {
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
    backgroundColor: '#fff',
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
    fontWeight: 'bold',
    color: '#6D0F49',
    textAlign: 'center',
    marginRight: 24, // to balance the back arrow space
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textSection: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    lineHeight: 30,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#F1EDF7',
    padding: 14,
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 20,
  },
});
