
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Authentication from './Component/Authentication/Authentication';
import Home from './Component/Home/Home';
import Meteor, {  Accounts, withTracker, MeteorListView } from 'react-native-meteor';

// Meteor.connect('ws://192.168.X.X:3000/websocket');
Meteor.connect('ws://192.168.0.151:3000/websocket');
class App extends Component{



  
  render(){
   
     return  <Authentication></Authentication>
    // return <Home></Home>

  }
}


export default App;
