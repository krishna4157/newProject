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
let apikey = 'trnsl.1.1.20200304T084451Z.88e3100b0e437a11.05e1eb13b2103bee9e17fc5b43ef04224d906108';
var request = require('yandex-translate')(apikey);
var s= '';
import t from './constants/TextTranslate';
class App extends Component {
  // ./node_modules/.bin/rn-nodeify --hack --install
  state = {
    Status:'',
    loading: true,
    locale: 'en-US',
    isReady: false,
  };

  t=(name)=>{
    var s ='';
    var selectedLanguage= getLanguage;

    if(selectedLanguage!='en-US'){
    request.translate(name, { to: 'hi' }, function(err, res) {
        // alert(res.text);
          s = res.text;
          console.log(res.text);
          return res.text;
        
      })
    } else {
        s=name;
    }
      setTimeout(()=>{
        alert(s);
        return s;
    },900)
    }

// t=(name)=>{
//   var s = '';  
  
//   request.translate(name, { to: 'hi' }, function(err, res) {
//       // alert(res.text);
//         s = res.text;
//         console.log(res.text);
//         return res.text;
      
//     })
//     setTimeout(()=>{
//       alert(s);
//       return s;
//   },700)
//   }

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
    await AsyncStorage.setItem('selectLanguage',this.state.locale);

    
var s = t('HELLO');
console.log("S : "+s);
    console.log("IMP :"+JSON.stringify(Relations));
    var Family = [];
    var Friends = [];
    var Others = [];
    var stringifyFamily = JSON.stringify(Family);
    var stringifyFriends = JSON.stringify(Friends);
    var stringifyOthers = JSON.stringify(Others);
    let StringifyData = JSON.stringify(Relations);
    await AsyncStorage.setItem('FamilyData',stringifyFamily);
    await AsyncStorage.setItem('FriendsData',stringifyFriends);
    await AsyncStorage.setItem('OthersData',stringifyOthers);
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

      <AppNavigation  t={this.t}
            />
            {/* <Home /> */}
      {/*  */}
      </Root>
    </View>
  );
}
};



export default App;
