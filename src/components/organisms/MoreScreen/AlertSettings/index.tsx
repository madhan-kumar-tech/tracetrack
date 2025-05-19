import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity, ScrollView } from 'react-native';

// Import your SVG icons
import KeyIcon from '../../../../assets/key.svg';
import SpeedIcon from '../../../../assets/speed.svg';
import PowerIcon from '../../../../assets/power.svg';
import ParkingIcon from '../../../../assets/parking.svg';
import FenceIcon from '../../../../assets/fence.svg';

type AlertSetting = {
  key: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  value: boolean;
  onToggle: (val: boolean) => void;
  extra?: React.ReactNode;
};

type AlertSettingsProps = {
  settings: Omit<AlertSetting, 'onToggle' | 'value'>[];
  values: Record<string, boolean>;
  onChange: (key: string, value: boolean) => void;
  speedLimit: string;
  onSpeedLimitChange: (val: string) => void;
  onSave: () => void;
};

const AlertSettings: React.FC<AlertSettingsProps> = ({
  settings,
  values,
  onChange,
  speedLimit,
  onSpeedLimitChange,
  onSave,
}) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 32}}>
      {/* <Text style={styles.header}>Alert Settings</Text> */}
      {settings.map((setting, idx) => (
        <View key={setting.key}>
          <View style={styles.row}>
            <View style={styles.iconBox}>{setting.icon}</View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{setting.title}</Text>
              <Text style={styles.desc}>{setting.description}</Text>
              {setting.extra}
            </View>
            <Switch
              value={values[setting.key]}
              onValueChange={val => onChange(setting.key, val)}
              trackColor={{ false: '#ccc', true: '#7a1740' }}
              thumbColor={values[setting.key] ? '#fff' : '#fff'}
            />
          </View>
          {setting.key === 'overspeed' && values['overspeed'] && (
            <View style={styles.speedLimitBox}>
              <Text style={styles.speedLabel}>Speed Limit:</Text>
              <TextInput
                style={styles.speedInput}
                value={speedLimit}
                onChangeText={onSpeedLimitChange}
                keyboardType="numeric"
                placeholder="80kmph"
                placeholderTextColor="#888"
              />
            </View>
          )}
          <View style={styles.divider} />
        </View>
      ))}
      <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
        <Text style={styles.saveBtnText}>SAVE CHANGES</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Example usage:
export default function AlertSettingsScreen() {
  const [values, setValues] = useState({
    ignition: false,
    overspeed: false,
    powercut: false,
    parking: false,
    geofence: false,
  });
  const [speedLimit, setSpeedLimit] = useState('80kmph');

  const settings: Omit<AlertSetting, 'onToggle' | 'value'>[] = [
    {
      key: 'ignition',
      icon: <KeyIcon width={40} height={40} />,
      title: 'Ignition alert',
      description: 'Track ignition activity – get alerts when the vehicle is turned on or off.',
    },
    {
      key: 'overspeed',
      icon: <SpeedIcon width={40} height={40} />,
      title: 'Overspeed Alert',
      description: 'Notify me when my vehicle exceeds the set speed limit.',
    },
    {
      key: 'powercut',
      icon: <PowerIcon width={40} height={40} />,
      title: 'Power Cut Alert',
      description: 'Get notified if the GPS device loses external power supply',
    },
    {
      key: 'parking',
      icon: <ParkingIcon width={40} height={40} />,
      title: 'Safe Parking Alert',
      description: 'Stay informed if your parked vehicle moves or is tampered with while Safe Parking Mode is enabled.',
    },
    {
      key: 'geofence',
      icon: <FenceIcon width={40} height={40} />,
      title: 'Geo-Fence Alert',
      description: 'Get notified when your vehicle enters or exits a designated geo-fence area.',
    },
  ];

  const handleChange = (key: string, value: boolean) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Save logic here
  };

  return (
    <AlertSettings
      settings={settings}
      values={values}
      onChange={handleChange}
      speedLimit={speedLimit}
      onSpeedLimitChange={setSpeedLimit}
      onSave={handleSave}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 18,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7a1740',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 18,
    fontFamily: 'Inter-Bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingVertical: 8,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#ede9f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    marginTop: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Inter-Bold',
  },
  desc: {
    fontSize: 15,
    color: '#222',
    marginTop: 2,
    fontFamily: 'Inter-Regular',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
    marginLeft: 8,
  },
  speedLimitBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ede9f6',
    borderRadius: 10,
    marginLeft: 72,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  speedLabel: {
    fontSize: 18,
    color: '#7a1740',
    fontFamily: 'Inter-Bold',
    marginRight: 12,
  },
  speedInput: {
    fontSize: 18,
    color: '#222',
    fontFamily: 'Inter-Bold',
    backgroundColor: 'transparent',
    flex: 1,
  },
  saveBtn: {
    backgroundColor: '#7a1740',
    borderRadius: 8,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  saveBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    letterSpacing: 1,
  },
});