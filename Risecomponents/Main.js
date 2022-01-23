//import liraries
import React, { Component } from 'react';
import { View,FlatList, Text, StyleSheet , Button ,SafeAreaView ,Image, ScrollView ,TouchableOpacity, TextInput,useState,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import COLORS from '../COLORS/COLORS';
// create a component
const Main = ({navigation}) => {
    const nav =useNavigation();
    const CategoryList=()=>{
        const[selectedcategory,setselectedcategory]=React.useState(0);
        const category=[ 'Popular' , 'Recommended' , 'Nearest']
        return(
            <TouchableOpacity style={styles.category} >
                {category.map((list , index )=> (
                   <TouchableOpacity key={index}  onPress={ ()=> {setselectedcategory(index);nav.navigate('FetchListings') }} >
                       <Text style={[styles.Listitems , index==selectedcategory 
                        && styles.ActiveCategoryList]}>{list}</Text>
               </TouchableOpacity> 
                ))}
            </TouchableOpacity>
        )};
    const OptionList=()=>{
        
        const list=[
            {title:'Buy A house' , img:require('../images/houe.jpg' )},
            {title:'Rent A home' ,img:require('../images/houe.jpg' )}
        ];
            
        return(
            <View style={styles.optionList}>
                
                {list.map(( option, index )=>(
                    <View style={styles.listcard} key={index}>
                        <Image style={{height:160,width:125,borderRadius:10}} source={option.img}/>
                        <Text style={{ alignItems:'center', marginTop:10,fontSize:15, }}>{option.title}</Text>
                </View>
                ))}
    
            </View>
        );
    };
    
    const house=[
        {title:'Buy A Furnished' , img:require('../images/houe.jpg' )},
        {title:'Buy A plot' , img:require('../images/houe.jpg' )},
        {title:'Buy A house' , img:require('../images/houe.jpg' )}];
    
    const Card=({house})=>{ 
        return(
            <View style={styles.card}>

                <Pressable  >
                    <View style={{marginLeft:10,marginTop:10 }}>
                    <Image style={{height:150, width:300 , borderRadius:10 }} source={house.img}/>
                    </View>
                   <Text style={{marginTop:5, fontSize:15,fontWeight:'bold',marginLeft:5}}> Write something  </Text>
                </Pressable>
            </View>
            
        )
    };
    return (
       <SafeAreaView style={{flex:1,ScrollView:'Vertical',backgroundColor:'#FFFFFF' }}>
           <View >
                    <View style={styles.header}>
                        <View>
                            <Text style={{color:COLORS.grey}} > Location  </Text>
                            <Text style={{color:COLORS.dark , fontSize:20,}} > Canada  </Text>
                        </View>
                        <View >
                            <Image source={require('../images/profile.png')}
                             style={styles.image} />
                        </View>
                        </View>
                        <ScrollView>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10, }}>
                                <View style={styles.search}>
                                   <TextInput placeholder="Search Adress,Location,City"
                                   style={{color:COLORS.grey,backgroundColor:COLORS.white,height:38, width: 250,borderColor:COLORS.dark,borderRadius:20,borderWidth:1}}/>
                                </View>
                                {/* <View style={styles.sortbtn}></View> */}
                                </View>
                                <OptionList/>
                               <CategoryList/>
                               <FlatList
                               data={house}
                               renderItem={({item})=> (<TouchableOpacity onPress={()=>(item)} >
                                   <Card house={item}/>
                                   </TouchableOpacity>)}
                               />
                        </ScrollView>   
                </View>                           
        </SafeAreaView>
    );
};
// define your styles
const styles = StyleSheet.create({
    header: {
        flexDirection:'row',
        paddingTop:10,
        paddingHorizontal:20,
        justifyContent:'space-between',
    },
    image:{
        height:50,
        width:50,
        borderRadius:25,
    },
    search:{
        paddingTop:5,
        paddingHorizontal:20,
        
    },
    sortbtn:{
        backgroundColor:COLORS.dark,
        height:32,
        width:30,
        borderRadius:10,
        marginRight:27,
        marginTop:18,
    },
    optionList:{
        flexDirection:'row',
        marginTop:25,
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    listcard:{
        height:210,
        width:125,
        elevation:15,
        backgroundColor:COLORS.white,
        borderRadius:10,
        paddingTop:5,
       alignItems:'center'
    },
    category:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:30,
        marginTop:25,
    },
    ActiveCategoryList:{
        color:COLORS.SKYBLUE,
        borderBottomWidth:1,
        paddingBottom:5,
    },
    Listitems:{
        fontSize:15,
        fontWeight:'bold',
        color:COLORS.grey 
    },
    card:{
        // display:'flex',
        height:200,
        backgroundColor:COLORS.white,
        width:320,
         elevation:10,
        marginTop:20,
        marginLeft:47,
        borderRadius:18,
        marginHorizontal:20,
    },

});


export default Main;
