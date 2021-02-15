import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert, Modal,KeyboardAvoidingView,ScrollView } from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
import bookDonationScreen from "../screens/bookDonationScreen";
import bookRequestScreen from "../screens/bookRequestScreen";


export const appTabNavigator = createBottomTabNavigator({
    donateBooks: {
        screen : bookDonationScreen,
        navigationOptions: {
            tabBarIcon: <Image source = {require("../assets/request-list.png")} style = {{width: 20, height: 20}}/>,
            tabBarLabel: "Donate Books",
            
            
        }
    
                 },
        bookRequest:{
            screen : bookRequestScreen,
        navigationOptions: {
            tabBarIcon: <Image source = {require("../assets/request-book.png")} style = {{width: 20, height: 20}}/>,
            tabBarLabel: "Request Books",
            
            
        }
    

        }         

})