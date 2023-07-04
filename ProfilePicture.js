import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ProfilePicture = () => {
  return (
    <Image
      source={require('./innocent1.jpg')}
      style={styles.profileImage}
    />
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});

export default ProfilePicture;
