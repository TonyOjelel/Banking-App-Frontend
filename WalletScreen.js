import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfilePicture from './ProfilePicture';

const WalletScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <ProfilePicture />
        <Text style={styles.title}>My Wallet</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.balance}>Available Balance</Text>
        <Text style={styles.amount}>USD $17,000.52</Text>
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
    alignItems: 'center',
  },
  balance: {
    fontSize: 18,
    marginBottom: 8,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WalletScreen;
