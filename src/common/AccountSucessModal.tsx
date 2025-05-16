import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Colors from '../common/Colors';
import Profile from '../assets/profile_contact.svg';
import {Fonts} from './fonts';
import GradientButton from './GradientButton';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  visible: boolean;
  onClose: () => void;
  onProceed: () => void;
  headingtext?: string;
  subText?: string;
}

const {width} = Dimensions.get('window');

const AccountSuccessModal = ({
  visible,
  onClose,
  onProceed,
  headingtext = 'Account Created Successfully!',
  subText = 'Add your vehicle to smarter and safer tracking',
}: Props) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Decorative Elliptical Background */}
          <LinearGradient
            colors={[Colors.primaryDark, Colors.primary]}
            style={styles.ellipse}
          />

          {/* Icon inside the ellipse */}
          <View style={styles.profileWrapper}>
            <Profile width={86} height={86} />
          </View>

          {/* Text and Button */}
          <View style={{top: 70}}>
            <Text style={styles.title}>{headingtext}</Text>
            <Text style={styles.subtitle}>{subText}</Text>
            <GradientButton title="PROCEED" onPress={onProceed} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    width: width,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    paddingTop: 80,
    overflow: 'hidden',
    height: 330,
  },
  ellipse: {
    position: 'absolute',
    top: -165,
    left: -width * 0.25,
    width: width * 1.5,
    height: 300,
    borderBottomRightRadius: width * 0.75,
    borderBottomLeftRadius: width * 0.75,
    zIndex: 0,
  },
  profileWrapper: {
    position: 'absolute',
    top: 30,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.black,
    marginBottom: 10,
    fontFamily: Fonts.Bold,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.black,
    textAlign: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
    fontFamily: Fonts.Medium,
  },
});

export default AccountSuccessModal;
