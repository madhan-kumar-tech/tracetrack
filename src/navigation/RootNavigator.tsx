import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OTPScreen from '../components/Pages/User/LoginWithOTP';
import LoginScreen from '../components/Pages/User/Login';
import CreateAccountScreen from '../components/Pages/User/CreateAccount';
import AddVehicleScreen from '../components/Pages/Vehicles/AddVehicleScreen';
import {OtpVerification} from '../components/Pages/User/OTPVerification';
import ActivationSuccessScreen from '../components/molecules/SuccessModal/ActivationSuccess';
import ForgotPasswordScreen from '../components/Pages/User/ForgotPassword';
import SetNewPasswordScreen from '../components/organisms/SetNewPassword';
import WalkthroughScreen from '../components/Pages/WalkThrough';
import BottomTabs from './BottomTabs';

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
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Walkthrough'>
        {/* Screens without bottom tab */}
        <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MailOTPScreen" component={OTPScreen} />
        <Stack.Screen
          name="OTPVerification"
          component={OtpVerification}
        />
        <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ActivationSuccess" component={ActivationSuccessScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="SetNewPassword" component={SetNewPasswordScreen} />

        {/* Main app with bottom tabs */}
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
