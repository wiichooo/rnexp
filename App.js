import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './js/Main';
import SettingScreen from './js/Settings'
import EditScreen from './js/Edit'
import DetailsScreen from './js/Details'
import AddScreen from './js/Add'
import DataScreen from './js/Data'
import { TabNavigator, StackNavigator } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
        <TabScreens />
    );
  }
}

const Screens = TabNavigator({
  Main: { screen: MainScreen },
  Details: { screen: DetailsScreen },
  Settings: { screen: SettingScreen }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    inactiveBackgroundColor: 'white',
  },
});

const TabScreens = StackNavigator({
  //SignUp: { screen: SignUpScreen },
  //LogIn: { screen: LogInScreen },
  Home: { screen: Screens },
  Edit: { screen: EditScreen },
  Data: { screen: DataScreen }
});
