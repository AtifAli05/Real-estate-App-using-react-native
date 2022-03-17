//import liraries
import React from 'react';
import Detailscreen from './Screens/Detailscreen';
import Routes from './navigation/Routes';
import app from '@react-native-firebase/app'
import FetchListing from './Risecomponents/FetchListing';
// create a component
const App = () => {
  return (
   <>
  {/* <Detailscreen/>  */}
  {/* <FetchListing/> */}
  <Routes />
   </>
  );
};

// define your styles


//make this component available to the app
export default App;
