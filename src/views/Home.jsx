import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Header from '../components/Header';
import FieldItem from '../components/FieldItem';
import SpecialOffer from '../components/SpecialOffer';
import NewestItem from '../components/NewestItem';
import { Fields } from '../utils/Fields'
import { NewItems } from '../utils/NewItems'
import { SpecialOffers } from '../utils/SpecialOffers'
import { Collections } from '../utils/Collections';
import { Colors } from '../styles/colors';
import { ScrollView } from 'react-native-web';
import Collection from '../components/Collection';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.fieldsContainer}>
        <Text style={styles.fieldTitle}>Fields</Text>
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
      <View style={styles.specialOffersContainer}>
        <Text style={styles.fieldTitle}>Special Offers</Text>
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
      <View style={styles.newItemsContainer}>
        <Text style={styles.fieldTitle}>New Items</Text>
        <FlatList
          data={NewItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <NewestItem name={item.name} image={item.image} price={item.price} />
          )}
          contentContainerStyle={styles.flatListContent}
        />
      </View>

      <Text style={styles.fieldTitle}>Our Collection</Text>
      <ScrollView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.eventsContainer}>
      {Collections.map((item, index) => (
        <Collection
          key={index}
          collection={item.collection}
          title={item.collection}
          collectionImage={item.collectionImage}
        />
      ))}
    </ScrollView>
      </ScrollView>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    margin: 10,
  },
  fieldTitle: {
    fontFamily: 'DevFest',
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 22,
    margin: 10,
    color: '#FFF',
  },
    flatListContent: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  fieldsContainer: {
    marginBottom: 20,
  },
  specialOffersContainer: {
    marginBottom: 20,
  },
  newItemsContainer: {
    marginBottom: 20,
  },
});

export default Home;
