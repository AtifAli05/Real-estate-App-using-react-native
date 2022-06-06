import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  Alert,
  FlatList,
  Linking
} from 'react-native';
import React, {useRef} from 'react';
import {API_Key} from './MapsCredential';
import MapView, {
  PROVIDER_GOOGLE,
  AnimatedRegion,
  MarkerAnimated,
  Marker,
  Animated,
} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import axios from 'axios';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const {height, width} = Dimensions.get('window');
export default function MapViewScreen() {

  const mapRef = React.useRef();
  const [inArea, setInArea] = React.useState(20000);
  const [destination, setdestination] = React.useState({latitude:32.07213831612533, longitude: 73.68037836908539});
  const [nearByHospitals,setNearByHospitals] =React.useState(null);
  const [isGpsEnabled,setIsGpsEnabled] = React.useState(true);

  const [state, setState] = React.useState({
    initialRegion:null,
    
  });
  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  function GetCurrentLocation() {
    
    let initialRegion;
    Geolocation.getCurrentPosition(
      position => {
        
        initialRegion = {
          ...state,
          initialRegion: {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            ...position.coords,
          },
        };
        // mapRef.animateToRegion(initialRegion, 2000);
        mapRef.current.animateToRegion({
          ...position.coords,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        })
        setIsGpsEnabled(true);
        setState(initialRegion);
      },
      error => {
        if(error.code==2)
        {setIsGpsEnabled(false);
          Alert.alert('Enable Gps',"Please Make sure your gps is enable!",[{text:'OK',onPress:()=>{
       
        }},{text:'Cancel',onPress:()=>{}}]);}
        else
        Alert.alert('Error', error.TIMEOUT==error.code?"Please Make sure you are connected":error.message)
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    
  }
  function getNearByHospitals(lat,lng){
      var config = {
        method: 'get',
        // url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lon}&radius=${inArea}&type=hospital&keyword=cruise&key=${API_Key}`,
        url:`https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospital&location=${lat}%2C${lng}&radius=10000&key=AIzaSyDgT1yo3L2yTl2xOw3udWJLTFBgivSzmzU`,
        headers: { }
      };
      axios(config)
      .then(function (response) {
        console.log(response.data.results);
        setNearByHospitals(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const HandleDirection=(item)=>{
    setdestination({latitude:item.geometry.location.lat,longitude:item.geometry.location.lng});
  }
  React.useEffect(() => {
    if(state.initialRegion==null)
    GetCurrentLocation();
  }, []);
  React.useEffect(() => {
    if(state.initialRegion!=null)
    getNearByHospitals(destination.latitude,destination.longitude);
  }, [state]);

  return (
    <View style={styles.container}>
      
      
        <Animated
          initialRegion={state.initialRegion}
          region={state.initialRegion}
          ref={mapRef}
          followUserLocation={true}
          zoomEnabled={true}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={{zIndex:10,flex:1}}>
          

           {
              nearByHospitals&&nearByHospitals.map((hospital,index)=>{
                return <Marker 
                key={hospital.geometry.location.lng}
                coordinate={{longitude:hospital.geometry.location.lng,latitude:hospital.geometry.location.lat}}
                />
              })
            }     

            {state.initialRegion&&destination!=null&&<MapViewDirections
              origin={state.initialRegion}
              strokeWidth={3}
              strokeColor="hotpink"
              onError={(errorMessage) => {
                Alert.alert("Error", errorMessage);
              }}
              
              destination={destination}
              apikey={API_Key}
            />}
         
           {state.initialRegion!=null&&<Marker 
           
               coordinate={destination}
               />}
        </Animated>
        <View style={{backgroundColor:"transparent",zIndex:100,position: "absolute",top:10,alignSelf:'center',width:width-80,left:20}}>
        <GooglePlacesAutocomplete
      placeholder='Search'  
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        // alert("ok")
        console.log(JSON.stringify(data));
      }}
      // currentLocation={true}

      query={{
        key: API_Key,
        language: 'en',
      }}
    />

      </View>
{!isGpsEnabled&&<TouchableOpacity
    title="Refresh"
    style={{position: "absolute",bottom:10,alignSelf:'center',width:30,left:20,backgroundColor:"#fff",borderRadius:10,padding:5}}
    onPress={() => {
      GetCurrentLocation();
    }
    }
    >
    <Icon name="refresh" size={18} color="#000" />
    </TouchableOpacity>}

      <View style={{Width:width,position: 'absolute',bottom:20}}>
        <FlatList
        horizontal
        data={nearByHospitals}
        renderItem={({item})=>{

          let distance = getDistanceFromLatLonInKm(state.initialRegion.latitude,state.initialRegion.longitude,item.geometry.location.lat,item.geometry.location.lng);
          return(
            <TouchableOpacity style={styles.itemCard} onPress={()=>{mapRef.current.animateToRegion({
              longitude:item.geometry.location.lng,
              latitude:item.geometry.location.lat,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001
            })}}>
              <Text style={styles.itemCardHeading}>{item.name}</Text>
              <Text style={styles.itemCardText}>{item.formatted_address}</Text>
              <Text style={styles.itemCardText}>{item.opening_hours?.open_now?<Text style={{color:"green",fontWeight:"bold"}}>hospital is open right Now</Text>:<Text style={{color:"red",fontWeight:"bold"}}>hospital is closed right Now</Text>}</Text>
              <Text>Rating : <Text style={{color:"#12a"}}>{item.rating}</Text></Text>
              <Text>Distance : <Text style={{color:"#12a"}}>{distance.toFixed(2)}</Text>km</Text>
              <TouchableOpacity style={styles.directionButton}
              onPress={()=>HandleDirection(item)}
              >
                <Text style={{color:'#fff'}}>Direction</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )
        }}
        />
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemCard:{
    height:200,
    width:width-110,
    borderRadius:10,
    backgroundColor:"white",
    margin:10,
    padding:10
  },
  itemCardHeading:{
    fontSize:18,
    color:"#000",
    fontWeight :"bold",
    marginBottom:5
  }
  ,
  itemCardText:{
    fontSize:12,
    
  },
  directionButton:{
    backgroundColor:"#12a",
    height:40,
    width:100,
    color:'#fff',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom:10,
    right:10 
  }
});
