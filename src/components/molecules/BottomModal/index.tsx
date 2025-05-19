import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, GestureResponderEvent } from 'react-native';

type BottomModalProps = {
  visible: boolean;
  icon: React.ReactNode; // Pass an SVG, Image, or Icon component
  title: string;
  description: string;
  buttonLabel: string;
  onPress: (event: GestureResponderEvent) => void;
  onClose?: () => void;
};

export const BottomModal = ({
  visible,
  icon,
  title,
  description,
  buttonLabel,
  onPress,
  onClose,
}: BottomModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.topCurve} />
          <View style={styles.iconContainer}>{icon}</View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonLabel}>{buttonLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(20,20,20,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 32,
    alignItems: 'center',
    overflow: 'hidden',
    paddingBottom: 32,
  },
  topCurve: {
    width: '100%',
    height: 100,
    backgroundColor: '#7a1740',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  iconContainer: {
    marginTop: 32,
    marginBottom: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
    fontFamily: 'Inter-Bold',
  },
  description: {
    fontSize: 18,
    color: '#222',
    textAlign: 'center',
    marginHorizontal: 24,
    marginBottom: 32,
    fontFamily: 'Inter-Regular',
  },
  button: {
    backgroundColor: '#7a1740',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '80%',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
});



//How to use this component
// const MyScreen = () => {
//   const [visible, setVisible] = useState(true);

//   return (
//     <View>
//       <BottomModal
//         visible={visible}
//         icon={
//           <Image
//             source={require('../../../assets/lock.png')}
//             style={{ width: 100, height: 100 }}
//             resizeMode="contain"
//           />
//         }
//         title="Password Changed Successfully!"
//         description="Your password has been updated successfully. You're all set to continue securely!"
//         buttonLabel="PROCEED"
//         onPress={() => setVisible(false)}
//         onClose={() => setVisible(false)}
//       />
//     </View>
//   );
// };