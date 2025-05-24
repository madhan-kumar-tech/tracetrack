import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ParkingGreen from '../assets/parking_green.svg';
import ParkingBlack from '../assets/parking_black.svg';
import ParkingRed from '../assets/parking_red.svg';
import ParkingYellow from '../assets/parking_yellow.svg';
import KeyImgae from '../assets/key.svg';
import SafeParkingFilled from '../assets/Safeparking_filled.svg';
import GradientButton from '../components/atoms/GradientButton';
import {Fonts} from '../common/fonts';
import Colors from '../common/Colors';

const vehicles = [
  {
    number: 'TN35 AV 1456',
    type: 'CAR',
    status: 'OFF',
    activity: 'Parked for last 1 hour from 4:45PM',
    activityType: 'parked',
    safeMode: 'Active',
  },
  {
    number: 'TN35 AF 2345',
    type: 'LORRY',
    status: 'ON',
    activity: 'Moving from 4:45PM',
    activityType: 'moving',
    safeMode: 'Inactive',
  },
  {
    number: 'TN35 AV 6789',
    type: 'BIKE',
    status: 'ON',
    activity: 'Idle from 4:45PM',
    activityType: 'idle',
    safeMode: 'Inactive',
  },
  {
    number: 'TN35 AV 5678',
    type: 'BIKE',
    status: null,
    activity: 'No data for last three hours',
    activityType: 'nodata',
    safeMode: null,
    errorMessage: 'Please contact customer support to know about issue',
  },
];

const VehiclesScreen = () => {
  const getActivityVisuals = (type: string) => {
    switch (type) {
      case 'moving':
        return {
          icon: <ParkingGreen width={20} height={20} />,
          color: Colors.success,
        };
      case 'idle':
        return {
          icon: <ParkingYellow width={20} height={20} />,
          color: Colors.yellow,
        };
      case 'parked':
        return {
          icon: <ParkingBlack width={20} height={20} />,
          color: Colors.black,
        };
      case 'nodata':
        return {
          icon: <ParkingRed width={20} height={20} />,
          color: Colors.error,
        };
      default:
        return {
          icon: null,
          color: Colors.black,
        };
    }
  };
  const handleAddNewVehicle = () => {};

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>My Vehicles</Text>

        {vehicles.map((vehicle, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.vehicleNumber}>{vehicle.number}</Text>
              {vehicle.status && (
                <View style={styles.status}>
                  <KeyImgae width={16} height={16} />
                  <Text style={styles.statusText}>: {vehicle.status}</Text>
                </View>
              )}
            </View>

            <Text style={styles.vehicleType}>{vehicle.type}</Text>

            {vehicle.activity && (
              <View style={styles.row}>
                {getActivityVisuals(vehicle.activityType).icon}
                <Text
                  style={[
                    styles.activityText,
                    {color: getActivityVisuals(vehicle.activityType).color},
                  ]}>
                  {'  ' + vehicle.activity}
                </Text>
              </View>
            )}

            {vehicle.safeMode && (
              <View
                style={[
                  styles.row,
                  {justifyContent: 'space-between', alignItems: 'center',marginLeft:4},
                ]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SafeParkingFilled width={16} height={16} />
                  <Text style={styles.safeModeText}>
                    {' '}
                    Safe Mode:{' '}
                    <Text
                      style={{
                        color:
                          vehicle.safeMode === 'Active'
                            ? Colors.success
                            : Colors.error,
                      }}>
                      {vehicle.safeMode}
                    </Text>
                  </Text>
                </View>

                {vehicle.status && (
                  <TouchableOpacity style={styles.trackButton}>
                    <Text style={styles.trackButtonText}>Track</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}

            {vehicle.errorMessage && (
              <Text style={styles.errorText}>{vehicle.errorMessage}</Text>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <GradientButton title="ADD NEW" onPress={handleAddNewVehicle} />
      </View>
    </View>
  );
};

export default VehiclesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    color: Colors.primary,
    textAlign: 'center',
    marginVertical: 16,
    fontFamily: Fonts.Bold,
  },
  card: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical:4,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  vehicleNumber: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    flex: 1,
    color: Colors.black,
  },
  vehicleType: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.Regular,
    marginBottom: 6,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    marginLeft: 4,
    color: Colors.black,
    fontFamily: Fonts.Bold,
  },
  activityText: {
    fontSize: 12,
    color: Colors.black,
    fontFamily: Fonts.Regular,
  },
  safeModeText: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    marginLeft: 4,
  },
  errorText: {
    fontSize: 16,
    color: Colors.black,
    marginVertical: 6,
    fontFamily: Fonts.Regular
  },
  trackButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
    borderRadius: 6,
    marginTop: 8,
  },
  trackButtonText: {
    color: Colors.white,
    fontFamily: Fonts.Regular,
    fontSize: 14,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
  },
});
