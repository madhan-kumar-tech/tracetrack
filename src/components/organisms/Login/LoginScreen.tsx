import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  ImageBackground,
  Alert,
} from 'react-native';
import { IMAGES } from '../../../common/utils/images';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../../common/CustomInput';
import GradientButton from '../../atoms/GradientButton';
import Colors from '../../../common/Colors';
import { Fonts } from '../../../common/fonts';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation function
  const validatePassword = (password: string) => {
    return password.length >= 6; // Password should be at least 6 characters
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password',
        'Password must be at least 6 characters.',
      );
      return;
    }

    // Navigate to Home screen if validation passes
    navigation.navigate('Home');
  };

  const handleLoginwithOTP = () => {
    navigation.navigate('MailOTPScreen');
  };

  const handleSignUp = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={IMAGES.AppBackgroundImage}
        style={styles.imageBackground}
        resizeMode="cover">
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Login Here!!!</Text>
            <Text style={styles.subtitle}>
              Welcome back you’ve been missed!
            </Text>

            <CustomTextInput
              placeholder="Email Id"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <CustomTextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              showToggleIcon
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>

            <GradientButton
              title="LOGIN"
              onPress={handleLogin} // Updated to validate before navigating
            />
            <Text style={styles.or}>OR</Text>

            <View style={styles.otpWrapper}>
              <TouchableOpacity
                style={styles.otpButton}
                onPress={handleLoginwithOTP}>
                <Text style={styles.otpText}>LOGIN WITH MAIL OTP</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signup}>
                {`Don't have an account ?`} <Text>sign up</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: Colors.white},
  container: {flex: 1},
  scrollContent: {padding: 20, justifyContent: 'center'},
  title: {
    color: Colors.primary,
    textAlign: 'center',
    marginVertical: 8,
    fontFamily: Fonts.Bold,
    fontSize: 24,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.black,
    width: 160,
    alignSelf: 'center',
    fontFamily: Fonts.Medium,
    fontSize: 18,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  forgot: {
    textAlign: 'right',
    color: Colors.primary,
    marginVertical: 16,
    fontFamily: Fonts.Medium,
    fontSize: 18,
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: Fonts.Bold,
    color: Colors.black,
    fontSize: 20,
  },
  otpWrapper: {alignItems: 'center'},
  otpButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    width: 275,
    justifyContent: 'center',
    marginVertical: 16,
  },
  otpText: {
    color: Colors.primary,
    fontFamily: Fonts.Bold,
    fontSize: 14,
    textAlign: 'center',
  },
  signup: {
    textAlign: 'center',
    color: Colors.primary,
    marginVertical: 8,
    fontSize: 16,
    fontFamily: Fonts.Regular,
  },
});

export default LoginScreen;
