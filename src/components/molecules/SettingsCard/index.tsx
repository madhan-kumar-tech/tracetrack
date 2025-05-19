import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

type ListItem = {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
};

type SettingsCardProps = {
  title: string;
  items: ListItem[];
  style?: object;
};

const SettingsCard: React.FC<SettingsCardProps> = ({ title, items, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      {items.map((item, idx) => (
        <TouchableOpacity
          key={item.label}
          style={styles.itemRow}
          onPress={item.onPress}
          activeOpacity={0.7}
        >
          <View style={styles.icon}>{item.icon}</View>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.chevron}>{'>'}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7a1740',
    marginBottom: 12,
    fontFamily: 'Inter-Bold',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0,
  },
  icon: {
    width: 28,
    alignItems: 'center',
    marginRight: 14,
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: '#222',
    fontFamily: 'Inter-Medium',
  },
  chevron: {
    fontSize: 22,
    color: '#222',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});

export default SettingsCard;
//usage
/* 
<SettingsCard
  title="Account & App"
  items={[
    { icon: <UserIcon width={24} height={24} />, label: 'My Profile', onPress: () => } },
    { icon: <LockIcon width={24} height={24} />, label: 'Change Password', onPress: () =>  },
    { icon: <CardIcon width={24} height={24} />, label: 'My Plans', onPress: () =>  },
  ]}
/>
*/
