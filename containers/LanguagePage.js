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
import AsyncStorage from "@react-native-community/async-storage";
import Language from "../components/Language";

var i=0;
// import {setCurrentScreen} from '../actions/storeAppStatus';
class LanguagePage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data1:'',
      visible: false,
      showDialog: false,
    }
  }

//   componentDidMount = async()=>{
//     let encryptedForms = await AsyncStorage.getItem("FriendsData");
//       var data = JSON.parse(encryptedForms);
//       this.setState({
//           data1: data
//       })
//       console.log('this Friends data :'+this.state.data1);
//   }
    
    render() {
      const{visible,data1}=this.state;
      console.log("In Friends Page : "+JSON.stringify(data1));
        return (
          
          <MenuProvider>
          {/* <NavigationEvents
            onWillFocus={() => {
              console.log("error!!!")
              this.setState({
                visible:true
              })
              }}
          />                      */}
            {console.log("in Container : "+data1)}
           <Language
            />
            </MenuProvider>
        );
    }
}


// const mapStateToProps = state => ({
//       selectedLanguage: state.changeLanguage.selectedLanguage,
//       loading: state.loading,
//       subject: state.subjectStudyMetaData.subject,
// });

// const mapDispatchToProps = dispatch => bindActionCreators(
//     {
//     setCurrentScreen,

//     },
//     dispatch,
//   );
export default LanguagePage
// export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(HomeScreen));