import * as React from 'react';
import {createAppContainer, createNavigationContainer, createStackNavigator, StackNavigatorConfig } from 'react-navigation';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';


import uiTheme from 'styles/uiTheme'
import VenuesScreen from 'screens/VenuesScreen'
import { VenueScreen } from 'screens/VenueScreen'
import ScanScreen from 'screens/ScanScreen'
import Layout from 'components/Layout'
import Container from 'components/widgets/Container';
import { node } from 'prop-types';

 export interface AppProps {};
interface AppState {}

class App extends React.Component<AppProps, AppState> {
  
  render() {
    return null;
  }
}

const stackConfig = {
  initialRouteName: "Venues",
  headerMode: "none"
} as StackNavigatorConfig;


const HomeNavigator = createStackNavigator({
  Venues: { screen: VenuesScreen },
  Venue:  { screen: VenueScreen},
  Scan: { screen: ScanScreen }
}, stackConfig)

const AppNavigator = createStackNavigator({
  App: { screen: HomeNavigator  }
}, { initialRouteName: "App", headerMode: "none" })

export default createAppContainer(AppNavigator)