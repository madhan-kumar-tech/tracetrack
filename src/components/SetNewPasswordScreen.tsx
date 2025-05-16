import React, {useState} from 'react';
import {
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import BackgroundImage from '../assets/background.png';
import GradientButton from '../common/GradientButton';
import AccountSuccessModal from '../common/AccountSucessModal';
import {useNavigation} from '@react-navigation/native';
import LeftArrow from '../assets/left_arrow.svg';

const SetNewPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      Alert.alert('Error', 'Both fields are required.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    setIsVisible(true);
  };

  const handleProceed = () => {
    setIsVisible(false)
    navigation.navigate('Home')
    
  }
  return (
    <ImageBackground
      source={BackgroundImage}
      style={styles.background}
      resizeMode="cover">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <LeftArrow width="8" height={18} />
        </TouchableOpacity>

        <Text style={styles.title}>Set Your New Password</Text>
        <Text style={styles.subtitle}>
          Set your new password to secure your account and get back on track!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your new password"
          secureTextEntry
          placeholderTextColor="#444"
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm your new password"
          secureTextEntry
          placeholderTextColor="#444"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <GradientButton title="SUBMIT" onPress={handleSubmit} />
      </KeyboardAvoidingView>
      <AccountSuccessModal
        visible={isVisible}
        onClose={() => setIsVisible(false)}
        onProceed={handleProceed}
        headingtext="Password changed Successfully!"
        subText="Your password has been updated successfully. You're all set to continue securely!"
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backArrow: {
    fontSize: 28,
    color: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#79063D',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  input: {
    backgroundColor: '#F4F0F8',
    borderWidth: 1,
    borderColor: '#79063D',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    color: '#000',
  },
});

export default SetNewPasswordScreen;
