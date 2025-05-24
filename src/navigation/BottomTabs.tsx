import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/Pages/Track';
import VehiclesScreen from '../components/VehiclesScreen';
import TripHistoryScreen from '../components/Pages/TripHistory';
import AlertsScreen from '../components/Pages/Alert';
import MoreScreen from '../components/Pages/More';
import Colors from '../common/Colors';
import { IMAGES } from '../common/images';
import {SvgProps} from 'react-native-svg';

const Tab = createBottomTabNavigator();

const getStyledIcon = (
  focused: boolean,
  ActiveIcon: React.FC<SvgProps>,
  InactiveIcon: React.FC<SvgProps>,
) => (
  <View
    style={{
      backgroundColor: focused ? Colors.accent : 'transparent',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 32,
    }}>
    {focused ? (
      <ActiveIcon width={20} height={20} />
    ) : (
      <InactiveIcon width={20} height={20} />
    )}
  </View>
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90, 
          paddingBottom: 15,
          paddingTop: 10,
          backgroundColor: Colors.white,
          borderTopWidth: 1, 
          borderTopColor: '#ccc',
          elevation: 12, // Android shadow
          shadowColor: Colors.black,
          shadowOffset: {width: 0, height: -4},
          shadowOpacity: 0.07,
          shadowRadius: 12,
        },
        tabBarLabelStyle: {fontSize: 12},
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tab.Screen
        name="Track"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getStyledIcon(focused, IMAGES.TrackIconActive,IMAGES.TrackIconInactive),
        }}
      />
      <Tab.Screen
        name="Vehicles"
        component={VehiclesScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getStyledIcon(focused, IMAGES.VehiclesIconActive, IMAGES.VehiclesIconInactive),
        }}
      />
      <Tab.Screen
        name="Trip History"
        component={TripHistoryScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getStyledIcon(
              focused,
              IMAGES.TripHistoryIconActive,
              IMAGES.TripHistoryIconInactive,
            ),
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getStyledIcon(focused, IMAGES.AlertsIconActive, IMAGES.AlertsIconInactive),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getStyledIcon(focused, IMAGES.MoreIconActive,IMAGES.MoreIconInactive),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
