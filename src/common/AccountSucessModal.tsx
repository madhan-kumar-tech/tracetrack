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
          <View style={styles.topHalf}>
            <Profile width={86} height={86} />
          </View>

          <Text style={styles.title}>{headingtext}</Text>
          <Text style={styles.subtitle}>{subText}</Text>

          <TouchableOpacity style={styles.button} onPress={onProceed}>
            <Text style={styles.buttonText}>PROCEED</Text>
          </TouchableOpacity>
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
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: width,
    padding: 20,
    alignItems: 'center',
  },
  topHalf: {
    width: '100%',
    height: 100,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.black,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.black,
    textAlign: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default AccountSuccessModal;
