//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button } from 'react-native';
import {logoutUser} from "../api/auth-api"

// create a component
const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Image style={styles.img} source={require('../Logo/setting-icon.png')}/>
            </View> */}
            <View style={styles.view1}>
                <Image  source={require('../Logo/profile-icon.png')}/>
                <Text style={styles.name} > Name</Text>
            </View>
            <View style={styles.view2}>
                <Button onPress={()=>{
                    logoutUser()
                    navigation.navigate("Auth");
                }} title="logout" />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    container: {
        flex:1,
        display:'flex',
        justifyContent:'space-between'
    
    },
    view1:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    view2:{
        marginBottom:30,
        marginRight:50,
        marginLeft:50
    }, 
    img:{ width: 45, height: 50,marginHorizontal:10,marginVertical:10,
    } ,
    header:{
        height:90,
        flexDirection:'row',
    },
   name:{
       fontSize:15,
       fontWeight:'bold'
    },
    ButtonLog:{
        
         backgroundColor:'blue'

    }


});

//make this component available to the app
export default Profile;
