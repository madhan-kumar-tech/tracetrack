import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SettingsCard from '../../molecules/SettingsCard';

// Import your SVG icons
import UserIcon from '../../../assets/user.svg';
import LockIcon from '../../../assets/lock.svg';
import CardIcon from '../../../assets/card.svg';
import CarIcon from '../../../assets/car.svg';
import ShieldIcon from '../../../assets/shield.svg';
import ReportIcon from '../../../assets/report.svg';
import BellIcon from '../../../assets/bell.svg';
import SupportIcon from '../../../assets/support.svg';
import FaqIcon from '../../../assets/faq.svg';
import Colors from '../../../common/Colors';
import {Fonts} from '../../../common/fonts';

const MoreScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 32}}>
      <Text style={styles.header}>More</Text>
      <View style={styles.section}>
        <SettingsCard
          title="Account & App"
          items={[
            {
              icon: <UserIcon width={24} height={24} />,
              label: 'My Profile',
              onPress: () => {},
            },
            {
              icon: <LockIcon width={24} height={24} />,
              label: 'Change Password',
              onPress: () => {},
            },
            {
              icon: <CardIcon width={24} height={24} />,
              label: 'My Plans',
              onPress: () => {},
            },
          ]}
        />
      </View>
      <View style={styles.section}>
        <SettingsCard
          title="Tools & Features"
          items={[
            {
              icon: <CarIcon width={24} height={24} />,
              label: 'Add New Vehicle',
              onPress: () => {},
            },
            {
              icon: <ShieldIcon width={24} height={24} />,
              label: 'Safe Parking Logs',
              onPress: () => {},
            },
            {
              icon: <ReportIcon width={24} height={24} />,
              label: 'Reports',
              onPress: () => {},
            },
            {
              icon: <BellIcon width={24} height={24} />,
              label: 'Alert Settings',
              onPress: () => {},
            },
          ]}
        />
      </View>
      <View style={styles.section}>
        <SettingsCard
          title="Help & Support"
          items={[
            {
              icon: <SupportIcon width={24} height={24} />,
              label: 'Customer Support',
              onPress: () => {},
            },
            {
              icon: <FaqIcon width={24} height={24} />,
              label: "FAQ's",
              onPress: () => {},
            },
          ]}
        />
      </View>
      <View style={styles.logoutWrapper}>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => {}}>
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7a1740',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 16,
    fontFamily: 'Inter-Bold',
  },
  section: {
    marginHorizontal: 12,
    marginBottom: 18,
  },

  logoutWrapper: {alignItems: 'center'},
  logoutBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    width: 275,
    justifyContent: 'center',
    marginVertical: 16,
  },
  logoutText: {
    color: Colors.primary,
    fontFamily: Fonts.Bold,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default MoreScreen;
