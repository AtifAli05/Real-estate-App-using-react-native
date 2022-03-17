import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../../Risecomponents/Main'; 
import Upload from '../../Screens/Upload';
import Searchscreen from '../../Screens/Searchscreen'
import Profile from '../../Screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTab=()=> {
  return (
   
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Mains') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Uploads') {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
         else if (route.name === 'SearchScr') {
          iconName = focused ? 'search-circle' : 'search-circle-outline';
        }
        else if (route.name === 'Profiles') {
          iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
        }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} /> ;
          
        },
        tabBarActiveTintColor: 'blue',
        headerShown:false,
         tabBarInactiveTintColor: 'gray',
       } ) }
       >
        <Tab.Screen name="Mains" component={Main}/>
        <Tab.Screen  name="Uploads" component={Upload}/>
        <Tab.Screen  name="SearchScr" component={Searchscreen}/>
        <Tab.Screen  name="Profiles" component={Profile} />
      </Tab.Navigator>
    
  );
}
export default BottomTab;