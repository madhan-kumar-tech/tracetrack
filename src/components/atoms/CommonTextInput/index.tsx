import React, { ReactNode }from 'react';
import { View, TextInput, StyleSheet, Text,TextInputProps } from 'react-native';
import Colors from '../../../common/Colors';
import { Fonts } from '../../../common/fonts';

interface CommonTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  rightIcon?: ReactNode;
  error?: string;
}

const CommonTextInput: React.FC<CommonTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  rightIcon,
  error,
  ...props
}) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.lightgrey}
          style={styles.input}
          {...props}
        />
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.Regular
  },
  icon: {
    marginLeft: 10,
  },
  error: {
    color: Colors.error,
    marginTop: 4,
    fontSize: 12,
  },
});

export default CommonTextInput;
