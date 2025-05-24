import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SatelliteIcon from '../assets/map.svg';
import CutIcon from '../assets/location.svg';
import CalendarIcon from '../assets/calendar.svg';
import RefreshIcon from '../assets/retry.svg';
import SafeParkingIcon from '../assets/safe_parking.svg';
import EngineCutOff from '../assets/unlock.svg';
import BatteryIcon from '../assets/voltage.svg';
import DownArrow from '../assets/down_arrow.svg';
import LogoIcon from '../assets/tracetrack_splash.svg';
import {Fonts} from '../common/fonts';
import Colors from '../common/Colors';
import ShareIcon from '../assets/share_primary.svg';

const actionIcons = [SatelliteIcon, CutIcon, CalendarIcon, RefreshIcon];
const TrackScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <LogoIcon width={30} height={30} />
        <Text style={styles.logoText}>Tracetrack</Text>
      </View>

      {/* Vehicle Dropdown */}
      <View style={styles.vehicleDropdown}>
        <Text style={styles.vehicleText}>TN 19 A 4567 - Car</Text>
        <DownArrow width={18} height={18} />
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapContainer}>
        <Image
          source={{uri: '../assets/background.png'}}
          style={styles.mapImage}
        />
        <View style={styles.fabContainer}>
          {actionIcons.map((SvgIcon, index) => (
            <TouchableOpacity key={index} style={styles.fabButton}>
              <SvgIcon width={20} height={20} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Vehicle Info Card */}
      <View style={styles.infoCard}>
        <View style={styles.dragIndicator} />
        <View style={styles.rowBetween}>
          <Text style={styles.ignitionText}>
            Ignition: <Text style={{color: Colors.black}}>On</Text>
          </Text>
          <View style={styles.voltageContainer}>
            <BatteryIcon width={18} height={18} />
            <Text style={styles.voltageText}>12.5 V</Text>
          </View>
          <Text style={styles.updatedText}>Last updated 2 mins ago</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.movementText}>
            Parked 1d 7hrs 54m from 8:23 AM, Apr 20 2025
          </Text>
          <ShareIcon width={30} height={30} />
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.safeParkingBtn}>
            <SafeParkingIcon width={25} height={30} />

            <Text style={styles.buttonText}>Safe Parking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cutoffBtn}>
            <EngineCutOff width={25} height={30} />

            <Text style={styles.buttonText}>Engine Cut-off</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 24,
    fontFamily: Fonts.Bold,
    marginLeft: 4,
    color: Colors.black,
  },
  vehicleDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8', // need to change after map integration
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  vehicleText: {color: Colors.primary, fontFamily: Fonts.Bold, fontSize: 20},
  mapContainer: {flex: 1, marginTop: 10},
  mapImage: {width: '100%', height: '100%'},
  fabContainer: {
    position: 'absolute',
    right: 16,
    bottom: 10,
    justifyContent: 'space-between',
  },
  fabButton: {
    backgroundColor: Colors.primary,
    borderRadius: 24,
    padding: 12,
    marginVertical: 6,
    alignItems: 'center',
  },
  infoCard: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: Colors.black,
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  ignitionText: {color: Colors.primary, fontFamily: Fonts.Medium, fontSize: 18},
  voltageContainer: {flexDirection: 'row', alignItems: 'center'},
  voltageText: {marginLeft: 8, fontSize: 14, fontFamily: Fonts.Regular},
  updatedText: {
    marginTop: 8,
    color: Colors.black,
    fontSize: 12,
    fontFamily: Fonts.Regular,
  },
  movementText: {
    marginVertical: 8,
    color: Colors.success,
    fontFamily: Fonts.Regular,
    fontSize: 16,
    width: 280,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  safeParkingBtn: {
    backgroundColor: Colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    flex: 1,
    marginRight: 8,
    justifyContent: 'center',
    height: 60,
  },
  dragIndicator: {
    width: 50,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D3D3D3', // Light gray
    alignSelf: 'center',
  },
  cutoffBtn: {
    backgroundColor: Colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    flex: 1,
    marginLeft: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.primary,
    marginLeft: 8,
    fontFamily: Fonts.Medium,
    fontSize: 18,
  },
});

export default TrackScreen;
