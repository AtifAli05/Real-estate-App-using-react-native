//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList, ScrollView ,Image,TouchableOpacity} from 'react-native';
import { Listings } from './Listings';
import {getProducts} from "./HouseList";
import { useNavigation } from '@react-navigation/native';

// create a component
const FetchListing = () => {
  const nav = useNavigation();
  var Products =getProducts();
  return (
    <View  >
          <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={Products}
          renderItem={({item})=>{
      return(
        <TouchableOpacity onPress={()=> nav.navigate('DetailScreen')} >
       <Listings name={item.name} price={item.price} image={item.image} Area={item.Area} />
       </TouchableOpacity>)}}

    />
    </View>
  );
};

// define your styles

export default FetchListing;
