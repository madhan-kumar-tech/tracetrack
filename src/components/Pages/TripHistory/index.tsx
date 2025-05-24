import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../common/Colors';
import {Fonts} from '../../../common/fonts';
import { IMAGES } from '../../../common/images';

const TripHistoryScreen = () => {
  const [isTripHistory, setIsTripHistory] = useState(false)

  const trips = [
    {
      time: '09:20AM - 09:45AM',
      distance: '12 km',
      speed: '42 km/h',
      alert: 'High Speed',
      alertColor: Colors.error,
    },
    {
      time: '08:15AM - 09:00AM',
      distance: '15 km',
      speed: '55 km/h',
      alert: 'Nil',
      alertColor: Colors.success,
    },
  ];

  useEffect(() =>{
    setIsTripHistory(false);
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.tripContainer}>
        <Text style={styles.header}>Trip History</Text>
        <IMAGES.CalendarOutlineIcon
          width={25}
          height={25}
          color={Colors.primary}
          style={styles.calendarIcon}
        />
      </View>

      <View style={styles.selectorContainer}>
        <Text style={styles.vehicleSelector}>TN 19 A 4567 - Car</Text>
        <IMAGES.DownArrow width={20} height={20} color={Colors.primary} />
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>April 28, 2025</Text>
      </View>

      {isTripHistory ? (
        <View style={styles.noHistoryContainer}>
          <IMAGES.NoTripHistoryIcon width={310} height={250} color={Colors.primary} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.tripList}>
          {trips.map((trip, index) => (
            <View key={index} style={styles.tripCard}>
              {/* Inner padded content */}
              <View style={styles.tripCardContent}>
                <Text style={styles.tripTime}>{trip.time}</Text>
                <View style={styles.tripDetailRow}>
                  <Text style={styles.label}>
                    Distance: <Text style={styles.value}>{trip.distance}</Text>
                  </Text>
                  <Text style={styles.label}>
                    Avg Speed: <Text style={styles.value}>{trip.speed}</Text>
                  </Text>
                </View>
                <Text style={styles.label}>
                  Alerts:{' '}
                  <Text style={[styles.value, {color: trip.alertColor}]}>
                    {trip.alert}
                  </Text>
                </Text>
              </View>

              {/* Full-width separator */}
              <View style={styles.horizontaline} />

              {/* Map button aligned right */}
              <TouchableOpacity style={styles.mapButton}>
                <IMAGES.MapIcon width={16} height={16} color={Colors.primary} />
                <Text style={styles.mapButtonText}>VIEW ON MAP</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TripHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  tripContainer: {
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontFamily: Fonts.Bold,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 16,
  },
  calendarIcon: {
    right: 20,
    position: 'absolute',
    top: 18,
  },
  selectorContainer: {
    backgroundColor: Colors.accent,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  noHistoryContainer: {
    alignContent: 'center',
    alignSelf: 'center',
    flex: 1,
    marginTop:40
  },
  vehicleSelector: {
    fontFamily: Fonts.Bold,
    color: Colors.primary,
    fontSize: 20,
  },
  dateContainer: {
    alignSelf: 'center',
    backgroundColor: Colors.lightGray,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginVertical: 24,
  },
  dateText: {
    fontFamily: Fonts.Medium,
    fontSize: 18,
    color: Colors.black,
  },
  tripList: {
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  tripCard: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 16,
    overflow: 'hidden',
  },
  tripCardContent: {
    padding: 16,
  },
  tripTime: {
    fontFamily: Fonts.Medium,
    fontSize: 18,
    color: Colors.primary,
    marginBottom: 12,
  },
  tripDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontFamily: Fonts.Medium,
    fontSize: 18,
    color: Colors.black,
  },
  value: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
  },
  horizontaline: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.border,
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    padding: 12,
  },
  mapButtonText: {
    fontFamily: Fonts.Bold,
    fontSize: 14,
    color: Colors.primary,
    marginLeft: 6,
  },
});
