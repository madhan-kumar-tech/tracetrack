import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import GradientButton from '../common/GradientButton';
import bgImage from '../assets/background.png';
import OtpIllustration from '../assets/otp_illustration.svg';
import Colors from '../common/Colors';
import AccountSuccessModal from '../common/AccountSucessModal';
import {useNavigation, useRoute} from '@react-navigation/native';
import LeftArrow from '../assets/left_arrow.svg';

const OtpVerificationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {isFromForgotPassword} = route.params || false;

  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(120);
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const inputs = useRef([]);

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
      <ImageBackground source={bgImage} style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerIcon}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow width="8" height={18} />
            </TouchableOpacity>
            <Text style={styles.header}>OTP Verification</Text>
          </View>

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
                style={styles.otpInput}
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
      </ImageBackground>
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
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
    color: Colors.black,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.black,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: 12,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: Colors.accent,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
  },
  timer: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: Colors.black,
  },
  resendText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: Colors.primary,
  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 120,
  },
});

export default OtpVerificationScreen;
