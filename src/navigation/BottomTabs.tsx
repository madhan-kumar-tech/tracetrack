import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/TrackScreen';
import VehiclesScreen from '../components/VehiclesScreen';
import TripHistoryScreen from '../components/TripHistoryScreen';
import AlertsScreen from '../components/AlertsScreen';
import MoreScreen from '../components/MoreScreen';
import Colors from '../common/Colors';

import TrackIconActive from '../assets/track_primary.svg';
import TrackIconInactive from '../assets/track_black.svg';
import VehiclesIconActive from '../assets/vechicle_primary.svg';
import VehiclesIconInactive from '../assets/vechicle_black.svg';
import TripHistoryIconActive from '../assets/trip_history_primary.svg';
import TripHistoryIconInactive from '../assets/trip_history_black.svg';
import AlertsIconActive from '../assets/alert_primary.svg';
import AlertsIconInactive from '../assets/alert_black.svg';
import MoreIconActive from '../assets/more_primary.svg';
import MoreIconInactive from '../assets/more_black.svg';
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
            getStyledIcon(focused, TrackIconActive, TrackIconInactive),
        }}
      />
      <Tab.Screen
        name="Vehicles"
        component={VehiclesScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getStyledIcon(focused, VehiclesIconActive, VehiclesIconInactive),
        }}
      />
      <Tab.Screen
        name="Trip History"
        component={TripHistoryScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getStyledIcon(
              focused,
              TripHistoryIconActive,
              TripHistoryIconInactive,
            ),
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getStyledIcon(focused, AlertsIconActive, AlertsIconInactive),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({focused}) =>
            getStyledIcon(focused, MoreIconActive, MoreIconInactive),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
