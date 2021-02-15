import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert, Modal,KeyboardAvoidingView,ScrollView } from 'react-native';
import  { Header, Icon } from 'react-native-elements';

const myHeader = (props)=>{
    return(
        <Header
        centerComponent = {{text: props.title, style: {color: "#f4a9bb", fontSize: 20, fontWeight: "bold"}}}
        backgroundColor = "f4a9c6"
        />
        )
        
    }

    export default myHeader;