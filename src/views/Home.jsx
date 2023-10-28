// Home.js
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Header from '../components/Header';
import FieldItem from '../components/FieldItem';
// import { Fields, SpecialOffers} from '../utils';
import { Fields } from '../utils/Fields';
import { SpecialOffers } from '../utils/SpecialOffers';
import { Colors } from '../styles/colors';
import SpecialOffer from '../components/SpecialOffer';


const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList
        data={Fields}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <FieldItem Img={item.icon} title={item.fieldTitle} />
          )}
          contentContainerStyle={styles.flatListContent}
          />
      </View>
      <Text style={styles.fieldTitle}>Special Offers</Text>
      <View>
        <FlatList
        data={SpecialOffers}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <SpecialOffer discount={item.discount} image={item.image} price={item.price} name={item.name} />
          )}
          contentContainerStyle={styles.flatListContent}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set the background to black
  },
  fieldTitle: {
    fontFamily: 'DevFest',
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 22,
    margin: 10,
    color:'#FFF',
  },
  flatListContent: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Home;
