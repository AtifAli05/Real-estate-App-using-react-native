
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet ,TextInput,Pressable,TouchableOpacity, Button,ScrollView,} from 'react-native';
import Uploadheader from '../Screens/Uploadheader';
import PhoneNumber from '../Components/PhoneNumber';
import COLORS from '../COLORS/COLORS';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import RadioGroup from 'react-native-radio-buttons-group';

// create a component
const propose = [
  {
    id: '1',
    label: 'For Rent',
    value: 'option1',
    color: '#87ceeb',
    selected: true,
  },
  {
    id: '2',
    label: 'For Sell',
    value: 'option2',
    color: '#87ceeb',
    selected: false,
  },
];
const propertytype = [
  {
    id: '1',
    label: 'Residential',
    value: 'option1',
    color: '#87ceeb',
    selected: true,
  },
  {
    id: '2',
    label: 'Commercial',
    value: 'option2',
    color: '#87ceeb',
    selected: false,
  },
];
const Upload = () => {
     
  const [radioButtons, setRadioButtons] = useState(propertytype);
  const [radiopropose, setradiopropose] = useState(propose);

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };
  const onPressRadiopropose = radio => {
    setradiopropose(radio);
  };

    return (
        <ScrollView>
        <View style={styles.container}>
            <Uploadheader/>
            <View style={styles.listcard}>
           
      <View style={{flexDirection:'row'}}>
      <Icon name="location" size={15} color="#87ceeb" style={{marginTop:12}} />
            <Text style={styles.text && styles.filedName}> Location</Text>
            </View>
            <TextInput
         name="name"
         placeholder="Search Your Location " 
         style={styles.textInput}
       />
        <Text style={{paddingLeft:20 ,fontWeight:'bold' ,paddingTop:5}}>Mark your Location</Text>
      <TouchableOpacity>
              
      <View style={{flexDirection:'row',paddingLeft:20 }}>
      <Icon1 name="map-marker-alt" size={15} color="#87ceeb" style={{marginTop:11}} />
        <Text style={{fontSize:15,fontWeight:'bold',paddingLeft:5,color:'blue',marginTop:7}}>Tap Here</Text>
        </View>
        </TouchableOpacity>
            </View>
            <View style={styles.radiocard}>
            <View style={{flexDirection:'row'}}>
      <Icon1 name="landmark" size={15} color="#87ceeb" style={{marginTop:12}} />
                <Text style={styles.text && styles.filedName}>Property Type</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around' }}>
                <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
                    {/* <Text><Icon name="home" size={12} color="#87ceeb"/>Homes</Text>
                    <Text> <Icon name="document-landscape" size={14} color="#87ceeb"/>Plots</Text>
                    <Text> <Icon2 name="building-o" size={14} color="#87ceeb" style={{marginRight:3}}/>Commercial</Text> */}
                </View>
            </View>
            
            <View style={styles.radiocard}>
            <View style={{flexDirection:'row'}}>
      <Icon1 name="record-vinyl" size={15} color="#87ceeb" style={{marginTop:12}} />
                <Text style={styles.text && styles.filedName}>Purpose</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around' }}>
                <RadioGroup
        radioButtons={radiopropose}
        onPress={onPressRadiopropose}
        layout="row"
      />   
                </View>
            </View>

            <View style={styles.listcard}>
            <Text style={styles.text && styles.filedName}>Property Details</Text>
            <TextInput
         name="name"
         placeholder="Title"
         style={styles.Details}
       />
       <View style={{paddingTop:15}}>
        <TextInput
         name="name"
         placeholder="Description"
         style={styles.Details}
       />
       </View>
            </View>
       <View style={styles.listcard}>
           <Text style={styles.text && styles.filedName}>Contact Details</Text> 
           <TextInput
         name="name"
         placeholder="Email"
         style={styles.Details}
       />
       <PhoneNumber/>
           </View> 
        <View style={styles.listcard}>
        <Text style={styles.text && styles.filedName}>Property Images</Text> 
        </View>
        
        </View>
        </ScrollView>
    );
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    location:{
        paddingHorizontal:10,
    },
    listcard:{
        height:150,
        paddingHorizontal:10,
       marginBottom:4,
        elevation:5,
        backgroundColor:'#FFF',
        borderRadius:10,
        
       marginVertical:5
    },
    radiocard:{
      height:110,
      paddingHorizontal:10,
     marginBottom:4,
      elevation:5,
      backgroundColor:'#FFF',
      borderRadius:10,
     marginVertical:5
  },
    text:{
        color:COLORS.dark,
        fontSize:15,
        paddingTop:7,
     
    },
    textInput: {
        height: 40,
       marginHorizontal:10,
        backgroundColor: '#FFF',
        borderColor: 'gray',
       borderWidth:2,
        borderRadius: 20,
        
      },
      Details: {
        height: 40,
       marginHorizontal:10,
        backgroundColor: '#FFF',
        borderColor: 'gray',
      borderBottomWidth:2,
       
        
      },
      filedName:{
        paddingLeft:2,
        fontSize:15,
        color:'#000000',
        paddingVertical:10
      },
      textInput2:{
          paddingTop:10
      }
});

//make this component available to the app
export default Upload;
