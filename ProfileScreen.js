import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
      <Text style={styles.title}>My Profile</Text>
        <Image
          source={require('./innocent1.jpg')}
          style={styles.profileImage}
        />
      </View>
      
      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Innocent John</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>innocent@example.com</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>123-456-7890</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProfileScreen;
