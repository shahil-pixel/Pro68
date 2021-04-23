import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';

import FbScreen from './screens/fb';
import InScreen from './screens/in';

export default class App extends React.Component {
  render(){
  return (
    <View>
     <AppContainer/>
    </View>
  );
 }
}

const TabNavigator = CreateBottomTabNavigator({
  fb:{screen:FbScreen},
  in:{screen:InScreen},
})

const AppContainer = createAppContainer(TabNavigator)
