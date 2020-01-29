import React, { Component } from 'react';
import {Dimensions,StyleSheet,Text,View} from 'react-native';
const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
      width:width,
      height:height,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'#2c3e50', 
      // color: 'blue',
      // fontWeight: 'bold',
      // fontSize: 30,
    },
});
export default class Home extends Component{

    render(){
        return (
        <View style={styles.container}>
            <Text>This is Home</Text>
        </View>)
    }
}