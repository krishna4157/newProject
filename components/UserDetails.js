import React, { Component } from 'react';
import { Container, Button, Title, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import {
    
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    Image,
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
import { faCog,faUser,faFax,faLanguage,faSignLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import theme from 'react-native-theme';
import { NavigationEvents } from 'react-navigation';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Linking} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
var arr = [faLanguage,faCog, faUser, faFax];
var MoreItems = ['Language','Settings','Logout'];
class UserDetails extends Component {
    state={
      t: 5
    };

    render() {
      const{userdata}= this.props;

      const images = [{
        // Simplest usage.
        url: userdata.url,
    
        // width: number
        // height: number
        // Optional, if you know the image size, you can set the optimization performance
    
        // You can pass props to <Image />.
        props: {
            // headers: ...
        }
    }]
      
    const { navigation } = this.props;
        return (
            <View style={{flex:1,backgroundColor:theme.name=='default'?'white':'black'}}>
           {/* <Text>{this.state.t}</Text> */}
           <NavigationEvents 
           onDidFocus={()=>{
             this.setState({
               t: t
             })
           }}
           />
          <View style={{flex:3,justifyContent:'center',paddingTop:10,padding:70}}>
          <TouchableWithoutFeedback style={{height:'100%',zIndex:10}} onPress={()=>{
            // alert('hello');
            navigation.navigate('UserInfo',{'userdata':userdata})
          }}>
          <Image
                    style={{paddingTop:10,flexWrap:'wrap',resizeMode:'cover',justifyContent:'center',width:'100%',height:'100%',borderRadius:900}}
                     source={{ uri: userdata.url}}
                    />
                    </TouchableWithoutFeedback>
            </View>
            <View style={{flex:5,paddingTop:'6%',padding:20,flexDirection:'column'}}>
            <View>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Name :
                </Text>
              <Text style={{fontSize:25}}>{userdata.name}
                </Text>
                </View>
                <View>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Location :
                </Text>
              <Text style={{fontSize:25}}>{userdata.city}
                </Text>
                </View>
                <View>
            <Text style={{fontSize:25,fontWeight:'bold'}}>PhoneNumber :
                </Text>
                <TouchableWithoutFeedback onPress={()=>{
                  // alert('Hello!');
                  Linking.openURL(`tel:${userdata.phoneNumber}`)
                }}>
              <Text style={{fontSize:25,color:'#4885ed'}}>{userdata.phoneNumber}
                </Text>
                </TouchableWithoutFeedback>
                </View>
              </View>
              
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
        scrollView: {
          backgroundColor: Colors.lighter,
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
export default UserDetails;