import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity, } from 'react-native';
import { getProducts } from './HouseList';
import {useNavigation} from '@react-navigation/native';

export function Listings({name, Price, image , Area ,Description,location}) {
   const nav = useNavigation();
   let images=image!=undefined?{uri:image}:require('../images/houe.jpg');
  return (
    <View>

    <View style={styles.card}  >

      <View style={{flexDirection:'row' }}   >
      <Image
        style={styles.image}
        source={images}
      />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Rs {Price}</Text>  
          <Text>Area {Area} sq/yd</Text>
          <Text>{location}</Text>
          
      </View>
      </View>

    </View>
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
  image: {
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