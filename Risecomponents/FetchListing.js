//import liraries
import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet,FlatList, ScrollView ,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Listings } from './Listings';
import {getProducts} from "./HouseList";
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

// create a component
const FetchListing = () => {
  const nav = useNavigation();
  const [loading,setLoading] = React.useState(true)

  const getProducts = () => { 
  firestore()
  .collection('property') 
  .get()
  .then(documentSnapshot => {
    console.log(documentSnapshot.docs)
    let data=[];
    documentSnapshot.forEach(doc=>{
      console.log(doc.data())
      data.push(doc.data())
    })
    setLoading(false);
      setProducts(data);
    console.log("Atif all this is all the products", data)
  });
}

  const [products,setProducts ] = useState([]);

  useEffect(()=>{
    // console.log(products)
    getProducts();
  },[]);
if(loading)
{
  return<View style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
    <ActivityIndicator size="large" color="green" />
  </View>
}
  
  return (
    <View style={{
      flex:1
    }} >
          <FlatList
          keyExtractor={(item,index) => index}
          data={products}
          renderItem={({item})=>{
            console.log(item.name,"    ",item?.images[0])
      return(
        <TouchableOpacity onPress={()=> nav.navigate('DetailScreen',{item:item})} >
          {/* <Text>ass</Text> */}
       <Listings name={item.name} Price={item.Price} image={item?.images[0]} Area={item.Area} location={item.location}/>
       </TouchableOpacity>)}}
    />
   

    </View>
  );
};

// define your styles

export default FetchListing;
