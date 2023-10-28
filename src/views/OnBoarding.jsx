import React, { useRef, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import OnBoardingImage from '../../assets/images/utils/OnBoarding.png';
import BottomImage from '../../assets/images/utils/1.png';
import { Colors } from '../styles/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OnBoarding = ({ navigation }) => {
  const containerHeight = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  const handleButtonPress = () => {
    // Navigate to your TabNavigator or the desired screen
    navigation.navigate('TabNavigator');
  };

  useEffect(() => {
    // Animate the container height
    Animated.timing(containerHeight, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    // Animate the button opacity
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
      delay: 500,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={OnBoardingImage} style={styles.backgroundImage} resizeMode="contain" />
      <Image source={BottomImage} style={styles.bottomImage} resizeMode="cover" />
      <View style={[styles.overlay, { height: containerHeight.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }]}>
        <View style={styles.contentContainer}>
          <Text style={styles.descriptionText}>
            Get <Text style={styles.blueText}>devfest</Text> items from our Amazing store. Don't miss the New Offers.
          </Text>
          <Pressable style={[styles.button, { opacity: buttonOpacity }]} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Get Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'flex-end', // Align to the bottom
    paddingBottom: windowHeight * 0.25, // Adjust this value to move it up
  },
  backgroundImage: {
    flex: 1,
    height: '70%',
    width: '100%',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  contentContainer: {
    position:'absolute',
    width: '80%',
    backgroundColor: Colors.secondary,
    padding: 20,
    borderRadius: 10,
    marginHorizontal:20,
    alignItems: 'center',
    },
  descriptionText: {
    fontFamily: 'DevFest',
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'left',
    margin: 20,
  },
  blueText: {
    color: Colors.blue,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.blue,
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'DevFest',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomImage: {
    position: 'absolute',
    width: '100%',
    height: '33%',
    bottom: 0,
  },
});

export default OnBoarding;
