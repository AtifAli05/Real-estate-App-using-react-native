
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet ,TextInput,Pressable,TouchableOpacity, Button,ScrollView,Alert,ActivityIndicator,Dimensions} from 'react-native';
import Uploadheader from '../Screens/Uploadheader';
import PhoneNumber from '../Components/PhoneNumber';
import COLORS from '../COLORS/COLORS';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import RadioGroup from 'react-native-radio-buttons-group';
import Imagepicker from '../Components/Imagepicker';
import app from "@react-native-firebase/app";
import * as yup from 'yup';
import { Formik } from 'formik';
import firestore from '@react-native-firebase/firestore';
import storage, { firebase } from '@react-native-firebase/storage';

const {height,width} = Dimensions.get('window');

 
const secondaryStorageBucket = firebase.app().storage('gs://my-secondary-bucket.appspot.com');
// create a component
const Uploadvalidationschema=yup.object().shape({
  name: yup.string()
  .required('*Name is required').label('Name'),
  Description: yup
  .string()
  .required('*Description is required'),
  // .matches(/^\d{6,}$/, 'Password did not match'),
  email: yup
  .string()
  .email("Please enter valid email")
  .required('*Email Address is Required'),
  location: yup.string()
  .required('*Location is required').label('location'),
})
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
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [URL,setURL]=React.useState([]);



  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };
  const onPressRadiopropose = radio => {
    setradiopropose(radio);
  };
  const putStorageItem=async (item) =>{
    // the return value will be a Promise
    // "gs://realstate-94963.appspot.com"
    
    const response = await fetch(item.uri);
    const blob = await response.blob();
    var ref = storage().ref().child("Books/" + item.fileName);
    var uploadBook = ref.put(blob);
    uploadBook.on('state_changed', taskSnapshot => {
      console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
    });
    
    uploadBook.then(() => {
      console.log('Image uploaded to the bucket!');
    });
     
  }

  const uploadImage = async ({uri}) => {
    

  };
  const uploadData=async (values)=>{
    setLoading(true);
    
    
    response.assets.forEach(async({uri}) => {
      if( uri == null ) {
        return null;
      }
      const uploadUri = uri;
      let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
  
      // Add timestamp to File Name
      const extension = filename.split('.').pop(); 
      const name = filename.split('.').slice(0, -1).join('.');
      filename = name + Date.now() + '.' + extension;
  
  
      const storageRef = storage().ref(`photos/${filename}`);
      const task = storageRef.putFile(uploadUri);
  
      // Set transferred state
      task.on('state_changed', (taskSnapshot) => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
  
        
      });
  
      try {
        await task;
  
        const url = await storageRef.getDownloadURL();
        console.log(url);
        
        setURL([...URL,url]);
  
      } catch (e) {
        console.log(e);
        return null;
      }
    });

   

     
      //data is an array of urls

    if(URL.length==response.assets.length){
      values.images=URL; 
      firestore().collection('property').add(values).then((res)=>{
        console.log(res)
        Alert.alert(
          'Image uploaded!',
          'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
        );
      }).catch(err=>console.log("Erroor>>>>",err))
    }
  }

    return (
        <ScrollView>
          {loading&&<View style={{zIndex:100,height:height,width:width,position:'absolute',left:0,top:0,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator
            size={'large'}
            animating={loading}
            color={COLORS.RED}
            />
            <Text>Loading....</Text>
          </View>}
            <Formik
          validationSchema={Uploadvalidationschema}
    initialValues={{  name:'',Description:'',email:'',location:'',phone:'',images:[] }}
   onSubmit={uploadData}
  >
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors,
     
    }) => (
        <View style={styles.container}>
            <Uploadheader/>
            <View style={styles.listcard}>
           
      <View style={{flexDirection:'row'}}>
      <Icon name="location" size={15} color="#87ceeb" style={{marginTop:12}} />
            <Text style={styles.text && styles.filedName}> Location</Text>
            </View>
            <TextInput
         name="location"
         placeholder="Location" 
         style={styles.Details}
         onChangeText={handleChange('location')}
         onBlur={handleBlur('location')}
         value={values.location}
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
        onChangeText={handleChange('location')}
        onBlur={handleBlur('location')}
        value={values.location}
      />   
                </View>
            </View>

            <View style={styles.listcard}>
            <Text style={styles.text && styles.filedName}>Property Details</Text>
            <TextInput
         name="name"
         placeholder="Title"
         style={styles.Details}
         onChangeText={handleChange('name')}
         onBlur={handleBlur('name')}
         value={values.name}
       />
       <View style={{paddingTop:15}}>
        <TextInput
         name="Description"
         placeholder="Description"
         style={styles.Details}
         onChangeText={handleChange('Description')}
         onBlur={handleBlur('Description')}
         value={values.Description}
       />
       </View>
            </View>
       <View style={styles.listcard}>
           <Text style={styles.text && styles.filedName}>Contact Details</Text> 
           <TextInput
         name="Email"
         placeholder="Email"
         style={styles.Details}
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
         keyboardType="email-address"
       />
       
       <PhoneNumber
       onChangePhone={handleChange('phone')}
       phoneNumber={values.phone}
       />
           </View> 
        <View style={[styles.ImagePicker,styles.listcard]} >
        <Text style={styles.text && styles.filedName}>Property Images</Text> 
           <Imagepicker response={response} setResponse={setResponse}/>
        </View> 
        <View style={{alignItems:'center', marginTop:10}} >
           <TouchableOpacity style={styles.uploadbtn} onPress={handleSubmit}>
           <Text style={{fontWeight:'bold'}} >Upload</Text>
           </TouchableOpacity>
           </View>
        </View>
    )}
    </Formik>
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
      },
      ImagePicker:{
        height:200,
      },
      imagecard:{
        height:200,
        paddingHorizontal:10,
       marginBottom:2,
        elevation:5,
        backgroundColor:'#FFF',
        borderRadius:10,
    },
    uploadbtn:
    {   height: 40, 
        width:70 , 
        backgroundColor:'#87ceeb',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginBottom:4
        
    }
});

//make this component available to the app
export default Upload;
