import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Colors from '../common/Colors';

const CommonTextInput = ({ value, onChangeText, placeholder, rightIcon, error }: any) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#555"
          style={styles.input}
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
  },
  icon: {
    marginLeft: 10,
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});

export default CommonTextInput;
