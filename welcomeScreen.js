import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert, Modal,KeyboardAvoidingView,ScrollView } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: '',
      firstName: '',
      lastName : '',  
      address: '',
      contact: '',
      comfirmPassword: '',
      isModalVisible: "false"
    }
  }

showModal =()=>{
 return(
    <Modal
     animationType="fade"
     transparent={true}
     visible={this.state.isModalVisible}>
      <View
      style = {styles.modal}>
      <ScrollView style = {{width:'100%'}}>
        <KeyboardAvoidingView 
        style = {styles.keyboardAvoidingView}>
         <Text
         style = {styles.modalTitle}>Registration</Text>
        <TextInput
        
        style = {styles.formTextInput}
        placeholder = {"first name"}
        maxLength = {8}
        onChangeText = {(text)=>{
          this.setState({
            firstName:text
          })

        }}/>
        <TextInput
        
        style = {styles.formTextInput}
        placeholder = {"Last name"}
        maxLength = {8}
        onChangeText = {(text)=>{
          this.setState({
           lastName:text
          })

        }}/>

<TextInput
        
        style = {styles.formTextInput}
        placeholder = {"contact"}
        maxLength = {10}
        onChangeText = {(text)=>{
          this.setState({
            contact:text
          })

        }}/>
        <TextInput
        
        style = {styles.formTextInput}
        placeholder = {"Address"}
        multiline = {true}
        onChangeText = {(text)=>{
          this.setState({
            address:text
          })

        }}/>

<TextInput
        
        style = {styles.formTextInput}
        placeholder = {"Email"}
       keyboardType = {"email-address"}
        onChangeText = {(text)=>{
          this.setState({
            emailId:text
          })

        }}/>
        <TextInput
        
        style = {styles.formTextInput}
        placeholder = {"Password"}
        secureTextEntry = {true}
        onChangeText = {(text)=>{
          this.setState({
            password : text
          })

        }}/>

<TextInput
        
        style = {styles.formTextInput}
        placeholder = {"Confirm Password"}
        secureTextEntry = {true}
        onChangeText = {(text)=>{
          this.setState({
            confirmPassword:text
          })

        }}/>

        <View style = {styles.modelBackButton}>
          <TouchableOpacity
          style = {styles.registerButton}
          onPress = {()=>{
            this.userSignUp(this.state.emailId, this.state.password, this.state.comfirmPassword)
          }
        }>
          <Text style = {styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
         </View>

         <View style = {styles.modelBackButton}>
          <TouchableOpacity
          style = {styles.registerButton}
          onPress = {()=>{
            this.setState({'isModalVisible': false})
          }
        }>
          <Text style = {styles.registerButtonText}>cancel</Text>
          </TouchableOpacity>
         </View>
</KeyboardAvoidingView>
</ScrollView>
</View>
</Modal>            
        

 )


}
  userLogin = (emailId, password)=>{
   
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      this.props.navigatiion.navigate('donateBooks')
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }
  userSignUp = (emailId, password, confirmPassword) =>{
    if (password !== confirmPassword){
      return Alert.alert("the two passwords do not match lmao TRY AGAIN.")
    } //mwuah my skills
    else{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then(()=>{
      db.collection("users").add({
        firstName : this.state.firstName, 
        lastName : this.state.lastName,
        contact: this.state.contact,
        emailId: this.state.emailId,
        address: this.state.address
      })
      return Alert.alert("user added successfully yay",
      '',
      [
        {text: 'OK', onPress:()=> this.setState({"isModalVisible": false})}
      ]

      )
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style = {{justifyContent: "center", alignItems: "center"}}>
         {
          this.showModal()
         }

        </View>
       
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@booksanta.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  },
  modal:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffff",
    marginRight:30,
    marginLeft : 30,
    marginTop:80,
    marginBottom:80,
  },
  KeyboardAvoidingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle :{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:30,
    color:'#ff5722',
    margin:50
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  registerButton:{
    width:200,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
    marginTop:30
  },
  registerButtonText:{
    color:'#ff5722',
    fontSize:15,
    fontWeight:'bold'
  },
  cancelButton:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
})