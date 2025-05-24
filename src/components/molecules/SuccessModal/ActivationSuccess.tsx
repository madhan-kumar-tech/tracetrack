import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
} from 'react-native';
import CreateAccountSvg from '../../../assets/create_account.svg'; // SVG as component
import GradientButton from '../../atoms/GradientButton';
import Colors from '../../../common/Colors';
import { Fonts } from '../../../common/fonts';
import WhatsAppIcon from '../../../assets/whatsapp.svg';
//This screen need to a reusable component so that we can use it in other screens as well like password changed successfully.

const ActivationSuccessScreen = () => {

  const handleContactPress = () => {
    Linking.openURL('tel:+919874552632');
  };

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
            Your activation request has been sent.
            To activate your account now, please get in touch
            with our customer support team using the{"\n"}
            contact details below..
          </Text>

          <View style={styles.phoneRow}>
              <WhatsAppIcon width={37} height={37} style={{marginRight:16}}/>
            <Text style={styles.phoneText}>+91 98745 52632</Text>
          </View>
        </View>
        <GradientButton title="CONTACT NOW" onPress={handleContactPress} />
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
    color: Colors.primary,
    fontSize: 24,
    fontFamily:Fonts.Bold,
    textAlign: 'center',
    marginTop:20
  },
  subtitle: {
    color: Colors.primary,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    color: Colors.black,
    fontFamily:Fonts.Medium
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  phoneText: {
    fontSize: 26,
    color: Colors.black,
    fontFamily:Fonts.Medium
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 4,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
