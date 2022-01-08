import React, { useState } from "react";
import { Button, View ,Text,ScrollView,StyleSheet,Image,Dimensions,Picker,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const {width}=Dimensions.get('window');
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ImageScroll from "../components/ImageScroll";

const CardDetails = props => {
      const {navigation}=props;
      const [selectedValue, setSelectedValue] = useState("java");

      return (
            <ScrollView>
                  <ImageScroll />
                
                  <View style={styles.textDetayView}>
                        <View style={styles.cardProfile}>
                              <Image
                                    style={styles.profileImage}
                                    source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }}
                              />
                              <Text style={styles.text}>Go to page null</Text>
                        </View>
                        <Text style={styles.textDetay}>lorem alignItems: ' ads',adkkmskam array.forEach(element = ;
                              olsa justifyContent: 'center', const context = useContext(contextValue)
                              style=kale içinde bir kurşun ajsndkja almak lazım çok lazım elinde bir gün glecekcek
                        </Text>
                        <Picker
                              selectedValue={selectedValue}
                              style={styles.pickerTeklif}
                              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                              >
                              <Picker.Item label="12" value="java" />
                              <Picker.Item label="13" value="js" />
                              <Picker.Item label="12" value="ja1va" />
                              <Picker.Item label="13" value="js1" />
                              <Picker.Item label="12" value="ja12va" />
                              <Picker.Item label="13" value="js12" />
                              <Picker.Item label="13" value="js" />
                              <Picker.Item label="12" value="ja1va" />
                              <Picker.Item label="13" value="js1" />
                              <Picker.Item label="12" value="ja12va" />
                              <Picker.Item label="13" value="js12" />
                        </Picker>
                        <TouchableOpacity 
                        style={styles.ButtonBox}>
                              <Text style={styles.textButton}>Teklif ver</Text>
                              <MaterialCommunityIcons name="offer" size={44} style={styles.icon}/>
                        </TouchableOpacity>
                  </View>
            </ScrollView>
            
            
      );
};
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
      cardProfile:{
            width:'100%',
            flexDirection:'row',
            marginHorizontal:10,
            marginVertical:15,
      },
      text:{
            fontSize:33,
            marginTop:5,
      },
      textDetayView:{
            backgroundColor:'rgb(255, 255, 255)',
            paddingHorizontal:15,
            paddingVertical:17,

      },
      textDetay:{
            fontSize:17,
      },
      pickerTeklif:{
            width:'100%',
      },
      ButtonBox:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ffd301',
            borderRadius:10,
            padding:7,
      }, textButton:{
            fontSize:24,
            marginHorizontal:20,
            color:'#5d3ebc',
      },
      icon:{
            color:'#5d3ebc',
      },
});

export default CardDetails;