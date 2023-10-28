// Home.js
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import FieldItem from '../components/FieldItem';
import { Fields } from '../utils/Fields';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set the background to black
  },
  flatListContent: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Home;
