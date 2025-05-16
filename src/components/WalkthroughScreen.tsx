import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import GradientButton from '../common/GradientButton';
import BackgroundImage from '../assets/background.png';
import Slide1 from '../assets/slide_img1.svg';
import Slide2 from '../assets/slide_img2.svg';
import Slide3 from '../assets/slide_img3.svg';
import Colors from '../common/Colors';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Track Live. Park Safe.',
    description:
      'Get your vehicle’s real-time location anytime, anywhere with high accuracy. Activate Safe Parking Mode when your vehicle is idle — receive instant alerts if it moves, shakes, or faces tampering while ignition is off.',
    ImageComponent: Slide1,
  },
  {
    id: '2',
    title: 'Set Zones. Stay Notified.',
    description:
      'Create custom geo-fences and get alerts when your vehicle enters or exits specific areas — perfect for tracking company vehicle movements in and out of office, factory, or designated work zones.',
    ImageComponent: Slide2,
  },
  {
    id: '3',
    title: 'Control Ignition From Anywhere',
    description:
      'Turn your vehicle’s engine OFF directly from the app. This feature adds a layer of security and control — perfect when you’re away and need to manage access remotely.',
    ImageComponent: Slide3,
  },
];

const WalkthroughScreen = () => {
  const flatListRef = useRef(null);
  const navigation = useNavigation()
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const renderItem = ({item}: any) => (
    <View style={styles.slide}>
     <Text style={styles.title}>{item.title}</Text>
      <item.ImageComponent width={372} height={244} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {backgroundColor: currentIndex === index ? '#550035' : '#ccc'},
            ]}
          />
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <GradientButton title="CREATE ACCOUNT" onPress={() => {
            navigation.navigate('CreateAccount')
        }} width={174}/>
        <GradientButton title="LOGIN" onPress={() => {
                        navigation.navigate('Login')

        }}  width={174} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  slide: {
    width: width,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 20,
    marginBottom:32,
    color: Colors.black,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.black,
    marginTop:40
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 100,
  },
  dot: {
    height: 14,
    width: 14,
    borderRadius: 7,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
});

export default WalkthroughScreen;
