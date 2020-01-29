import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Login from './Login';
import Register from './Register';
export default class Authentication extends Component{
constructor(props){
  super(props);
  this.state={
    register:false,
  }
}
toggleRegister=()=>{
  this.setState({register:!this.state.register})
}
  render(){
    return(
      <View >
          {this.state.register?<Register toggleRegister={this.toggleRegister}></Register>:<Login toggleRegister={this.toggleRegister} ></Login>}
      </View>
    )
  }
}

