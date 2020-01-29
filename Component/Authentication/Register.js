import React,{Component} from 'react';
import {Alert,TouchableHighlight,Dimensions,StyleSheet,Text,View,TextInput} from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


const userNotEmpty = user => {
    return (user.firstname.length>0&&user.lastname.length>0&&user.emails.length>0&&user.password.length>0&&user.confirmPassword.length>0);
};
const styles = StyleSheet.create({
  container: {
    width:width,
    height:height,
    // justifyContent: "center",
    paddingTop:100,
    alignItems: "center",
    backgroundColor:'#2c3e50', 
  },
  header:{
    fontSize:25,
    color:"white",
    textDecorationLine:"underline",
    marginBottom:20,
    
  },
  inputContainer:{
    width:'100%',

    // height:50,
    marginTop:15,
    alignItems:"center",
    // fontSize:17
   },
   input:{
    borderRadius:15,
    backgroundColor:'white',
    width:'80%',
    height:50,
    paddingLeft:25,
    fontSize:17
   },
   registerButton:{
    backgroundColor:'grey',
    width:'80%',
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20
   },
   backToLogin:{
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
   error:{
     color:'red',
     fontSize:15
   }
});
class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstname:'',lastname:'',email:'',password:'',confirmPassword:'',
      error:{
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmPassword:'',
      },

    };
  }    
 
  CheckTextInput = () => {
    const{firstname,lastname,email,password,confirmPassword,comparePassword}=this.state;
    const error={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmPassword:'',
    };
    //Handler for the Submit onPress
    (firstname.length<2)? error.firstname="minimun 2 charactor required for firstname" :null;
    (lastname.length<2)? error.lastname="minimun 2 charactor required for lastname" :null;
    validEmailRegex.test(email)? null :error.email='Invalid Email Type';
    (password.length<8)? error.password="minimun 8 charactor required for password":null;
    (confirmPassword.length<8)? error.confirmPassword="minimun 8 charactor required for confirm password" :null;
    
    this.setState({error});
    
  };

  render(){
    return(
      <View style={styles.container }>
          
            <Text style={styles.header}>Register New Account</Text>
          
          <View style={styles.inputContainer}>
            <TextInput
                 style={styles.input}
                placeholder="firstname"
                onChangeText={(firstname)=>this.setState({firstname})}
                value={this.state.firstname}
                />
            <Text style={styles.error}>{this.state.error.firstname}</Text>
          </View>
          
          <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="lastname"
                onChangeText={(lastname) => this.setState({lastname})}
                value={this.state.lastname}
            />
             <Text style={styles.error}>{this.state.error.lastname}</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="email"
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
            />
            <Text style={styles.error}>{this.state.error.email}</Text>
          </View>
          
          <View style={styles.inputContainer}>
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Password"
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
            />
            <Text style={styles.error}>{this.state.error.password}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="ConfirmPassword"
                    onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                    value={this.state.confirmPassword}
            />
            <Text style={styles.error}>{this.state.error.confirmPassword}</Text>
          </View>

          <TouchableHighlight style={styles.registerButton} onPress={this.CheckTextInput}>
              <Text style={styles.registerText}>Register</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.backToLogin} onPress={this.props.toggleRegister}>
              <Text style={styles.registerText} >Back To Login</Text>
          </TouchableHighlight>
          
            

      </View>
    )
  }
}
export default Register;
