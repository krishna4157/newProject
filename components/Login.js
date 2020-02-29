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
  import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

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
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";
import AsyncStorage from '@react-native-community/async-storage';

var friends = ['Friends1','Friends2','Friends3'];

class Login extends Component {
    state={
    };


    setDataAndNavigate= async ()=>{
        const {navigation} = this.props;
        let encryptedForms = await AsyncStorage.getItem("Forms");
        let parseData = JSON.parse(encryptedForms);
        setTimeout(() => {
            navigation.navigate('RootTabs',{parseData:parseData})    
        }, 3000);
        
    }

    render() {
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
        return (
          <View>
            <SpringScrollView
style={styles.scrollView}
bounces={true}
//  initialContentOffset={{ x: 0, y: 550 }}

>
            {/* <ScrollView bounces={true} bouncesZoom={true} overScrollMode={"always"} alwaysBounceHorizontal alwaysBounceVertical
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}> */}
              {/* <Header /> */}
              {/* {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )} */}
              <View style={styles.body}>
                <View style={{padding:10}}>
                  
                   
                   
                       <AwesomeButton onPress={()=>{this.setDataAndNavigate()}}>
                        <Text style={{color:'white'}}>      LOGIN      </Text> 
                      </AwesomeButton>
                  </View>
              </View>
            </SpringScrollView>
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
      scrollView: {
        backgroundColor: Colors.lighter,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
      },
      engine: {
        position: 'absolute',
        right: 0,
      },
      body: {
        backgroundColor: '#F2F2F2',
      },
      sectionContainer: {
        flexDirection:'row',
        padding:15,
        backgroundColor: Colors.FriendsHeader,
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
export default Login;