import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import GradientButton from '../../../atoms/GradientButton';
import PhoneIcon from '../../../../assets/phone.svg'; // Replace with your SVG path

const SUPPORT_NUMBER = '+91 98745 52632';
const SUPPORT_TIMING = '10:00 AM To 06:00 PM';

const SupportScreen = () => {
  const handleCall = () => {
    Linking.openURL(`tel:${SUPPORT_NUMBER.replace(/\s+/g, '')}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Need Help? We’re Here{'\n'}For You!</Text>
      <Text style={styles.subText}>
        For any support regarding tracking, device setup, or subscription, feel free to contact our team.
      </Text>
      <View style={styles.timingRow}>
        <Text style={styles.clock}>🕒</Text>
        <Text style={styles.timingText}>Timing: {SUPPORT_TIMING}</Text>
      </View>
      <TouchableOpacity style={styles.phoneRow} onPress={handleCall} activeOpacity={0.7}>
        <View style={styles.phoneIconBox}>
          <PhoneIcon width={28} height={28} />
        </View>
        <Text style={styles.phoneText}>{SUPPORT_NUMBER}</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
      <GradientButton
        title="CONTACT NOW"
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={handleCall}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 12,
    marginBottom: 8,
    fontFamily: 'Inter-Bold',
  },
  subText: {
    fontSize: 16,
    color: '#222',
    marginBottom: 24,
    fontFamily: 'Inter-Regular',
  },
  timingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  clock: {
    fontSize: 22,
    marginRight: 8,
  },
  timingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    fontFamily: 'Inter-Bold',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 8,
  },
  phoneIconBox: {
    backgroundColor: '#4ecb7a',
    borderRadius: 8,
    padding: 8,
    marginRight: 14,
  },
  phoneText: {
    fontSize: 24,
    color: '#222',
    fontFamily: 'Inter-Bold',
  },
  button: {
    marginBottom: 32,
    borderRadius: 8,
    paddingVertical: 18,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
});

export default SupportScreen;