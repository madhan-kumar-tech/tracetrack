import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import GradientButton from '../common/GradientButton';
import bgImage from '../assets/background.png';
import OtpIllustration from '../assets/otp_illustration.svg';
import Colors from '../common/Colors';
import AccountSuccessModal from '../common/AccountSucessModal';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import LeftArrow from '../assets/left_arrow.svg';
import type {RootStackParamList} from '../../types';
import {Fonts} from '../common/fonts';

type OtpVerificationRouteProp = RouteProp<
  RootStackParamList,
  'OTPVerification'
>;

const OtpVerificationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<OtpVerificationRouteProp>();
  const {isFromForgotPassword} = route.params ?? {};

  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(120);
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const inputs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text && index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleResend = () => {
    setTimer(120);
    setOtp(['', '', '', '']);
    setErrorMessage('');
    console.log('Resend OTP clicked');
    // trigger resend logic here
  };

  const handleSubmit = () => {
    const isComplete = otp.every(digit => digit !== '');
    if (!isComplete) {
      setErrorMessage('Kindly enter the correct OTP.');
      return;
    }
    setErrorMessage('');
    console.log('OTP Submitted:', otp.join(''));
    if (isFromForgotPassword) {
      navigation.navigate('SetNewPassword');
    } else {
      setIsVisible(true);
    } // trigger submit logic here
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrow width="8" height={18} style={styles.leftArrowIcon} />
          </TouchableOpacity>
          <Text style={styles.header}>OTP Verification</Text>
        </View>
        <ImageBackground source={bgImage} style={styles.container}>
          <View style={styles.illustrationBox}>
            <OtpIllustration
              width={258} // or use a value based on your layout
              height={307}
              style={styles.illustrationImage}
            />
          </View>

          <Text style={styles.title}>OTP VERIFICATION</Text>
          <Text style={styles.subtitle}>
            Enter the OTP sent to your mail id to register your account
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputs.current[index] = ref)}
                value={digit}
                onChangeText={text => handleChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                style={[
                  styles.otpInput,
                  focusedIndex === index && styles.otpInputFocused, // Apply focus style conditionally
                ]}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
              />
            ))}
          </View>

          {errorMessage !== '' && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}

          <Text style={styles.timer}>
            00:{timer.toString().padStart(2, '0')} Sec
          </Text>

          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendText}>Don’t receive code? Re-send</Text>
          </TouchableOpacity>

          <View style={{marginTop: 20}}>
            <GradientButton title="SUBMIT" onPress={handleSubmit} />
          </View>
        </ImageBackground>
      </View>
      {!isFromForgotPassword && (
        <AccountSuccessModal
          visible={isVisible}
          onClose={() => setIsVisible(false)}
          onProceed={() => {
            setIsVisible(false);
            navigation.navigate('AddVehicle');
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    color: Colors.primary,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
    fontFamily: Fonts.Bold,
  },
  illustrationBox: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
    color: Colors.black,
    fontFamily: Fonts.Bold,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.black,
    fontFamily: Fonts.Medium,
    alignSelf: 'center',
    width: 300,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: 10,
    width: 58,
    height: 58,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: Colors.accent,
  },
  errorText: {
    textAlign: 'right',
    color: Colors.error,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: Fonts.Regular,
    marginRight: 32,
  },
  timer: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: Colors.black,
    fontFamily: Fonts.Regular,
  },
  resendText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: Colors.primary,
    fontFamily: Fonts.Regular,
  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 14,
  },
  leftArrowIcon: {
    marginHorizontal: 16,
  },
  otpInputFocused:{
    borderColor: Colors.primary,
    borderWidth:1
  }
});

export default OtpVerificationScreen;
