// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Linking,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import CreateAccountSvg from '../assets/create_account.svg'; // SVG as component
// import GradientButton from '../../atoms/GradientButton';
// import Colors from '../../../common/Colors';
// import { Fonts } from '../../../common/fonts';
// import WhatsAppIcon from '../assets/whatsapp.svg';

// const ActivationSuccessScreen = () => {

//   const handleContactPress = () => {
//     Linking.openURL('tel:+919874552632');
//   };

//   return (
//     <View style={styles.container}>
//       {/* SVG Background */}
//       <CreateAccountSvg style={styles.background} />

//       {/* Content Overlay */}
//       <View style={styles.contentWrapper}>
//         <View>
//           <Text style={styles.title}>
//             Activation Request{'\n'}
//             <Text style={styles.subtitle}>Submitted Successfully</Text>
//           </Text>

//           <Text style={styles.description}>
//             Your activation request has been sent.
//             To activate your account now, please get in touch
//             with our customer support team using the{"\n"}
//             contact details below..
//           </Text>

//           <View style={styles.phoneRow}>
//               <WhatsAppIcon width={37} height={37} style={{marginRight:16}}/>
//             <Text style={styles.phoneText}>+91 98745 52632</Text>
//           </View>
//         </View>
//         <GradientButton title="CONTACT NOW" onPress={handleContactPress} />
//       </View>
//     </View>
//   );
// };

// export default ActivationSuccessScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//   },
//   background: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//   },
//   contentWrapper: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 40,
//     justifyContent: 'space-between', // Key change: Top and Bottom layout
//   },
//   title: {
//     color: Colors.primary,
//     fontSize: 24,
//     fontFamily:Fonts.Bold,
//     textAlign: 'center',
//   },
//   subtitle: {
//     color: Colors.primary,
//   },
//   description: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 15,
//     color: Colors.black,
//     fontFamily:Fonts.Medium
//   },
//   phoneRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 25,
//     justifyContent: 'center',
//   },
//   phoneText: {
//     fontSize: 26,
//     color: Colors.black,
//     fontFamily:Fonts.Medium
//   },
//   button: {
//     backgroundColor: Colors.primary,
//     paddingVertical: 14,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     alignSelf: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Linking,
} from 'react-native';
import GradientButton from '../../atoms/GradientButton';
import PhoneIcon from '../assets/PhoneIcon.svg';
import Colors from '../../../common/Colors';
import {Fonts} from '../../../common/fonts';

type ActivationRequestSuccessProps = {
  title: string;
  description: string;
  contactNumber: string;
  buttonLabel: string;
  backgroundImage: any; // require('path/to/image.png') or { uri: ... }
  contactIcon?: any; // optional, for custom phone icon
};

const ActivationRequestSuccess = ({
  title,
  description,
  contactNumber,
  buttonLabel,
  backgroundImage,
  contactIcon,
}: ActivationRequestSuccessProps) => {
  const handleContactPress = () => {
    if (contactNumber) {
      Linking.openURL(`tel:${contactNumber.replace(/\s+/g, '')}`);
    }
  };
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.phoneRow}>
              <View style={styles.iconWrapper}>
                {contactIcon ? (
                  <Image
                    source={contactIcon}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                ) : (
                  <PhoneIcon width={37} height={37} style={{marginRight: 16}} />
                )}
              </View>
              <Text style={styles.phoneText}>{contactNumber}</Text>
            </View>
          </View>
          <GradientButton title={buttonLabel} onPress={handleContactPress} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.primary,
    fontSize: 24,
    fontFamily: Fonts.Bold,
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    color: Colors.black,
    fontFamily: Fonts.Medium,
    marginBottom: 8,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  iconWrapper: {
    marginRight: 12,
  },
  icon: {
    width: 37,
    height: 37,
  },
  phoneText: {
    fontSize: 26,
    color: Colors.black,
    fontFamily: Fonts.Medium,
  },
});
export default ActivationRequestSuccess;