import React, { Component } from 'react'
import { Text, View ,ScrollView,Image,StyleSheet,Dimensions} from 'react-native'
const {width}=Dimensions.get('window');

export default class ImageScroll extends Component {
      render() {
            return (
                  <ScrollView horizontal={true}>
                        <Image
                              style={styles.urun}
                              source={{
                              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mercedes-Benz_E230_W210.jpg/1024px-Mercedes-Benz_E230_W210.jpg',
                              }}
                        />
                        <Image
                              style={styles.urun}
                              source={{
                              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mercedes-Benz_E230_W210.jpg/1024px-Mercedes-Benz_E230_W210.jpg',
                              }}
                        />
                        <Image
                              style={styles.urun}
                              source={{
                              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mercedes-Benz_E230_W210.jpg/1024px-Mercedes-Benz_E230_W210.jpg',
                              }}
                        />
                  </ScrollView>
            )
      }
}
const styles = StyleSheet.create({
      urun:{
            width:width,
            height:230,
            resizeMode: 'stretch',
      },
      profileImage: {
             width: 50,
             height: 50,
             borderRadius:25,
             marginHorizontal:10,
       },
     
 });
