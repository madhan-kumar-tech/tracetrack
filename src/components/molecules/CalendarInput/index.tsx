import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CalendarIconPicker from '../../atoms/CalendarIconPicker';
import { formatDate } from '../../../common/utils';

type CalendarInputProps = {
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
  containerStyle?: object;
  inputStyle?: object;
};

export const CalendarInput = ({
  value,
  onChange,
  placeholder = 'DD/MM/YYYY',
  containerStyle,
  inputStyle,
}: CalendarInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text>
        Select Date
      </Text>  
      <TextInput
        style={[styles.input, inputStyle]}
        value={value ? formatDate(value) : ''}
        placeholder={placeholder}
        placeholderTextColor="#888"
        editable={false}
        pointerEvents="none"
      />
      <CalendarIconPicker
        value={value}
        onChange={onChange}
        iconColor="#6d1740"
        iconSize={40}
        style={styles.iconContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ede9f6',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 32,
    color: '#1a1a1a',
    fontFamily: 'Inter-Regular',
    letterSpacing: 1,
  },
  iconContainer: {
    marginLeft: 12,
    padding: 0,
  },
});

