import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Uploadheader = () => {
 

  
  return (
    <Appbar.Header style={{backgroundColor:'#FFF'}}>
      <Appbar.BackAction  />
      <Appbar.Content title="AddProperty"  />
    </Appbar.Header>
  );
};

export default Uploadheader;