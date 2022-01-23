//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const header = () => {
    return (
        <View style={styles.container}>
            <Image style={{ width:90,height:80 }} source={require("../Logo/Applogo.jpeg" , )}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop:15,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

//make this component available to the app
export default header;
