import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../common/Colors';

const alerts = {
  ALL: [
    {
      id: 1,
      plate: 'TN 19 A 4567',
      message: 'Ignition turned on while safe parking mode is active',
      time: '20th Apr, 2025 03:45PM',
      seen: false,
    },
    {
      id: 2,
      plate: 'TN 19 A 4567',
      message: 'Your vehicle exceeded the speed limit of 80KM/H',
      time: '19th Apr, 2025 01:45PM',
      seen: true,
    },
    {
      id: 3,
      plate: 'TN 19 A 4567',
      message:
        'Your vehicle moved from its parking location while Safe Parking Mode was enabled',
      time: '19th Apr, 2025 11:45AM',
      seen: true,
    },
  ],
  IGNITION: [
    {
      id: 1,
      plate: 'TN 19 A 4567',
      message: 'Ignition turned on while safe parking mode is active',
      time: '20th Apr, 2025 03:45PM',
      seen: false,
    },
  ],
  OVERSPEED: [
    {
      id: 2,
      plate: 'TN 19 A 4567',
      message: 'Your vehicle exceeded the speed limit of 80KM/H',
      time: '19th Apr, 2025 01:45PM',
      seen: true,
    },
  ],
  'SAFE PARKING': [
    {
      id: 3,
      plate: 'TN 19 A 4567',
      message:
        'Your vehicle moved from its parking location while Safe Parking Mode was enabled',
      time: '19th Apr, 2025 11:45AM',
      seen: true,
    },
  ],
  GEOFENCE: [],
};

const tabLabels = Object.keys(alerts);

const AlertsScreen = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const currentAlerts = alerts[activeTab] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alerts</Text>

      {/* Custom Tab Bar */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabBar}
      >
        <View style={{ flexDirection: 'row' }}>
          {tabLabels.map((label) => (
            <TouchableOpacity
              key={label}
              onPress={() => setActiveTab(label)}
              style={[styles.tab, activeTab === label && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeTab === label && styles.activeTabText]}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Alerts List */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {currentAlerts.length === 0 ? (
          <Text style={styles.noData}>No alerts in this category.</Text>
        ) : (
          currentAlerts.map((alert) => (
            <View key={alert.id} style={styles.card}>
              <Text style={styles.plate}>{alert.plate}</Text>
              <Text style={styles.message}>{alert.message}</Text>
              <Text style={styles.time}>{alert.time}</Text>
              <View style={styles.footer}>
                {alert.seen && <Text style={styles.seen}>👁️ Seen</Text>}
                <TouchableOpacity style={styles.mapButton}>
                  <Text style={styles.mapText}>🗺️ VIEW ON MAP</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default AlertsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#6C003F',
  },
  tabBar: {
    paddingVertical: 8,
  },
  tab: {
    marginRight: 16,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#6C003F',
  },
  tabText: {
    color: '#888',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#6C003F',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#eee',
  },
  plate: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  message: {
    color: '#6C003F',
    fontSize: 14,
  },
  time: {
    color: '#999',
    fontSize: 12,
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    alignItems: 'center',
  },
  seen: {
    color: '#2DBD6E',
    fontWeight: '600',
  },
  mapButton: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#F2EAF0',
  },
  mapText: {
    color: '#6C003F',
    fontWeight: 'bold',
    fontSize: 12,
  },
  noData: {
    textAlign: 'center',
    color: '#888',
    marginTop: 40,
    fontSize: 14,
  },
});
