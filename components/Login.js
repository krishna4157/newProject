import React, { Component } from 'react';
import { Container, Button, Title, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import {
    
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,Easing
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


class Login extends Component {
  constructor () {
  	super()
    this.animatedValue = new Animated.Value(0),
    this.state ={
      time:1,
    }
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
          <SpringScrollView bounces={true} style={{flex:3,backgroundColor:'#3498DB'}}>
          <NavigationEvents onDidFocus={()=>{
            // alert('refreshed')s
            this.setState({
              time: 2
            })
          }}/>
          <AnimatedBackgroundColorView  style={{flex:3,height:'100%'}} initialColor='black' easing={Easing.bounce} color='black' >
          <AnimatedBackgroundColorView   style={{height:400,borderBottomLeftRadius:160,justifyContent:'center'}} initialColor='orange' easing={Easing.ease} color='#3498DB' >            
          <Animatable.View>
          {/* <TouchableOpacity onPress={() => this.setState({fontSize: (this.state.fontSize || 10) + 5 })}>
  <Animatable.Text transition="fontSize" style={{fontSize: this.state.fontSize || 10}}>Size me up, Scotty</Animatable.Text>
</TouchableOpacity> */}
          <Animatable.Text iterationDelay={2000} style={{textAlign:'center',fontSize:35,color:'white',fontWeight:'bold'}} animation="fadeIn" iterationCount={1} direction="alternate">Welcome To                    Share And Care</Animatable.Text>
          </Animatable.View>
          </AnimatedBackgroundColorView>
          </AnimatedBackgroundColorView>
            {/* </SpringScrollView> */}
            <View style={{flex:3,backgroundColor:'black',height:400,borderBottomEndRadius:30,borderBottomStartRadius:30}}>
            <View style={{justifyContent:'space-evenly',height:180}}>
            <Sae
    label={t('Username')}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'#3498DB'}
    labelStyle={styles.labelColor}
    iconSize={20}
    iconWidth={40}
    inputStyle={{ color:theme.name=='default' ? 'black': 'white' }}
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
    inputStyle={{ color: theme.name=='default' ? 'black': 'white' }}
    inputPadding={16}
  />
            {/* <Animatable.View style={{flex:1,backgroundColor:'#3498DB'}}>

<Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>
</Animatable.View> */}
  </View>
  <View style={{height:150,justifyContent:'space-between',alignItems:'center'}}>
            
                       <AwesomeButton onPress={()=>{this.setDataAndNavigate()}}>
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
        );
      }
    }
    
export default Login;