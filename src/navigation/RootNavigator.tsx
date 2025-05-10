import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../components/LoginScreen/LoginScreen'; 
import OTPScreen from '../components/OtpLoginScreen';  
import { Text } from 'react-native';
export type RootStackParamList = {
  Home: undefined;
  OTP: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate loading or setup before navigation renders
    setTimeout(() => {
      setIsReady(true);
    }, 4000); // Simulate 1-second setup delay
  }, []);

  return (
    <NavigationContainer>
      {isReady ? (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={LoginScreen} />
          <Stack.Screen name="OTP" component={OTPScreen} />
        </Stack.Navigator>
      ) : (
        <Text>Loading...</Text> // Show loading if not ready
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
