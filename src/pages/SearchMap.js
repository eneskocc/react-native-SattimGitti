import MapView from 'react-native-maps';
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class SearchMap extends Component {
      render() {
            return (
                  <View>
                        <MapView
                              initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                              }}
                        />

                  </View>
            )
      }
}

const styles = StyleSheet.create({})

