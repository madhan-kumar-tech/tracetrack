import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import OTPScreen from '../components/OtpLoginScreen';
import CreateAccountScreen from '../components/CreateAccount/CreateAccountScreen';
import AddVehicleScreen from '../components/AddVehicleScreen';
import OtpVerificationScreen from '../components/OtpVerificationScreen';
import ActivationSuccessScreen from '../components/ActivationSuccess';
import ForgotPasswordScreen from '../components/ForgotPasswordScreen';
import SetNewPasswordScreen from '../components/SetNewPasswordScreen';
import Homescreen from '../components/Homescreen';
import WalkthroughScreen from '../components/WalkthroughScreen';

export type RootStackParamList = {
  Login: undefined;
  OTP: undefined;
  AddVehicle: undefined;
  CreateAccount: undefined;
  ActivationSuccess: undefined;
  MailOTPScreen: undefined;
  OTPVerification: undefined;
  ForgotPassword: undefined;
  SetNewPassword: undefined;
  Home: undefined;
  Walkthrough: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Walkthrough"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MailOTPScreen" component={OTPScreen} />
        <Stack.Screen
          name="OTPVerification"
          component={OtpVerificationScreen}
        />
        <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen
          name="ActivationSuccess"
          component={ActivationSuccessScreen}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="SetNewPassword" component={SetNewPasswordScreen} />
        <Stack.Screen name="Home" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
