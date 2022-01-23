import React, {useState, useRef} from 'react';
 
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
 
import PhoneInput from 'react-native-phone-number-input';
 
const PhoneNumber=()=> {
 
  const [phoneNumber, setPhoneNumber] = useState('');
 
  const phoneInput = useRef(null);
 
  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };
 
  return (
    <View style={styleSheet.MainContainer}>
 
     
 
      <PhoneInput  
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        containerStyle={styleSheet.phoneContainer}
        textContainerStyle={styleSheet.textInput}
        
      />
 
     
    </View>
  );
};
 
const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    
  },
  Details: {
    height: 40,
   marginHorizontal:10,
    backgroundColor: '#FFF',
    borderColor: 'gray',
  borderBottomWidth:2,
  },
 
  phoneContainer: {
    width: '75%',
   height:50,
 
     backgroundColor: '#FFF',
     borderColor: 'gray',
   borderBottomWidth:2,
  
  },
  textInput: {
    paddingVertical: 6,
  },
 
});
export default PhoneNumber;