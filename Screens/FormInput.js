//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';

// create a component
const FormInput = (props) => {
const {placeholder , error} = props

    return (
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            {error ? (<Text style={{fontSize:10 , fontWeight:'bold'}}>{error}</Text>): null}
            <Text style={{fontSize:10 , fontWeight:'bold'}}>{placeholder}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default FormInput;
