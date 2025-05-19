import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CalendarIcon from '../assets/Calendar.svg';
import { formatDate } from '../../../common/utils';

type CalendarIconPickerProps = {
  value: Date | null;
  onChange: (date: Date) => void;
  iconColor?: string;
  iconSize?: number;
  style?: object;
  textStyle?: object;
};

const CalendarIconPicker = ({
  value,
  onChange,
  iconColor = '#333',
  iconSize = 25,
  style,
  textStyle,
}: CalendarIconPickerProps) => {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const showPicker = () => setPickerVisible(true);
  const hidePicker = () => setPickerVisible(false);

  const handleConfirm = (date: Date) => {
    hidePicker();
    onChange(date);
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={showPicker} style={styles.iconButton}>
        <CalendarIcon width={iconSize} height={iconSize} fill={iconColor} />
      </TouchableOpacity>
      {value && (
        <Text style={[styles.dateText, textStyle]}>
          {formatDate(value)}
        </Text>
      )}
      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { padding: 8 },
  dateText: { marginLeft: 12, fontSize: 16, color: '#333' },
});

export default CalendarIconPicker;