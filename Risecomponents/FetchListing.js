//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList, ScrollView ,Image} from 'react-native';
import { Listings } from './Listings';
import {getProducts} from "./HouseList";
// create a component
const FetchListing = ({navigation}) => {
  var Products =getProducts();
  return (
    <View >

<FlatList
     
      keyExtractor={(item) => item.id.toString()}
      data={Products}
      renderItem={({item})=> <Listings name={item.name} price={item.price} image={item.image} Area={item.Area}  />}
    />
    </View>
  );
};

// define your styles

export default FetchListing;
