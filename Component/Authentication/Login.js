import React,{Component} from 'react';
import {TouchableHighlight,Image,StyleSheet,Dimensions,Text,View,TextInput} from 'react-native';
import Meteor from 'react-native-meteor';
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
 input:{
  backgroundColor:'white',
  width:'80%',
  borderRadius:15,
  height:50,
  margin:15,
  paddingLeft:20,
  fontSize:17
 } ,
 buttonLogin:{
  backgroundColor:'grey',
  width:'80%',
  height:50,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:20
 },
 loginText:{
   color:'white',
   fontSize:20
 },
 logoImage:{
    width:150,
    height:150
 },
 switchContainer:{
  backgroundColor:'white',
 },
 backToRegister:{
  marginTop:10,
  width:'80%',
  height:50,
  justifyContent:"center",
  alignItems:"center",
 },
 registerText:{
  color:'white',
  textDecorationLine:"underline"
},
});
export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {email: '',password:''};
  }
  handleSubmit() {
    // Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
		// 	console.log('Login callback', err);
		// 	if (err) {
		// 		this.setState({error: err.reason});
		// 	} else {
		// 		this.setState({error: ''});
		// 	}
    // });
    console.log('login');
  }
  render(){
    
    return(
      <View style={styles.container }>
              <Image style={styles.logoImage} source = {require('../../img/logo.png')} />
              
              <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
              />
              <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
              />

              <TouchableHighlight style={styles.buttonLogin} onPress={this.handleSubmit}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.backToRegister} onPress={this.props.toggleRegister}>
                    <Text style={styles.registerText} >Register</Text>
              </TouchableHighlight>
      </View>
      
    )
    
  }
}

