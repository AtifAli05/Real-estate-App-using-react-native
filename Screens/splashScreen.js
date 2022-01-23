//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const SplashScreen = () => {
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={require("../Logo/Applogo.jpeg")}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87ceeb',
    },
    image:{
        width:90,
        height:80,
    }
});

//make this component available to the app
export default SplashScreen;
