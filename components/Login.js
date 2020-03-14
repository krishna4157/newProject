import React, { Component } from 'react';
import { Container, Button, Title, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import {
    
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,Easing,
    Animated as NewAnimated
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
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { faCoffee,faUser,faPencilAlt,faUsers,faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { MaterialIcons,Entypo, MaterialCommunityIcons,Feather, FontAwesome ,FontAwesome5,AntDesign,Fontisto} from '@expo/vector-icons';
import { Fumi, Sae } from 'react-native-textinput-effects';
import theme from 'react-native-theme';
var friends = ['Friends1','Friends2','Friends3'];
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import t from '../constants/TextTranslate';
import * as Animatable from 'react-native-animatable';
import { NavigationEvents } from 'react-navigation';
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';
import Animated from 'react-native-reanimated';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView,Platform} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Login extends Component {
  constructor () {
  	super()
    this.animatedValue = new Animated.Value(0),
    this.moveAnimation = new NewAnimated.ValueXY({ x: -180, y: 0 })
    this.textAnimation = new NewAnimated.ValueXY({ x: 20, y: 0 })

    this.state ={
      time:1,
      passwordColor:'#3498DB'
    }
  }

  wrongPassword=()=>{
    // NewAnimated.spring(this.moveAnimation, {
    //   toValue: {x: -180, y: 0},
    // }).start();
    this.setState({
      passwordColor: 'red'
    })
    setTimeout(()=>{
      this.setState({
        passwordColor:'#3498DB'
      });
      NewAnimated.spring(this.moveAnimation, {
        toValue: {x: -180, y: 0},
      }).start();
      NewAnimated.spring(this.textAnimation, {
        toValue: {x: 20, y: 0},
      }).start();
    },5000)
  }

  rightPassword=()=>{
    this.setState({
      passwordColor: 'green'
    })
    this.setDataAndNavigate()

  }

  loginValidate = () => {
    NewAnimated.spring(this.moveAnimation, {
      toValue: {x: 0, y: 0},
    }).start();
    NewAnimated.spring(this.textAnimation, {
      toValue: {x: -150, y: 0},
    }).start();
    // this.wrongPassword();
    this.rightPassword();
    // this.setDataAndNavigate()

  }

  moveRight = () => {
    NewAnimated.spring(this.moveAnimation, {
      toValue: {x: -215, y: 0},
    }).start()
  }

    animate (easing) {
      this.animatedValue.setValue(0)
        Animated.timing(
          this.animatedValue,
          {
            toValue: 1,
            duration: 100,
            easing
          }
      ).start()
    }


    setDataAndNavigate= async ()=>{
        const {navigation} = this.props;
        let encryptedForms = await AsyncStorage.getItem("Forms");
        let parseData = JSON.parse(encryptedForms);
        setTimeout(() => {
            navigation.navigate('RootTabs',{parseData:parseData})    
        }, 3000);
        
    }

    translateText = async () => {
      console.log("Translation: ",await t('LOGIN'));
    }

    render() {
      const{text}=this.props;
      this.translateText();
        return (
          <KeyboardAwareScrollView
          behavior="padding"           style={{flex:1 }}
      >        
                        <SafeAreaView style={{flex:1}}>
 
          <SpringScrollView bounces={true} style={{flex:3,backgroundColor:this.state.passwordColor}}>
          
          <NavigationEvents onDidFocus={()=>{
            // alert('refreshed')s
            this.setState({
              passwordColor:'#3498DB'
            })

            NewAnimated.spring(this.moveAnimation, {
              toValue: {x: -180, y: 0},
            }).start();
            NewAnimated.spring(this.textAnimation, {
              toValue: {x: 20, y: 0},
            }).start();
            
          }}/>
          <View style={{backgroundColor:theme.name=='default'?'white':'black'}}>
          <NewAnimated.View style={[{height:300,width:"150%",backgroundColor:'green',zIndex:1,borderBottomEndRadius:200,borderBottomStartRadius:200}, this.moveAnimation.getLayout()]}>
          <AnimatedBackgroundColorView  style={{height:'90%'}} initialColor='black' color={theme.name=='default'?'white':'black'} >
          <AnimatedBackgroundColorView   style={{height:300,justifyContent:'center',borderBottomEndRadius:130,borderBottomStartRadius:130}} initialColor='orange' easing={Easing.ease} color={this.state.passwordColor} >            
          <Animatable.View>
        
          <Animatable.Text iterationDelay={2000} style={[{textAlign:'center',fontSize:35,color:'white',fontWeight:'bold',marginLeft:'3%'},this.textAnimation.getLayout()]} animation="fadeIn" iterationCount={1} direction="alternate">{t('Welcome to')}</Animatable.Text>
          <Animatable.Text iterationDelay={2000} style={[{textAlign:'center',fontSize:40,color:'white',fontWeight:'bold',marginLeft:'20%'},this.textAnimation.getLayout()]} animation="fadeIn" iterationCount={1} direction="alternate">Share And Care</Animatable.Text>

          </Animatable.View>
          </AnimatedBackgroundColorView>
          </AnimatedBackgroundColorView>
          </NewAnimated.View>
          </View>
            {/* </SpringScrollView> */}
            <View style={{flex:3,backgroundColor:theme.name=='default'?'white':'black',height:400,borderBottomEndRadius:30,borderBottomStartRadius:30}}>
            
            <View style={{justifyContent:'space-evenly',height:180}} >
              {/* <TouchableOpacity style={{height:40}}> */}
           
            <Sae
            
    label={t('Username')}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#3498DB'}
    labelStyle={styles.labelColor}
    iconSize={20}
    iconWidth={40}
    inputStyle={{ color:theme.name=='default' ? 'white': 'white' }}
    inputPadding={16}
    
  />
              <Sae
    label={t('Password')}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#f95a25'}
    labelStyle={styles.labelColor}
    iconSize={20}
    iconWidth={40}
    inputStyle={{ color: theme.name=='default' ? 'white': 'white' }}
    inputPadding={16}
  />
            {/* <Animatable.View style={{flex:1,backgroundColor:'#3498DB'}}>

<Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>
</Animatable.View> */}
  </View>
  <View style={{height:150,justifyContent:'space-between',alignItems:'center'}}>
            
                       <AwesomeButton onPress={()=>{
                        this.loginValidate()
                        //  this.setDataAndNavigate()
                         }}>
                        <View style={{width:'40%'}}>
                        <Text style={{color:'white',textAlign:'center'}}>
                           {t('LOGIN')}
                           </Text> 
                        </View>
                      </AwesomeButton>
                      <Text style={{color:'white',fontSize:15}}>--------------------------------or--------------------------------</Text>
                      <GoogleSigninButton onPress={()=>{this.setDataAndNavigate()}}/>
                      </View>
                      </View>
            </SpringScrollView>
            </SafeAreaView>
            </KeyboardAwareScrollView>
        );
      }
    }
    
export default Login;