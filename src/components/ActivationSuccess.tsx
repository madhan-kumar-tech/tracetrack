import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CreateAccountSvg from '../assets/create_account.svg'; // SVG as component
import GradientButton from '../common/GradientButton';

const ActivationSuccessScreen = () => {
  const handleContactPress = () => {
    Linking.openURL('tel:+919874552632');
  };

  const handleProceed = () => {
    
  }

  return (
    <View style={styles.container}>
      {/* SVG Background */}
      <CreateAccountSvg style={styles.background} />

      {/* Content Overlay */}
      <View style={styles.contentWrapper}>
        <View>
          <Text style={styles.title}>
            Activation Request{'\n'}
            <Text style={styles.subtitle}>Submitted Successfully</Text>
          </Text>

          <Text style={styles.description}>
            Your activation request has been sent.{"\n"}
            To activate your account now, please get in touch{"\n"}
            with our customer support team using the{"\n"}
            contact details below..
          </Text>

          <View style={styles.phoneRow}>
            <View style={styles.iconContainer}>
              <Icon name="phone" size={20} color="white" />
            </View>
            <Text style={styles.phoneText}>+91 98745 52632</Text>
          </View>
        </View>
        <GradientButton title="CONTACT NOW" onPress={handleProceed} />
      </View>
    </View>
  );
};

export default ActivationSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between', // Key change: Top and Bottom layout
  },
  title: {
    color: '#6D0F49',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#6D0F49',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    color: '#000',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
  },
  phoneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#6D0F49',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
