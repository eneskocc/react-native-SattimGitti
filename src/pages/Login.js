import React from 'react';
import { StyleSheet, Text, View ,ScrollView,KeyboardAvoidingView, TextInput,TouchableOpacity} from 'react-native';

import LoginForm from './LoginForm';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.headBackground} />
      <View>
        <View style={styles.logo0}>
          <Text style={styles.logo1}>SATTIM  </Text>
          <Text style={styles.logo2}> GİTTİ  </Text>
        </View>
        
        <Text style={styles.logoDescription}>Property & Tax Survey</Text>
      </View>
      <KeyboardAvoidingView behavior={"position"}>
      <ScrollView>
        <View style={styles.loginArea}>
          <Text style={styles.loginAreatitle}>Property Tax Server</Text>
          <Text style={styles.loginAreaDescription}>Unque Door No Eaisly Fill Your Entire Property Tax Using App </Text>
          <LoginForm />
        </View>
        
      </ScrollView>
      <View style={styles.signupArea}>
        <Text>Dont have an account?</Text>
        <TouchableOpacity><Text>Sign Up</Text></TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical:100,
  },
  headBackground: {
    position:'absolute',
    top:0,
    left:0,
    height:350,
    width:'100%',
    backgroundColor:'#4c3298',
  },
  logo0:{
   flexDirection:'row',
   textAlign: 'center',
   paddingHorizontal:40,
   marginBottom:20,
  },
  logo1:{
    textAlign:'center',
    fontSize:50,
    fontWeight:'bold',
    color:'#fafafa'
  },
  logo2:{
    textAlign:'center',
    fontSize:50,
    fontWeight:'bold',
    backgroundColor:'#fafafa',
    color:'#4c3298',
    borderRadius:20,
  },
  logoDescription:{
    textAlign:'center',
    color:'#fafafa'
  },
  loginArea:{
    textAlign:'center',
    marginHorizontal:40,
    marginVertical:40,
    backgroundColor:'#fafafa',
    padding: 20,
    borderRadius:5,
    shadowColor:'black',
    shadowOpacity:.2,
    shadowRadius:2,
    shadowOffset:{
      width:0,
      height:5,
    }

  },
  loginAreatitle:{
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        color:'#4c3298',

  },
  loginAreaDescription:{
      fontSize:11,
      textAlign:'center',
      color:'#7e868f',
      marginVertical:10,
  },
  signupArea:{
    textAlign:'center',
    alignItems:'center',
    width:'100%',
    position:'absolute',
    bottom:0,
  }
});