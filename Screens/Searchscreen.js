import React, { useState, useEffect } from 'react';
import { Searches } from '../Risecomponents/Searches';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

const Searchscreen = () => {
  const nav =useNavigation();
   const [text , settext]=useState('');
   const [loading,setLoading] = React.useState('')
   const [products,setProducts ] = useState([]);


  const searched=() => {
   
    firestore()
    .collection('property')
    // Filter results
    .where('location', 'in', [text])
    // Limit results
    .limit(20)
    .get()
    .then(querySnapshot => {
     console.log(querySnapshot.size)
     let data=[];
     querySnapshot.forEach(documentSnapshot=>{

       console.log("City", documentSnapshot.data());
       data.push(documentSnapshot.data())
      });
     setLoading(false);
     setProducts(data);
  

    })
  }
  useEffect(()=>{
    // console.log(products)
    searched();
  },[]);
if(loading)
{
  return<View style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
    <ActivityIndicator size="large" color="green" />
  </View>
}

  return (
   
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={te => settext(te)}
          onKeyPress={searched}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          autoFocus

        />
      

     
          <FlatList
          keyExtractor={(item,index) => index}
          data={products}
          renderItem={({item})=>{
            console.log(item.name,"    ",item?.images[0])
      return(
        <TouchableOpacity onPress={()=> nav.navigate('DetailScreen',{item:item})} >
          {/* <Text>ass</Text> */}
       <Searches name={item.name} Price={item.Price} image={item?.images[0]} Area={item.Area} location={item.location}/>
          {/* <Text> pressme</Text> */}
           </TouchableOpacity>)}}
    />
    </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    color:'#000',
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#3abeff',
    borderRadius:20,
    backgroundColor: '#FFFFFF',
  },
});

export default Searchscreen;
