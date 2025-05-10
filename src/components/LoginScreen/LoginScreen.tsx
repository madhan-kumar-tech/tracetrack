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
} from 'react-native';
import CustomTextInput from '../../common/CustomInput';
import Colors from '../../common/Colors';
import GradientButton from '../../common/GradientButton';

const LoginScreen: React.FC = () => {
  console.log('asdjhajkdhajkhd');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Login Here!!!</Text>
          <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>

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

          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>

          <GradientButton
            title="LOGIN"
            onPress={() => console.log('Login pressed')}
          />
          <Text style={styles.or}>OR</Text>

          <View style={styles.otpWrapper}>
            <TouchableOpacity style={styles.otpButton}>
              <Text style={styles.otpText}>LOGIN WITH MAIL OTP</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.signup}>
            Don't have an account ? <Text>sign up</Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: Colors.white},
  container: {flex: 1},
  scrollContent: {padding: 20, justifyContent: 'center'},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginVertical: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.black,
    width: 160,
    alignSelf: 'center',
  },
  forgot: {textAlign: 'right', color: Colors.primary, marginVertical: 16},
  or: {textAlign: 'center', marginVertical: 10, fontWeight: 'bold'},
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
    marginVertical: 24,
  },
  otpText: {color: Colors.primary, fontWeight: 'bold', textAlign: 'center'},
  signup: {textAlign: 'center', color: Colors.primary, marginVertical: 8},
});

export default LoginScreen;
