import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';


import Input from '../components/Input';
import MyButton from '../components/MyButton';

export default class LoginForm extends Component {
      render() {
            return (
                  <View style={styles.container}>
                        <Text style={styles.signInText}> Sign in </Text>
                        <Input 
                        returnKeyType={"next"}
                        autoCapitalize='none'
                        placeholder='Username'
                        onSubmitEditing={()=>this.passwodInput.focus()}
                        />
                        <Input 
                        returnKeyType={"go"}
                        secureTextEntry={true}
                        placeholder='Password'
                        inputRef={input =>this.passwodInput=input}

                        />
                        <MyButton 
                        textColor={"#4c3298"}
                        bgColor={"#ffd301"}
                        text={"Sign in"}/>
                  </View>
            );
      }
}
const styles = StyleSheet.create({
      container:{

      },
      signInText:{
            fontSize:15,
            marginVertical:14,
            color:'#333',

      },
});