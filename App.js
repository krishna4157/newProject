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
import AsyncStorage from '@react-native-community/async-storage';
class App extends Component {

  state = {
    Status:'',
    loading: true,
    locale: 'en-US',
    isReady: false,
  };

  async componentDidMount () {

    var Relations = [{
      
      'name': 'Product 1',
      'url' : 'url'
    },{
      'name': 'Product 2',
      'url': 'url2'
    }];
    // this.unsubscribe();
    // const Relations = [
    //     {
    //       name: 'Friend1',
    //       image : 'url'
    //     },
    //     {  
    //       name: 'Friend2',
    //       image : 'url2'
    //     },
    //       {
    //         name: 'Family1',
    //         image : 'url3'
    //       },
    //     {
    //       name: 'Family1',
    //         image : 'url4'
    //     },
    //       {
    //         name: 'TobeAdded1',
    //         image : 'url4'
    //       }
    //     ]
    let StringifyData = JSON.stringify(Relations);
    await AsyncStorage.setItem("Forms",StringifyData);
    let encryptedForms = await AsyncStorage.getItem("Forms");
    // console.log(JSON.parse(encryptedForms))
    // if(encryptedForms==null){
    //     const encryptedForms = await AsyncStorage.setItem("encryptedForms");
    // }
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
