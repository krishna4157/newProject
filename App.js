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
import theme from 'react-native-theme';
import AppNavigation from './containers/AppNavigation';
import FlashMessage from "react-native-flash-message";
import AsyncStorage from '@react-native-community/async-storage';
let apikey = 'trnsl.1.1.20200304T084451Z.88e3100b0e437a11.05e1eb13b2103bee9e17fc5b43ef04224d906108';
// var request = require('yandex-translate')(apikey);
var s= 'red';
import t from './constants/TextTranslate';
class App extends Component {

  // ./node_modules/.bin/rn-nodeify --hack --install
  componentWillMount(){
    theme.setRoot(this);
  }
  state = {
    Status:'',
    theme:'white',
    loading: true,
    locale: 'en',
    isReady: false,
  };


  setLocale=(Language)=>{
    this.setState({
      locale:Language
    });
  }

  t=(name)=>{
    var s ='';
    var selectedLanguage= getLanguage;

    if(selectedLanguage!='en-US'){
    // request.translate(name, { to: 'hi' }, function(err, res) {
    //     // alert(res.text);
    //       s = res.text;
    //       console.log(res.text);
    //       return res.text;
        
    //   })
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
  changeTheme(selectedTheme){
    alert('Theme Changing')
    this.setState({
      theme: selectedTheme
    })
    theme.active(selectedTheme);
  }
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

componentWillUpdate(){
  
}
    


  async componentDidMount () {
    theme.add({
      fontColor:{
        color: 'white',
        alignSelf:'center'
      },
      emptyView: {
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'white'
      },
      fontStyle:{
          color: 'black',
          fontSize:30,
      },
      subtitleStyle: {
        color: 'black',
      },
      loginBackground:{
        flex:1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        },
      cardStyle:{
        borderWidth: 1,
        borderRadius:30,
        borderColor: 'white',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 20,
        borderRadius:20,
        backgroundColor: 'white',
        marginTop:10
      }, 
      HeaderStyle:{
        backgroundColor:'#3498DB',
      }
      ,scrollView: {
        height:'100%',
        backgroundColor: 'white'
      },
      engine: {
        position: "absolute",
        right: 0
      },
      body: {
        backgroundColor: 'white',
        padding:10
      },
      sectionContainer: {
        flexDirection: "row",
        // backgroundColor: 'white',
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
        // color: 'red',
        textAlign: "center"
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
        // color: 'red'
      },
      highlight: {
        fontWeight: "700"
      },
      footer: {
        color: 'red',
        fontSize: 12,
        fontWeight: "600",
        padding: 4,
        paddingRight: 12,
        textAlign: "right"
      }
    },);

    theme.add({
      fontColor:{
        color: 'white',
        justifyContent:'center',
        alignSelf:'center'
      },
      emptyView: {
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'black'
      },
      fontStyle:{
        color: 'white',
        fontSize:30,
    },
    subtitleStyle: {
      color: 'white',
    },
      loginBackground:{
      flex:1,
      backgroundColor: 'black',
      justifyContent:'center',
      alignItems:'center',
      },
      cardStyle:{
        borderRadius:30,
        borderWidth: 1,
        borderColor: 'white',
        borderBottomWidth: 0,
        shadowColor: 'white',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 10,
        shadowRadius: 2,
        elevation: 10,borderRadius:20,
        backgroundColor: 'grey',
        marginTop:10
      },
      HeaderStyle:{
        backgroundColor:'grey',
      }
      ,scrollView: {
        height:'100%',
        backgroundColor: 'black'
      },
      engine: {
        position: "absolute",
        right: 0
      },
      body: {
        backgroundColor: 'black',
        padding:10
      },
      sectionContainer: {
        flexDirection: "row",
        backgroundColor: 'black',
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
        color: 'red',
        textAlign: "center"
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
        color: 'black'
      },
      highlight: {
        fontWeight: "700"
      },
      footer: {
        color: 'red',
        fontSize: 12,
        fontWeight: "600",
        padding: 4,
        paddingRight: 12,
        textAlign: "right"
      }
    }, 'Dark');

    alert('HELLO')  
    theme.active(this.state.theme);
    var Relations = [{
      
      'name'    : 'Family1',
      'subtitle': 'Family',
      'url'     : 'https://en.bcdn.biz/Images/2016/11/15/a9b9a282-948d-4073-ae1a-853ec3c41614.jpg'
    },{
      'name': 'Family2',
      'url': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg'
    },
    {
      'name': 'Friend1',
      'subtitle': 'Friend',
      'url': 'https://en.bcdn.biz/Images/2016/11/15/776342f0-86f5-4522-84c9-a02d6b11c766.jpg'
    },
    {
      'name': 'Friend2',
      'subtitle': 'Friend',
      'url': 'https://en.bcdn.biz/Images/2016/11/15/365d6610-08ca-40d7-a599-4b352cbd894e.jpg'
    },
    {
      'name': 'Other1',
      'subtitle': 'Other',
      'url': 'https://en.bcdn.biz/Images/2016/11/15/1268e0a8-b737-444d-a64d-977ee30db531.jpg'
    },{
      'name': 'Other2',
      'subtitle': 'Other',
      'url': 'https://en.bcdn.biz/Images/2016/11/15/3bb528e4-b1d3-4d04-a2c4-302d632e096b.jpg'
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
    await AsyncStorage.setItem('Locale',this.state.locale);
    await AsyncStorage.setItem('Themes','white');
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
      
  return (
    <View style={{flex:1,backgroundColor:'red'}}>
      <StatusBar barStyle="dark-content" />
      <Root>

      <AppNavigation locale={this.state.locale} setLocale={this.setLocale}  t={this.t} changeTheme={this.changeTheme}
            />
            {/* <Home /> */}
      {/*  */}
      </Root>
    </View>
  );
}
};



export default App;
