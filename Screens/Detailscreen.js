//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// create a component
const Detailscreen = () => {
    const nav = useNavigation();
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView>
            <View style={{marginHorizontal:5,alignItems:'center',height:300,}} >
           <Image style={styles.image} source={require('../images/houe.jpg')} resizeMode="contain" />
           </View>
           <View style={{marginTop:10,marginHorizontal:10}}>
               <Text style={styles.title}>I get sample error, because I forgot style Image with I get sample error, because I forgot style Image with </Text>
           </View>
           <View style={styles.map} >
                <TouchableOpacity style={styles.button} >
                    <Text>View Location on Map</Text>
                    </TouchableOpacity>
           </View>
           <View style={{marginHorizontal:15}}>
           <Text style={{fontWeight:'bold',color:'#000',marginVertical:10}}>Details</Text>
           </View>
           <View style={{justifyContent:'space-around',flexDirection:'row',marginVertical:10}} >
           <Text style={{fontWeight:'bold'}}>Property Id</Text>
           <Text style={{fontWeight:'bold'}}>1234567</Text>
           </View>
           <View style={{justifyContent:'space-around',flexDirection:'row',marginVertical:10}} >
           <Text style={{fontWeight:'bold'}}>Price</Text>
           <Text style={{fontWeight:'bold'}}>100000</Text>
           </View>
           <View style={{justifyContent:'space-around',flexDirection:'row',marginVertical:10}} >
           <Text style={{fontWeight:'bold'}}>Area</Text>
           <Text style={{fontWeight:'bold'}}>1345 yd/sq</Text>
           </View>
           <View style={{justifyContent:'space-around',flexDirection:'row',marginVertical:10}} >
           <Text style={{fontWeight:'bold'}}>Purpose</Text>
           <Text style={{fontWeight:'bold'}}>For Rent</Text>
           </View>
           <View style={{justifyContent:'space-around',flexDirection:'row',marginVertical:10}} >
           <Text style={{fontWeight:'bold'}}>City</Text>
           <Text style={{fontWeight:'bold'}}>Islamabad</Text>
           </View>
           <View style={{marginHorizontal:15,marginTop:10}}>
           <Text style={{fontWeight:'bold',color:'#000',}}>Description</Text>
           <Text style={{marginTop:5}}>I get sample error, because I forgot style Image with I get sample error, because I forgot style Image with 
           I get sample error, because I forgot style Image with I get sample error, because I forgot style Image with </Text>
           </View>
           <View style={{alignItems:'center', marginTop:10}} >
           <TouchableOpacity style={styles.callbtn}>
           <Text style={{fontWeight:'bold'}} >Call</Text>
           </TouchableOpacity>
           </View>
           </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image:{
       alignItems:'center',
       height:'100%',
       width:'100%',
       borderRadius:10
    },
    title:{
        fontWeight:'bold',
        fontSize:15,
        marginHorizontal:5,
        color:'#000'
    },
    map:{
        marginHorizontal:15,
        marginTop:20,
        marginBottom:10,
    },
        button: {
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            padding: 10,
            height:40,
            width:200,
            borderRadius:10        
          },
    callbtn:
        {   height: 40, 
            width:70 , 
            backgroundColor:'#3abeff',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10
        }
    
});

//make this component available to the app
export default Detailscreen;
