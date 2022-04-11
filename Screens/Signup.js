//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,Button ,TouchableOpacity, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import { Formik } from 'formik';
import Header from './Header'
import {signUpUser} from "../api/auth-api"
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('*Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('*Password is required')
     ,
    name: yup.string()
    .required('*Name is required').label('Name'),
    // phoneNumber: yup
    // .string()
    // .matches(/^\d{6,}$/, 'Enter a valid phone number')
    // .required('*Phone number is required'),
})

// create a component
const Signup = ({navigation}) => {
  const nav = useNavigation(); 
  const REGISTER=(values)=>{
    console.log(values,typeof(values))
    signUpUser(values).then(user=>{
      alert("Successfully registered")
      if(user)
      navigation.replace("BottomTab")
    }).catch(error=>{
      alert(" registration faild " + error);
    })
  }
  return (
    <View style={{flex:1,backgroundColor:'#FFF',}}>
      <Header/>
      <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10 ,color:'#87ceeb',paddingTop:5,marginVertical:20}}>CREATE ACCOUNT</Text>
    <Formik
    
   validationSchema={loginValidationSchema}
   initialValues={{ email: '', password: '' , name:''}}
   onSubmit={REGISTER}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
    
   }) => (
     <>
     <Text style={styles.filedName}>Name</Text>
     <TextInput
         name="name"
         placeholder="Name"
         style={styles.textInput}
         onChangeText={handleChange('name')}
         onBlur={handleBlur('name')}
         value={values.name}
       />
        {errors.name &&
         <Text style={styles.errormsg}>{errors.name}</Text>
        }

     <Text style={styles.filedName}> Email Address</Text>
       <TextInput
         name="email"
         placeholder="Email Address"
         style={styles.textInput}
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
         keyboardType="email-address"
       />
       {errors.email &&
         <Text style={styles.errormsg}>{errors.email}</Text>
       }
       {/* <Text style={styles.filedName}>Phone Number</Text>
        <TextInput
         name=" phoneNumber"
         placeholder=" phoneNumber"
         style={styles.textInput}
         onChangeText={handleChange(' phoneNumber')}
         onBlur={handleBlur(' phoneNumber')}
         value={values.phoneNumber}
         keyboardType="number-pad"
       />
        {errors.phoneNumber &&
         <Text style={styles.errormsg}>{errors.phoneNumber}</Text>
        } */}
       <Text style={styles.filedName}> password</Text>
       <TextInput
         name="password"
         placeholder="Password"
         style={styles.textInput}
         onChangeText={handleChange('password')}
         onBlur={handleBlur('password')}
         value={values.password}
         secureTextEntry
       />
       {errors.password &&
         <Text style={styles.errormsg} >{errors.password}</Text>
       }
        <TouchableOpacity onPress={handleSubmit} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>SIGN UP</Text>
  </TouchableOpacity>
  
  <View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'#000000'}} > Already have an account? </Text>

  <Pressable onPress={()=>nav.navigate('Signins')}>
  <Text style={{color:"#87ceeb",fontWeight:'bold',fontSize:17}} >Sign In </Text>
  </Pressable>
  
  </View>
         
     </>
   )}
 </Formik>
 </View>
  );
  
};

// define your styles
const styles = StyleSheet.create({
 
  textInput: {
    height: 45,
   marginHorizontal:10,
    backgroundColor: '#FFF',
    borderColor: '#87ceeb',
   borderWidth:2,
    borderRadius: 20,
  },
  filedName:{
    paddingLeft:30,
    fontSize:15,
    color:'#000000',
    paddingVertical:10
  },
  errormsg:{
    paddingLeft:20,
    paddingTop:3,
    fontSize:13,
    color:'red',
  },
  appButtonContainer: {
    elevation: 4,
    backgroundColor: "#87ceeb",
    borderRadius: 20,
    marginHorizontal:10,
    height:45,
    justifyContent:'center',
    marginVertical:25
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  
  
});

//make this component available to the app
export default Signup;
