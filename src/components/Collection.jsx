import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../styles/colors';

const Collection = ({ title, collection, collectionImage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={collectionImage} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.collection}>{collection}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Show Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20, // Increased margin
    overflow: 'hidden',
  },
  imageContainer: {
    width: '30%',
  },
  image: {
    width: 115, // Updated width
    height: 141, // Updated height
    top: -6, // Updated position
    left: -15, // Updated position
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontFamily: 'DevFest',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.40799999237060547,
    textAlign: 'left',
    color: 'white',
  },
  collection: {
    fontFamily: 'Product Sans',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.40799999237060547,
    textAlign: 'left',
    color: 'white',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: Colors.blue,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'DevFest',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.22,
    textAlign: 'left',
    color: 'white',
  },
});

export default Collection;
