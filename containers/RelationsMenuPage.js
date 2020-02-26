import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import Home from '../components/Family';
import { BackHandler, Alert,View,Text } from 'react-native';
import Friends from "../components/Friends";
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation, SlideAnimation, FadeAnimation } from 'react-native-popup-dialog';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';// import { getDeviceToken } from '../utils/pushNotification/configurePushNotification';
// import { retrieveSubjectCompliance } from '../utils/homeUtils';
// import { withNavigationFocus } from "react-navigation";
import DialogPopUp from '../components/DialogPopUp';
import { NavigationEvents, createAppContainer } from 'react-navigation';
import FamilyPage from "./FamilyPage";
import OthersPage from "./OthersPage";
import { createStackNavigator } from "react-navigation-stack";
import RelationsPage from "./RelationsPage";
import FriendsPage from "./FriendsPage";
import FeedPage from "./FeedPage";
import FlashMessage from "react-native-flash-message";
import UserDetailsPage from "./UserDetailsPage";
var routeName = '';
var i=0;
// import {setCurrentScreen} from '../actions/storeAppStatus';

class RelationsMenuPage extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      showDialog: false,
    }
  }

  hideDialog =()=>{
    this.setState({
          visible: false
        });
  }

  handleHeaderMenuDialoge = (visible,navigationPage) => {
    const {navigation}= this.props;
    this.setState({
        visible: false
      });
    console.log('PROPS :'+JSON.stringify(navigationPage));
    console.log("Visible1 : "+visible);
    routeName = navigationPage;
    this.props.navigation.navigate(navigationPage);
    
  }

  onClickOutSide = (navigationPage) =>{
    const {navigation}= this.props;
    this.setState({
      visible: false
    });
    console.log('props ::'+JSON.stringify(this.props.navigation.state.routeName));
    navigation.navigate('Feed');
  }

  async componentDidMount() {
      console.log("ComponentdidMount :"+this.state.visible);
      const{navigation}=this.props;
      this.setState({
        visible:true
      })
    }

   

    // static navigationOptions = () => {
    //   return {
    //     // tabBarOnPress() {
    //       // alert("HELLO");
    //         // DialogPopUp();
    // // <View style={{flex:1,backgroundColor:'red',zIndex:20,height:50,width:50}}>
    // //   <Text>HELO</Text>
    // //   </View>
    //       // perform your logic here
    //       // this is mandatory to perform the actual switch
    //       // you can omit this if you want to prevent it
    //       // jumpToIndex(scene.index);
    //     }
    //   };
    // };
   


    //   componentDidMount() {
    //       const{setCurrentScreen}= this.props;
    //     // setCurrentScreen("");
    //     // BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    //   }    

    //   componentDidUpdate (prevProps) {
    //     const { selectedLanguage, isFocused, screenProps: { t } } = this.props;
    //     if ( selectedLanguage !== prevProps.selectedLanguage) {
    //         this.props.navigation.setParams({ title: t('HomeTitle') });
    //     } if ( isFocused === true) {
    //         // BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    //     } if ( isFocused === false) {
    //         // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    //     }

    // }
    componentDidUpdate= async()=>{
        const {}= this.props;
    }
    

    handleBackPress = () => {// works best when the goBack is async
        this.exitApplication();
        return true;
        // BackHandler.exitApp();
        // return true;
    }
    
    render() {
      const{visible}=this.state;
      console.log("In render : "+visible);
      console.log("Props:::"+JSON.stringify(this.props));
        return (
            <View style={{flex:1}}>
            <NavigationEvents
            onDidFocus={()=>{
              routeName = this.props.navigation.state.routeName
              this.setState({
                visible:true
              })
              console.log('ondidfocus');
            }}
            onWillFocus={() => {
              console.log("error!!!")
             console.log('screen :'+routeName);
              this.setState({
                visible:true
              })
          
            // i=0;
              }}
          /> 
                <FlashMessage position='top'/>
            <DialogPopUp navigationPage={this.props.navigation.routeName} hideDialog={this.hideDialog} visible={visible} onClickOutSide={this.onClickOutSide} handleHeaderMenuDialoge={this.handleHeaderMenuDialoge}/>    
            <AppContainer visible ={visible} handleHeaderMenuDialoge={this.handleHeaderMenuDialoge}/>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
  UserDetails :{
    screen: UserDetailsPage
  },
 Feed :{
     screen: FeedPage 
},Family: {
    screen: FamilyPage
  },
  Friends: {
    screen: FriendsPage
  },
  Others: {
      screen: OthersPage
  }
},{
  headerMode:'none',
   initialRouteName: routeName
});

const AppContainer = createAppContainer(AppNavigator);



export default RelationsMenuPage
