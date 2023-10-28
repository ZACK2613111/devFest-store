import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../styles/colors'; // Import your color styles
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use your choice of Icon library

const SpecialOffer = ({ discount, image, name, price }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />

      <View style={styles.contentContainer}>
        <View style={styles.innerContent}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
            <Icon name="plus-circle" size={20} color={Colors.yellow} />
          </View>
        </View>
      </View>

      <View style={styles.discountContainer}>
        <Text style={styles.discount}>{discount}</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    marginBottom: 10,
    borderRadius: 10,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: "90%",
    width: '50%',
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  innerContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: -0.41,
    textAlign: 'center',
    fontFamily: 'DevFest',
    color: 'white',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: 0.2,
    textAlign: 'center',
    color: Colors.blue,
    fontFamily: 'DevFest',
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  discount: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.22,
    textAlign: 'left',
    color: Colors.yellow,
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  buyButtonText: {
    fontFamily: 'DevFest',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0.2,
    textAlign: 'center',
    color: 'white',
  },
});

export default SpecialOffer;
