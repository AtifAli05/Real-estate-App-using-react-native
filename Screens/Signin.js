//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as yup from 'yup';
import {Formik} from 'formik';
import {loginUser} from '../api/auth-api';
import Header from './Header';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Login} from '../redux/actions/AUTH';
 

const Signinvalidationschema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('*Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('*Password is required'),
  // .matches(/^\d{6,}$/, 'Password did not match'),
});

const Signin = ({navigation}) => {
  // const Dispatch = useDispatch();

  const nav = useNavigation();
  const Login = values => {
     loginUser(values)
      .then(user => {
        console.log('user data is hereeeeeeee' + JSON.stringify(user));
        // const atif =  Dispatch(Login(user));
        // console.log("redux data going hereeeeeeeeeee",atif);
        
      })
      .catch(error => {
        alert(' login faild ' + error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.textview}>
        {/* <Text style={styles.text}>Rise Real  </Text>
              <Text style={styles.text}>Estate </Text> */}
      </View>
      <Header />
      <View style={styles.welcomview}>
        <Text
          style={{
            fontSize: 20,
            color: '#87ceeb',
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          WELCOME BACK!
        </Text>
      </View>
      <Formik
        validationSchema={Signinvalidationschema}
        initialValues={{password: '', email: ''}}
        onSubmit={Login}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={{marginTop: 10}}>
            <Text style={styles.filedName}>Email</Text>
            <TextInput
              name="email"
              placeholder=" Email"
              style={styles.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.phoneNumber && (
              <Text style={styles.errormsg}>{errors.email}</Text>
            )}
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
            {errors.password && (
              <Text style={styles.errormsg}>{errors.password}</Text>
            )}
            <TouchableOpacity
              onPress={() => {
                handleSubmit();
              }}
              style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>SIGN IN</Text>
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#000000', alignContent: 'center'}}>
                {' '}
                or you can just sign in with{' '}
              </Text>
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.googleButtonContainer}>
              <Text style={styles.googleButtonText}>Google</Text>
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#000000'}}> Dont have an account </Text>

              <Pressable onPress={() => nav.navigate('Signups')}>
                <View style={{marginTop: 10}}>
                  <Text
                    style={{
                      color: '#87ceeb',
                      fontWeight: 'bold',
                      fontSize: 17,
                    }}>
                    Sign UP{' '}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  textview: {
    paddingTop: 20,
    paddingLeft: 10,
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  welcomview: {
    marginTop: 30,
    paddingLeft: 20,
  },
  filedName: {
    paddingLeft: 30,
    fontSize: 15,
    color: '#000000',
    paddingVertical: 17,
  },
  errormsg: {
    paddingLeft: 20,
    paddingTop: 3,
    fontSize: 13,
    color: 'red',
  },
  textInput: {
    height: 45,
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    borderColor: '#87ceeb',
    borderWidth: 2,
    borderRadius: 20,
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
  googleButtonContainer: {
    borderColor: 'grey',
    backgroundColor: '#FFF',
    borderwidth: 5,
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
  },
  googleButtonText: {
    fontSize: 18,

    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

//make this component available to the app
export default Signin;
