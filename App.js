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
      
      'name'    : 'Family1',
      'url'     : 'url5'
    },{
      'name': 'Family2',
      'url': 'url2'
    },
    {
      'name': 'Friend1',
      'url': 'url2'
    },
    {
      'name': 'Friend2',
      'url': 'url2'
    },
    {
      'name': 'Other1',
      'url': 'url2'
    },{
      'name': 'Other2',
      'url': 'url2'
    }];
    
    let StringifyData = JSON.stringify(Relations);
    await AsyncStorage.setItem('FamilyData','');
    await AsyncStorage.setItem('FriendsData','');
    await AsyncStorage.setItem('OthersData','');
    await AsyncStorage.setItem("Forms",StringifyData);
    let encryptedForms = await AsyncStorage.getItem("Forms");
    let formdata = JSON.parse(encryptedForms)
    console.log("DATATAT:"+encryptedForms)
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
      console.log("DATATAT1:::")
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
