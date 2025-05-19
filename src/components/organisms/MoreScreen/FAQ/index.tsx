import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const FAQ_DATA = [
  {
    question: 'How do I track my vehicle in real-time?',
    answer: 'You can track your vehicle in real-time using the tracking screen in the app.',
  },
  {
    question: 'What is Safe Parking Mode and how does it work?',
    answer: 'Safe Parking Mode helps you monitor your parked vehicle and receive alerts if it moves.',
  },
  {
    question: 'I’ve purchased a GPS device. How do I activate my account?',
    answer: 'Please follow the activation instructions provided with your device or contact support.',
  },
  {
    question: 'How do I renew or upgrade my subscription?',
    answer: 'Go to the Plans section in the app to renew or upgrade your subscription.',
  },
  {
    question: 'What should I do if the GPS location is not updating?',
    answer:
      'Ensure your vehicle is in an open area with good network. You can also try refreshing the map using the refresh icon on the tracking screen.',
  },
];

const FAQScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const renderItem = ({ item, index }: { item: typeof FAQ_DATA[0]; index: number }) => {
    const isExpanded = expandedIndex === index;
    return (
      <View>
        <TouchableOpacity
          style={styles.questionRow}
          onPress={() => setExpandedIndex(isExpanded ? null : index)}
          activeOpacity={0.7}
        >
          <Text style={[styles.question, isExpanded && styles.questionActive]}>
            {item.question}
          </Text>
          <Text style={[styles.chevron, isExpanded && styles.chevronActive]}>
            {isExpanded ? '˄' : '>'}
          </Text>
        </TouchableOpacity>
        {isExpanded && (
          <Text style={styles.answer}>{item.answer}</Text>
        )}
        <View style={styles.divider} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={FAQ_DATA}
        renderItem={renderItem}
        keyExtractor={(_, idx) => idx.toString()}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  questionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 18,
    justifyContent: 'space-between',
  },
  question: {
    fontSize: 18,
    color: '#222',
    fontFamily: 'Inter-Medium',
    flex: 1,
  },
  questionActive: {
    color: '#7a1740',
    fontWeight: 'bold',
  },
  chevron: {
    fontSize: 22,
    color: '#222',
    marginLeft: 12,
    fontWeight: 'bold',
  },
  chevronActive: {
    color: '#7a1740',
    transform: [{ rotate: '180deg' }],
  },
  answer: {
    fontSize: 16,
    color: '#444',
    paddingHorizontal: 18,
    paddingBottom: 12,
    fontFamily: 'Inter-Regular',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 12,
  },
});

export default FAQScreen;