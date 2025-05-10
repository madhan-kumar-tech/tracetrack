// src/components/GradientButton.tsx
import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../common/Colors';

type GradientButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  width?: number | string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  width = 275,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.center, style]}>
      <LinearGradient
        colors={[Colors.primaryDark, Colors.primary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.button, {width}]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:16
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default GradientButton;
