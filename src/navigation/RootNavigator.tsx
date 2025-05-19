import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../components/organisms/Login/LoginScreen';
import OTPScreen from '../components/organisms/Login/OtpLoginScreen';
import CreateAccountScreen from '../components/organisms/CreateAccount/CreateAccountScreen';
import OtpVerificationScreen from '../components/organisms/OTPVerification/OtpVerificationScreen'
import ActivationRequestSuccess from '../components/molecules/ActivationRequestSuccess';
import SetNewPasswordScreen from '../components/organisms/Password/SetNewPassword/SetNewPasswordScreen';
import Homescreen from '../components/organisms/HomePage/Homescreen';
import WalkthroughScreen from '../components/organisms/WalkThrough';
import AddVehicleScreen from '../components/organisms/Vehicles/AddVehicle/AddVehicleScreen';
import ForgotPasswordScreen from '../components/organisms/Password/ForgetPassword/ForgotPasswordScreen';
import ReportsMainScreen from '../components/organisms/MoreScreen/Reports';
import ReportTypeScreen from '../components/organisms/MoreScreen/Reports/ReportsType';

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
  ReportsMain: undefined;
  ReportType: undefined;
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
        {/* <Stack.Screen
          name="ActivationSuccess"
          component={ActivationRequestSuccess}
        /> */}
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="SetNewPassword" component={SetNewPasswordScreen} />
        <Stack.Screen name="ReportsMain" component={ReportsMainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ReportType" component={ReportTypeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
