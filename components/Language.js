import React, { Component } from 'react';
import { Container, Button, Title, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import {
    
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  // import stylesss from '../styles';
// import Compliance from './ProgressBar';
// import styles from '../components/styles/homeStyles';
// import { NavigationEvents, SafeAreaView } from 'react-navigation';
// import { backgroundColor } from '../containers/NavigationScreens';
import Colors from '../constants/Colors';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import { faCog,faUser,faFax,faLanguage,faSignLanguage, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";
import AsyncStorage from '@react-native-community/async-storage';
import { setLanguage } from '../constants/TextTranslate';

var arr = [faLanguage,faCog, faUser, faFax,faCoffee];
var MoreItems = ['English','Telugu','Hindi'];
var LanguageItems = ['en','te','hi'];
var s= '';
class Language extends Component {
    state={
    };



    


    setLanguage=async(index)=>{
      const {navigation}=this.props;
      var language;
        setLanguage(LanguageItems[index]);
        language = LanguageItems[index];
      // alert(s);

    
        await AsyncStorage.setItem('Locale',language);
      s = await AsyncStorage.getItem('Locale')
        // alert("Set Language and Navigating to Login Page : "+s);
        navigation.navigate('Swiper')
       
    }

    render() {
        return (
            <View>
            <SpringScrollView
              style={styles.scrollView}>
                {MoreItems.map((name,index)=>{
                return (
               
                <ListItem
                onPress={()=>{
                  this.setLanguage(index);
                    // alert('HELLO WORLD!');
                    // navigation.navigate('Language')
                    }}
                 style={{width:'100%',justifyContent:'flex-start'}} noBorder={index >= MoreItems.length - 1 ? true : false} 
                  
                    >
                    
                        <Text style={{ paddingLeft:15,color: 'black', fontSize:20 }}>{name}</Text>
                    </ListItem>
                    )})}
            </SpringScrollView>
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
        scrollView: {
          backgroundColor: Colors.lighter,
          height:'100%',
          padding:5
        },
        engine: {
          position: 'absolute',
          right: 0,
        },
        body: {
          backgroundColor: Colors.OthersHeader,
        },
        sectionContainer: {
          flexDirection:'row',
          padding:15,
          justifyContent:'space-between',
          alignItems:'center',
          paddingHorizontal: 24,
        },
        sectionTitle: {
          fontSize: 24,
          fontWeight: '600',
          color: Colors.black,
          textAlign:'center'
        },
        sectionDescription: {
          marginTop: 8,
          fontSize: 18,
          fontWeight: '400',
          color: Colors.dark,
        },
        highlight: {
          fontWeight: '700',
        },
        footer: {
          color: Colors.dark,
          fontSize: 12,
          fontWeight: '600',
          padding: 4,
          paddingRight: 12,
          textAlign: 'right',
        },
      });
export default Language;