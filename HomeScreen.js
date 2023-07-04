import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfilePicture from './ProfilePicture';
// import { get, post } from '../Utils/apiUtils';
// import { formatDate } from '../Utils/dateUtils';
// import { capitalizeFirstLetter, truncateText } from '../Utils/stringUtils';

// Rest of the code for the HomeScreen component


const HomeScreen = () => {
  return (     
   <View style={styles.container}>
   <View style={styles.header}>
        <ProfilePicture />
        <Text style={styles.title}>My Card</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.transactionName}>Balance</Text>
        <Text style={styles.transactionName1}>USD $17,000.52</Text>
      </View>

        <View style={styles.card}>
        <Text style={styles.transactionTitle}>Transactions</Text>

        <View style={styles.transactionItem}>
          <Ionicons name="md-cart" size={24} color="#007AFF" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Dribble</Text>
            <Text style={styles.transactionAmount}>$60.00</Text>
          </View>
        </View>
        <Text style={styles.transactionDate}>12 Apr 2021  11:00</Text>

        <View style={styles.transactionItem}>
          <Ionicons name="md-game-controller" size={24} color="#007AFF" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Playstation</Text>
            <Text style={styles.transactionAmount}>$56.00</Text>
          </View>
        </View>
        <Text style={styles.transactionDate}>4 Apr 2021  10:11</Text>

        <View style={styles.transactionItem}>
          <Ionicons name="md-musical-notes" size={24} color="#007AFF" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Spotify</Text>
            <Text style={styles.transactionAmount}>$12.00</Text>
          </View>
        </View>
        <Text style={styles.transactionDate}>3 Apr 2021   09:23</Text>

        <View style={styles.transactionItem}>
          <Ionicons name="md-pencil" size={24} color="#007AFF" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Sketch</Text>
            <Text style={styles.transactionAmount}>$99.00</Text>
          </View>
        </View>
        <Text style={styles.transactionDate}>2 Apr 2021  11:00</Text>
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
    justifyContent: 'space-between',
    marginBottom: 16,
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
    marginBottom: 16,
    elevation: 2,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  transactionDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionName: {
    flex: 1,
    marginLeft: 8,
     fontWeight: 'bold',
  },
  transactionAmount: {
    fontWeight: 'bold',
  },
  transactionDate: {
    color: 'gray',
    marginLeft: 32,
  },
});

export default HomeScreen;
