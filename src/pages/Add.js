import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class Add extends Component {
      render() {
            return (
                  <View>
                        <View style={styles.passwordContainer}>
                              <Ionicons
                                    name="ios-search"
                                    size={34}
                                    color="black"
                                    style={styles.iconStyle}
                              />
                              <TextInput
                                    style={styles.inputStyle}
                                    autoCorrect={false}
                                    placeholder="Password"
                                    value={'Ürün Ara'}
                              />

                        </View>
                  </View>
            )
      }
}

const styles = StyleSheet.create({
      passwordContainer: {
            flexDirection: 'row',
            borderColor: '#000',
            paddingBottom: 10,
            marginHorizontal:0,
            borderBottomWidth:2,
            borderColor:'rgb(76, 51, 152)',
      },
      inputStyle: {
            flex: 1,
            marginHorizontal:15,
            marginTop:15,
            fontSize:20,
      },
      iconStyle:{
            marginHorizontal:15,
            marginTop:15,
      }
});
