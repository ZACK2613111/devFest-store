import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewestItem = ({ name, image, price }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <Text style={styles.name}>{name}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        <Icon name="plus-circle" size={20} color={Colors.yellow} />
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    width: 200,
    borderRadius: 10,
    marginBottom: 20,
    margin: 10, // Added margin for better spacing
    padding: 10,
  },
  image: {
    width: '100%', // Make the image cover the container
    height: 160, // Increased height
  },
  name: {
    fontSize: 16, // Adjusted font size
    fontFamily: 'DevFest',
    color: 'white',
    textAlign: 'left',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  price: {
    fontSize: 18, // Increased font size
    fontWeight: '700',
    color: Colors.blue,
    fontFamily: 'DevFest',
  },
  addButton: {
    backgroundColor: Colors.blue,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'DevFest',
    fontSize: 14, // Adjusted font size
    fontWeight: '400',
    color: 'white',
  },
});

export default NewestItem;
