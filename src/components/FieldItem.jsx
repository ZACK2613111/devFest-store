// FieldItem.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../styles/colors';

const FieldItem = ({ Img, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={Img} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180, // Increase the width to make the image bigger
    height: 140, // Increase the height to make the image bigger
    borderRadius: 8,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    overflow: 'hidden', // Clip the image if it goes outside the container
  },
  iconContainer: {
    width: 120, // Increase the width
    height: 100, // Increase the height
  },
  icon: {
    width: 120, // Increase the width
    height: 100, // Increase the height
  },
  title: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    fontFamily: 'DevFest',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default FieldItem;
