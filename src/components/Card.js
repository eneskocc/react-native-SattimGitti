import React, { Component } from 'react'
import { Text, View ,StyleSheet,Dimensions,TouchableOpacity,Image,Button} from 'react-native'
const {width}=Dimensions.get('window');
import { MaterialCommunityIcons } from '@expo/vector-icons';


const  Card=props=> {
      const {navigation,onPress}=props;
      return (
            <TouchableOpacity 
            onPress={onPress}
            style={styles.card}>
                  <View style={styles.cardProfile}>
                        <Image
                              style={styles.profileImage}
                              source={{
                              uri: 'https://reactnative.dev/img/tiny_logo.png',
                              }}
                        />
                        <Text style={styles.text}>Go to page null</Text>
                  </View>
                  
                  <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mercedes-Benz_E230_W210.jpg/1024px-Mercedes-Benz_E230_W210.jpg',
                        }}
                  />
                  <Text style={styles.text}>{navigation}</Text>
                  <TouchableOpacity 
                  onPress={onPress}
                  style={styles.ButtonBox}>
                        <Text style={styles.textButton}>Teklif ver</Text>
                        <MaterialCommunityIcons name="offer" size={44} color="black" style={styles.icon}/>
                  </TouchableOpacity>
            </TouchableOpacity>
      )  
      
            
    
}

const styles = StyleSheet.create({
      card: {
        width:width-20,
       padding:15,
        marginVertical:5,
        borderRadius:15,
        backgroundColor: '#5b52bc',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        color:'rgb(250, 250, 250)',
        fontSize:33,
        marginTop:5,
      },
      ButtonBox:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ffd301',
            borderRadius:10,
            padding:7,
      },
      textButton:{
            fontSize:34,
            marginHorizontal:20,
      },
      icon:{
            
      },  
      tinyLogo: {
            width: 380,
            height: 200,
            marginVertical:15,
            borderRadius:10,
            resizeMode: 'stretch',
      },
      profileImage: {
            width: 50,
            height: 50,
            borderRadius:25,
            marginHorizontal:10,
      },
      cardProfile:{
            width:'100%',
            flexDirection:'row',
      }
});
export default Card;
