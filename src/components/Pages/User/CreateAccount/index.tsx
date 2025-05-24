import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Colors from '../../../../common/Colors';
import GradientButton from '../../../atoms/GradientButton';
import Eye from '../../../../assets/eye.svg';
import EyeClose from '../../../../assets/eye_close.svg';
import {useNavigation} from '@react-navigation/native';
import { Fonts } from '../../../../common/fonts';
import { IMAGES } from '../../../../common/images';

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [secureEntry, setSecureEntry] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = 'Name is required';
    if (!/^\d{10}$/.test(form.mobile))
      newErrors.mobile = 'Enter valid 10-digit number';
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter valid email';
    if (form.password.length < 6) newErrors.password = 'Min 6 characters';
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Form Submitted:', form);
      navigation.navigate('OTPVerification');
    }
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={IMAGES.AppBackgroundImage}
        style={styles.container}
        resizeMode="cover">
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <ScrollView
            contentContainerStyle={styles.contentWrapper}
            keyboardShouldPersistTaps="handled">
            <Text style={styles.header}>Create Account !!!</Text>
            <Text style={styles.subHeader}>
              You&apos;re just a few steps away from smarter, safer vehicle tracking
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              value={form.name}
              onChangeText={text => handleChange('name', text)}
              placeholderTextColor={Colors.lightgrey}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Mobile number"
              value={form.mobile}
              onChangeText={text => handleChange('mobile', text)}
              keyboardType="phone-pad"
              maxLength={10}
              placeholderTextColor={Colors.lightgrey}
            />
            {errors.mobile && <Text style={styles.error}>{errors.mobile}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Mail id"
              value={form.email}
              onChangeText={text => handleChange('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={Colors.lightgrey}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                value={form.password}
                onChangeText={text => handleChange('password', text)}
                secureTextEntry={secureEntry}
                placeholderTextColor={Colors.lightgrey}
              />
              <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                {secureEntry ? (
                  <EyeClose width={24} height={20} />
                ) : (
                  <Eye width={24} height={20} />
                )}
              </TouchableOpacity>
            </View>
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChangeText={text => handleChange('confirmPassword', text)}
                secureTextEntry={secureConfirm}
                placeholderTextColor={Colors.lightgrey}
              />
              <TouchableOpacity
                onPress={() => setSecureConfirm(!secureConfirm)}>
                  {secureEntry ? (
                  <EyeClose width={24} height={20} />
                ) : (
                  <Eye width={24} height={20} />
                )}
              </TouchableOpacity>
            </View>
            {errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}

            <View style={{marginTop: 20}}>
              <GradientButton title="PROCEED" onPress={handleSubmit} />
            </View>

            <TouchableOpacity style={{marginTop: 20}} onPress={handleSignIn}>
              <Text style={styles.signInText}>
                Already have an account ?{' '}
                <Text>sign in</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  contentWrapper: {
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.primary,
    marginTop: 40,
    fontFamily: Fonts.Bold
  },
  subHeader: {
    textAlign: 'center',
    color: Colors.black,
    marginVertical: 15,
    fontSize: 18,
    fontFamily: Fonts.Medium
  },
  input: {
    backgroundColor: Colors.accent,
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginVertical: 6,
    fontFamily: Fonts.Regular,
    color: Colors.black,
    fontSize:16
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    borderRadius: 4,
    paddingHorizontal: 14,
    marginVertical: 6,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    color: Colors.black,
    fontFamily: Fonts.Regular,
    fontSize:16

  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  error: {
    color: Colors.error,
    marginBottom: 4,
    marginLeft: 4,
    fontSize: 12,
  },
  signInText: {
    textAlign: 'center',
    marginTop: 10,
    color: Colors.primary,
    fontFamily: Fonts.Regular
  },
});

export default CreateAccountScreen;
