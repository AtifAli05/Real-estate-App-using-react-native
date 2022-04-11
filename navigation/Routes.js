

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Screens/Signup';
import Signin from '../Screens/Signin';
import Main from '../Risecomponents/Main';
import Upload from '../Screens/Upload';
import FetchListing from '../Risecomponents/FetchListing';
import Bottomtab from './Tabnavigation/Bottomtab'
import auth from '@react-native-firebase/auth';
import DetailScreen from '../Screens/Detailscreen';


const Stack = createNativeStackNavigator();
const AuthStack=(props)=>{
  
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  
  React.useEffect(()=>{
    if(user){
      props.navigation.replace("BottomTab")
    }
  },[user]);
  return (
    <Stack.Navigator screenOptions={{headerShown:false , gestureEnabled:true, }} >
    <Stack.Screen name="Signins" options={{headerShown:false}} component={Signin} />
    <Stack.Screen name="Signups" component={Signup} />
    </Stack.Navigator>
  )
   
}
const TabBar=()=>{
  return (
    <Stack.Navigator screenOptions={{headerShown:false , gestureEnabled:true, }} initialRouteName="Tabs" >

    <Stack.Screen name="Tabs"  component={ Bottomtab}  options={{ headerShown: false }}/>
    <Stack.Screen  name="Uploads" component={Upload}/>
    <Stack.Screen name ="FetchListings" component={FetchListing}/>
    <Stack.Screen name="Upload" component={Upload}/>
    <Stack.Screen name="DetailScreen" component={DetailScreen} />
     
    </Stack.Navigator>
  )
}
const Routes =() => {
  return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false , gestureEnabled:true, }} initialRouteName="Auth" >
              <Stack.Screen name="Auth" component={AuthStack} /> 
              <Stack.Screen name="BottomTab"  component={TabBar}  options={{ headerShown: false }}/>
              {/* <Stack.Screen name ="FetchListings" component={FetchListing}/>
              <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}
          </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;