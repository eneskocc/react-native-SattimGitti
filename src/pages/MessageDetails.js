import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView,TextInput,Dimensions } from 'react-native'
const screenWidth = Dimensions.get("window").width;
export default class MessageDetails extends Component {
      render() {
            return (
                  <View style={styles.container}>
                        <ScrollView>
                        <View style={styles.MessageYou}>
                              <Text style={styles.MessageTextYou}>selam</Text>
                              <Text style={styles.itemDate}>12:00</Text>
                        </View>
                        <View style={styles.MessageMe}>
                              <Text style={styles.MessageText}>selam</Text>
                        </View>
                        <View style={styles.MessageYou}>
                              <Text style={styles.MessageTextYou}>selam</Text>
                              <Text style={styles.itemDate}>12:00</Text>
                        </View>
                        <View style={styles.MessageMe}>
                              <Text style={styles.MessageText}>selam</Text>
                        </View>
                        <View style={styles.MessageMe}>
                              <Text style={styles.MessageText}>selam</Text>
                        </View>
                        <View style={styles.MessageMe}>
                              <Text style={styles.MessageText}>selam</Text>
                        </View>
                        <View style={styles.MessageYou}>
                              <Text style={styles.MessageTextYou}>selam</Text>
                              <Text style={styles.itemDate}>12:00</Text>
                        </View>
                        <View style={styles.MessageMe}>
                              <Text style={styles.MessageText}>selam</Text>
                        </View>
                        <View style={styles.MessageYou}>
                              <Text style={styles.MessageTextYou}>selam</Text>
                              <Text style={styles.itemDate}>12:00</Text>
                        </View>
                        <View style={styles.MessageMe}>
                              <Text style={styles.MessageText}>selam</Text>
                        </View>
                        <View style={styles.MessageYou}>
                              <Text style={styles.MessageTextYou}>selam</Text>
                              <Text style={styles.itemDate}>12:00</Text>
                        </View>
                        <View style={styles.MessageMe}>
                              <Text style={styles.MessageText}>selam</Text>
                        </View>
                        <View style={styles.MessageYou}>
                              <Text style={styles.MessageTextYou}>selam</Text>
                              <Text style={styles.itemDate}>12:00</Text>
                        </View>
                        <View style={styles.MessageYou}>
                              <Text style={styles.MessageTextYou}>selam</Text>
                              <Text style={styles.itemDate}>12:00</Text>
                        </View>
                        
                        
                        </ScrollView>
                        <TextInput
                              style={styles.input}
                              onChangeText={'aaaa'}
                              value={'text'}
                        />
                  </View>
            )
      }
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            paddingVertical: 12,
            paddingHorizontal:10,
            backgroundColor:'#ffffff',
            width:screenWidth,
      },
      MessageMe: {
            width:'70%',
            marginHorizontal:15,
            marginVertical:5,
            paddingVertical:10,
            paddingHorizontal:15,
            borderRadius:15,
            backgroundColor:'#7849f7',
      },
      MessageYou: {
            position:'relative',
            left:'13%',
            width:'70%',
            marginHorizontal:15,
            marginVertical:5,
            paddingVertical:10,
            paddingHorizontal:15,
            borderRadius:15,
            backgroundColor:'rgb(219, 219, 255)',
            flexDirection:'row',
      },
      MessageText:{
            color:'rgb(219, 219, 255)',
            fontSize:20,
      },
      MessageTextYou:{
            color:'#7849f7',
            fontSize:20,
      },
      input: {
            height: 40,
            marginHorizontal: 10,
            marginVertical:5,
            borderWidth: 1,
            padding: 10,
            borderRadius:15,
      },
      itemDate:{
            position:'relative',
            top:'5%',
            left:165,
      }
});
