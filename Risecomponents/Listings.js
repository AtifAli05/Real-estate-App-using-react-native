import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity, } from 'react-native';
import { getProducts } from './HouseList';

export function Listings({name, price, image , Area ,}) {
  return (
    <View>

    <TouchableOpacity style={styles.card} >

      <View>

      </View>
      <View style={{flexDirection:'row' }}>
      <Image
        style={styles.thumb}
        source={image}
      />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>$ {price}</Text>
        
          <Text>{Area}</Text>
          <Text>House for Rent</Text>
          <Text>See More</Text>
        
        
      </View>

    

      </View>
    </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    elevation: 1,
    marginVertical: 3,
    marginHorizontal:5,
    borderWidth:0.5
  },
  thumb: {
    height: 140,
    borderRadius:10,
    width: '50%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 1,
  },
});