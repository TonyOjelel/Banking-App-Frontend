import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfilePicture from './ProfilePicture';

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <ProfilePicture />
        <Text style={styles.title}>Statistics</Text>
      </View>
      <View style={styles.card}>
      <View style={styles.statContainer}>
    <Text style={styles.statLabel}>Total Transactions:</Text>
    <Text style={styles.statValue}>100</Text>
  </View>
  <View style={styles.statContainer}>
    <Text style={styles.statLabel}>Total Income:</Text>
    <Text style={styles.statValue}>$10,000</Text>
  </View>
  <View style={styles.statContainer}>
    <Text style={styles.statLabel}>Total Expenses:</Text>
    <Text style={styles.statValue}>$5,000</Text>
  </View>
  <View style={styles.statContainer}>
    <Text style={styles.statLabel}>Avg. Transaction Amount:</Text>
    <Text style={styles.statValue}>$100</Text>
  </View>
  <View style={styles.statContainer}>
    <Text style={styles.statLabel}>Largest Transaction:</Text>
    <Text style={styles.statValue}>$500</Text>
  </View>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
 header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
     justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
     backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  statValue: {
    fontSize: 16,
    color: '#333',
  },
});

export default StatisticsScreen;
