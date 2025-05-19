import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {CalendarInput} from '../../molecules/CalendarInput'; // Your reusable calendar input
import GradientButton from '../../atoms/GradientButton';
import DownArrowIcon from '../../assets/down_arrow.svg'; // Your SVG down arrow

type ReportDownloadProps = {
  description: string;
  vehicles: { label: string; value: string }[];
  selectedVehicle: string;
  onSelectVehicle: () => void;
  date: Date | null;
  onDateChange: (date: Date) => void;
  fileTypes: { label: string; value: string }[];
  selectedFileType: string;
  onSelectFileType: () => void;
  onDownload: () => void;
};

const ReportDownload: React.FC<ReportDownloadProps> = ({
  description,
  vehicles,
  selectedVehicle,
  onSelectVehicle,
  date,
  onDateChange,
  fileTypes,
  selectedFileType,
  onSelectFileType,
  onDownload,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>

      {/* Vehicle Dropdown */}
      <TouchableOpacity style={styles.dropdown} onPress={onSelectVehicle} activeOpacity={0.7}>
        <Text style={styles.dropdownText}>
          {vehicles.find(v => v.value === selectedVehicle)?.label || 'Select Vehicle'}
        </Text>
        <DownArrowIcon width={28} height={28} />
      </TouchableOpacity>

      {/* Date Picker */}
      {/* <Text style={styles.label}>Select Date</Text> */}
      <CalendarInput
        value={date}
        onChange={onDateChange}
        containerStyle={styles.calendarInput}
        inputStyle={styles.calendarInputText}
      />

      {/* File Type Dropdown */}
      <TouchableOpacity style={styles.dropdown} onPress={onSelectFileType} activeOpacity={0.7}>
        <Text style={styles.dropdownText}>
          {fileTypes.find(f => f.value === selectedFileType)?.label || 'Select type of file to download'}
        </Text>
        <DownArrowIcon width={28} height={28} />
      </TouchableOpacity>

      {/* Download Button */}
      <GradientButton
        title="DOWNLOAD"
        style={styles.downloadBtn}
        textStyle={styles.downloadBtnText}
        onPress={onDownload}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7a1740',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Inter-Bold',
  },
  description: {
    fontSize: 18,
    color: '#222',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'Inter-Regular',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ece8f3',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 22,
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 20,
    color: '#7a1740',
    fontFamily: 'Inter-Bold',
  },
  label: {
    fontSize: 18,
    color: '#7a1740',
    marginBottom: 8,
    marginLeft: 2,
    fontFamily: 'Inter-Medium',
  },
  calendarInput: {
    backgroundColor: '#ede9f6',
    borderRadius: 10,
    marginBottom: 22,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  calendarInputText: {
    fontSize: 20,
    color: '#888',
    fontFamily: 'Inter-Regular',
  },
  downloadBtn: {
    marginTop: 24,
    borderRadius: 8,
    paddingVertical: 18,
  },
  downloadBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
});

export default ReportDownload;
/*
<ReportDownload
  description={
    "This report includes your vehicle running distance\nIdle time, Parked time, Moving time and\nOverspeed alerts"
  }
  vehicles={[
    { label: 'Toyota Innova Crysta   TN 19 A 4567', value: '1' },
    // ...other vehicles
  ]}
  selectedVehicle={'1'}
  onSelectVehicle={() => {}}
  date={null}
  onDateChange={date => {}}
  fileTypes={[
    { label: 'PDF', value: 'pdf' },
    { label: 'Excel', value: 'excel' },
  ]}
  selectedFileType={'pdf'}
  onSelectFileType={() => {}}
  onDownload={() => {}}
/>

*/