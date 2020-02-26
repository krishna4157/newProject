/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import * as Font from 'expo-font';

import React, { Component } from 'react';
import { Root } from 'native-base';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
} from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigation from './containers/AppNavigation';
import Home from './components/Family';
import FlashMessage from "react-native-flash-message";

class App extends Component {

  state = {
    Status:'',
    loading: true,
    locale: 'en-US',
    isReady: false,
  };

  async componentDidMount () {
    // this.unsubscribe();
    
    // NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
    console.disableYellowBox = true;

      
        SplashScreen.close({
          animationType: SplashScreen.animationType.fade,
          duration: 1000,
          delay: 12000,
       });
    }
    render(){
  return (
    <View style={{flex:1,backgroundColor:'red'}}>
      <StatusBar barStyle="dark-content" />
      <Root>

      <AppNavigation 
            />
            {/* <Home /> */}
      {/*  */}
      </Root>
    </View>
  );
}
};



export default App;
