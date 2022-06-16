//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button, TouchableOpacityBase ,TouchableOpacity} from 'react-native';
import {logoutUser} from "../api/auth-api"

// create a component
const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image style={styles.img}  source={require('../Logo/profile-icon.png')}/>
                <Text style={styles.name} > Azeem</Text>
                
            </View>
            <View style={{alignItems:'flex-end',marginRight:10}}>
            <Text  > Edit</Text>
              </View>
            <View style={{marginHorizontal:15,marginVertical:10}}>
            <View style={{marginTop:6,borderBottomWidth:0.5}} >
            <Text style={styles.name} > Name</Text>
            <Text style={styles.namesub}  > Azeem sarwar</Text>
            </View>
            <View  style={{marginTop:6,borderBottomWidth:0.5}}>
            <Text style={styles.name} > Email</Text>
            <Text style={styles.namesub} > azem@gmail.com</Text>
            </View>
            <View style={{marginTop:6,borderBottomWidth:0.5}}>
            <Text style={styles.name} > Contacts</Text>
            <Text style={styles.namesub} > 030234567</Text>
            </View>
            <View style={{marginTop:6,borderBottomWidth:0.5}} >
            <Text style={styles.name} > Propose</Text>
            <Text style={styles.namesub} > Buyer/Seller</Text>
            </View>
            <View style={{marginTop:6,borderBottomWidth:0.5}} >
            <Text style={styles.name} > Rating</Text>
            <Text style={[styles.namesub,styles.edit]} > *******</Text>
            </View>
            </View>
            <View style={styles.view2}>
            
                <TouchableOpacity style={styles.appButtonContainer}  onPress={()=>{ 
                    logoutUser()
                    navigation.navigate("Auth");
                }}  >
                <Text style={styles.appButtonText}>Log Out</Text>
                </TouchableOpacity>
            
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    container: {
        flex:1,
      
        backgroundColor:'#fff'
    
    },
    view1:{
      
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5F5F5',
       borderRadius:16
    },
    view2:{
        marginVertical:30,
        marginRight:50,
        marginLeft:50,
        
    }, 
    img:{ width: 145, height: 145,marginHorizontal:10,marginVertical:10,
    } ,
    header:{
        height:90,
        flexDirection:'row',
    },
   name:{
       fontSize:15,
       fontWeight:'bold',
       marginTop:5,
    },
    ButtonLog:{
        
         backgroundColor:'blue'

    },
    card: {
       
        width:'100%',
        height:'10%',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 1,
        marginVertical: 3,
        borderWidth:0.5,
        borderBottomColor:'#000 '
      },
      namesub:{
          paddingVertical:4
          
      },
      appButtonContainer: {
        elevation: 10,
        backgroundColor: '#87ceeb',
        borderRadius: 20,
        marginHorizontal: 10,
        height: 45,
        justifyContent: 'center',
        marginVertical: 30,
      },
      appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
      },
     

});

//make this component available to the app
export default Profile;
