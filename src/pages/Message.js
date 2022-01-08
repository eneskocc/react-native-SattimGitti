import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList ,Image, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const  Message=props=> {
      const {navigation,onPress}=props;
            return (
                  <View style={styles.container}>
                              <FlatList
                              data={[
                              {key: 'Devin Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Evet',date:'01:22'},
                              {key: 'Dan Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Tamamdır kanka',date:'01:22'},
                              {key: 'Dominic Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Nice yılllara beyler',date:'01:21'},
                              {key: 'Jackson Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Evet',date:'01:12'},
                              {key: 'James Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Evet artık full davazlı olduk',date:'Dün'},
                              {key: 'Joel Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Evet',date:'Dün'},
                              {key: 'John Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Bereket versin iyiydi',date:'Cuma'},
                              {key: 'Jillian Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Ucuza bulamassın ki',date:'Perşembe'},
                              {key: 'Jimmy Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Bursa merkezdeymiş',date:'Perşembe'},
                              {key: 'Julie Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Evet',date:'Perşembe'},
                              {key: 'Joel Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Bursa merkezdeymiş',date:'Carşamba'},
                              {key: 'John Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Evet',date:'Carşamba'},
                              {key: 'Jillian Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Evet',date:'Carşamba'},
                              {key: 'Jimmy Koç',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Bursa merkezdeymiş',date:'Salı'},
                              {key: 'Julie Koçpyt',profile:'https://reactnative.dev/img/tiny_logo.png',message:'Evet',date:'Salı'},
                              ]}
                              renderItem={({item}) => 
                              <TouchableOpacity style={styles.MessageBox} onPress={onPress}>
                                    <Image
                                          style={styles.profileImage}
                                          source={{
                                          uri: item.profile,
                                          }}
                                    />
                                    <View style={styles.MessageBoxInternal}>
                                          <Text style={styles.item}>{item.key}</Text>
                                          <Text style={styles.item1}>{item.message}</Text>
                                    </View>
                                    <Text style={styles.itemDate}>{item.date}</Text>
                              </TouchableOpacity>
                              
                        }
                              />
                  </View>
            )
}


const styles = StyleSheet.create({
      container: {
       flex: 1,
       backgroundColor:'#ffffff'
      },
      item: {
        fontSize: 19,
        color:'#191919'
        
      }, 
      item1: {
            padding: 4,
            fontSize: 12,
            color:'#697488'
      },
      MessageBox:{
            flexDirection:'row',
            paddingHorizontal:20,
            paddingVertical:15,
            borderBottomWidth:0.5,
            marginVertical:4,
            backgroundColor:'#ffffff'
      },
      MessageBoxInternal:{
            
      },
      profileImage: {
            width: 40,
            height: 40,
            borderRadius:20,
            marginHorizontal:10,
      },
      itemDate:{
            padding: 10,
            fontSize: 16,
            height: 44,
            position:'absolute',
            right:0,
            top:'30%',
      },
});
export default Message;
