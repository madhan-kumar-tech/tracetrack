import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EditIcon from '../../../assets/EditIcon.svg'; // SVG for edit icon
import BatteryIcon from '../../../assets/BatteryIcon.svg'; // SVG for battery icon

type VehicleStatusCardProps = {
  registerNumber: string;
  vehicleType: string;
  ignition: 'On' | 'Off';
  safeMode: 'Active' | 'Inactive';
  battery: string;
  lastUpdated: string;
  onEdit?: () => void;
};

const VehicleStatusCard: React.FC<VehicleStatusCardProps> = ({
  registerNumber,
  vehicleType,
  ignition,
  safeMode,
  battery,
  lastUpdated,
  onEdit,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.registerNumber}>{registerNumber}</Text>
        <TouchableOpacity onPress={onEdit} hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
          <EditIcon width={22} height={22} />
        </TouchableOpacity>
      </View>
      <Text style={styles.vehicleType}>{vehicleType}</Text>
      <View style={styles.statusRow}>
        <Text style={styles.ignitionLabel}>Ignition:</Text>
        <Text style={styles.ignitionValue}>{ignition}</Text>
        <View style={styles.batteryRow}>
          <BatteryIcon width={24} height={24} />
          <Text style={styles.batteryText}>{battery} V</Text>
        </View>
      </View>
      <View style={styles.safeRow}>
        <Text style={styles.safeLabel}>Safe Mode:</Text>
        <Text style={[
          styles.safeValue,
          { color: safeMode === 'Active' ? '#34b76b' : '#d32f2f' }
        ]}>
          {safeMode}
        </Text>
        <Text style={styles.lastUpdated}>{lastUpdated}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    elevation: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  registerNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    fontFamily: 'Inter-Bold',
  },
  vehicleType: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
    marginBottom: 8,
    fontFamily: 'Inter-Regular',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    justifyContent: 'space-between',
  },
  ignitionLabel: {
    fontSize: 16,
    color: '#7a1740',
    fontFamily: 'Inter-Medium',
    marginRight: 2,
  },
  ignitionValue: {
    fontSize: 16,
    color: '#1a1a1a',
    fontFamily: 'Inter-Medium',
    marginRight: 16,
  },
  batteryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  batteryText: {
    fontSize: 16,
    color: '#34b76b',
    marginLeft: 4,
    fontFamily: 'Inter-Medium',
  },
  safeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 2,
  },
  safeLabel: {
    fontSize: 16,
    color: '#1a1a1a',
    fontFamily: 'Inter-Medium',
    marginRight: 4,
  },
  safeValue: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    marginRight: 16,
  },
  lastUpdated: {
    marginLeft: 'auto',
    fontSize: 13,
    color: '#888',
    fontFamily: 'Inter-Regular',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 8,
  },
});

export default VehicleStatusCard;