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
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";
import AsyncStorage from '@react-native-community/async-storage';
import Colors from '../constants/Colors';
import styles from 'react-native-theme';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { faCoffee,faUser,faPencilAlt,faUsers,faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { MaterialIcons,Entypo, MaterialCommunityIcons,Feather, FontAwesome ,FontAwesome5,AntDesign,Fontisto} from '@expo/vector-icons';
import { Fumi, Sae } from 'react-native-textinput-effects';
import theme from 'react-native-theme';
var friends = ['Friends1','Friends2','Friends3'];
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import * as Animatable from 'react-native-animatable';

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
          <View style={styles.loginComponent}>
            <SpringScrollView
style={styles.scrollView}
bounces={true}
//  initialContentOffset={{ x: 0, y: 550 }}

>
            
                <View style={{padding:10,justifyContent:'space-between'}}>
                <View style={{borderRadius:20,padding:5}}>
                <Sae
    label={' Username'}
    iconClass={MaterialCommunityIcons}
    iconName={'grease-pencil'}
    iconColor={'#3498DB'}
    labelStyle={styles.labelColor}
    iconSize={20}
    iconWidth={40}
    inputStyle={{ color:theme.name=='default' ? 'black': 'white' }}
    inputPadding={16}
    
  />
  </View>
  <View style={{padding:10,borderRadius:20,padding:5}}>
  <Sae
    label={'Password'}
    iconClass={FontAwesome}
    iconName={'fa-pencil'}
    iconColor={'#f95a25'}
    labelStyle={styles.labelColor}
    iconSize={20}
    iconWidth={40}
    inputStyle={{ color: theme.name=='default' ? 'black': 'white' }}
    inputPadding={16}
  />
  </View>
                   
                   <View style={{alignItems:'center',paddingTop:'30%',flexDirection:"column-reverse"}}>
                   <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={this.setDataAndNavigate}
    disabled={this.state.isSigninInProgress} />
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
    
export default Login;