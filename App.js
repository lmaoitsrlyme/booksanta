import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import WelcomeScreen from './screens/welcomeScreen'
import { appDrawerNavigator } from  "./components/appDrawerNavigator"


export default class App extends React.Component{
  render() {
  return (
 <WelcomeScreen/>
  );
}



}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen:appDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
