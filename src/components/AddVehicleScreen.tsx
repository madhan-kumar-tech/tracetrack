import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
} from 'react-native';
import TextInputField from '../common/CommonTextInput';
import GradientButton from '../common/GradientButton';
import BackgroundImage from '../assets/background.png';
import Colors from '../common/Colors';
import { useNavigation } from '@react-navigation/native';
import LeftArrow from '../assets/left_arrow.svg';

const AddVehicleScreen = () => {
  const [imei, setImei] = useState('');
  const [registration, setRegistration] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [errors, setErrors] = useState({ imei: '', registration: '', vehicleType: '' });

  const [vehicleTypeModalVisible, setVehicleTypeModalVisible] = useState(false);
  const vehicleOptions = ['Car', 'Bike', 'Truck', 'Bus'];
  const navigation = useNavigation();
  const validate = () => {
    let valid = true;
    const newErrors = { imei: '', registration: '', vehicleType: '' };

    if (!imei || imei.length < 10) {
      newErrors.imei = 'IMEI is required and must be at least 10 characters';
      valid = false;
    }

    if (!registration) {
      newErrors.registration = 'Registration number is required';
      valid = false;
    }

    if (!vehicleType) {
      newErrors.vehicleType = 'Vehicle type is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const onSubmit = () => {
    navigation.navigate('ActivationSuccess')
    if (validate()) {
      console.log('Submitted Data:', { imei, registration, vehicleType });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={BackgroundImage} style={styles.container} resizeMode="cover">
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
            <View style={styles.headerIcon}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow width="8" height={18} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
            <Text style={styles.header}>Add Vehicle !!!</Text>
            <Text style={styles.subheader}>
              You're just a few steps away from smarter, safer vehicle tracking
            </Text>

            <TextInputField
              placeholder="Enter IMEI number or scan from device"
              value={imei}
              onChangeText={setImei}
              error={errors.imei}
            //   rightIcon={<ScanIcon width={24} height={24} />}
            />

            <TextInputField
              placeholder="Registration number"
              value={registration}
              onChangeText={setRegistration}
              error={errors.registration}
            />

            {/* Dropdown Field */}
            <TouchableOpacity onPress={() => setVehicleTypeModalVisible(true)}>
              <TextInputField
                placeholder="Select Vehicle type"
                value={vehicleType}
                editable={false}
                pointerEvents="none"
                error={errors.vehicleType}
                // rightIcon={<DropdownIcon width={24} height={24} />}
              />
            </TouchableOpacity>

            <View style={{ marginTop: 20 }}>
              <GradientButton title="SUBMIT" onPress={onSubmit} />
            </View>

            <TouchableOpacity onPress={() =>     navigation.navigate('Login')}>
              <Text style={styles.signInText}>Already have an account ? sign in</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* Vehicle Type Modal */}
        <Modal
          visible={vehicleTypeModalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setVehicleTypeModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={() => setVehicleTypeModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              {vehicleOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.option}
                  onPress={() => {
                    setVehicleType(option);
                    setVehicleTypeModalVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  inner: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.black,
    marginBottom: 30,
  },
  signInText: {
    marginTop: 15,
    textAlign: 'center',
    color: Colors.primary,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  option: {
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
    color: Colors.black,
  },
  headerIcon:{
    margin:32
  }
});

export default AddVehicleScreen;
