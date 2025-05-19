import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReportsMainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reports</Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('ReportType', { configKey: 'geofence' })}
      >
        <Text style={styles.label}>Geofence</Text>
        <Text style={styles.chevron}>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('ReportType', { configKey: 'other' })}
      >
        <Text style={styles.label}>Other reports</Text>
        <Text style={styles.chevron}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ...your styles here
});

export default ReportsMainScreen;