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
// import {setCurrentScreen} from '../actions/storeAppStatus';
class FriendsPage extends Component {
    state={
        subjectCompliance: {
            dayCompliance: 0,
          weekCompliance: 0,
          monthCompliance: 0,
          totalCompliance: 0,
        }
    };

    // static navigationOptions = () => {
    //   return {
    //     tabBarOnPress() {
    //       <Menu>
    //   <MenuTrigger text='Select action' />
    //   <MenuOptions>
    //     <MenuOption onSelect={() => alert(`Save`)} text='Save' />
    //     <MenuOption onSelect={() => alert(`Delete`)} >
    //       <Text style={{color: 'red'}}>Delete</Text>
    //     </MenuOption>
    //     <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
    //   </MenuOptions>
    // </Menu>
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

    handleBackPress = () => {// works best when the goBack is async
        this.exitApplication();
        return true;
        // BackHandler.exitApp();
        // return true;
    }
    
    // retrieveSubjectCompliance = async() => {
    //     const { subject } = this.props;
    //     try {
    //         subjectCompliance = await retrieveSubjectCompliance(subject);
    //         this.setState({
    //             subjectCompliance,
    //         })
    //     } catch (error) {
    //        console.log(error);
    //     }
        
    // }
    
    exitApplication = () => {
        Alert.alert(
            '',
            'Exit ezpro?',
            [
              {
                text: 'Cancel',
                onPress: () => true,
                style: 'cancel',
              },
              {text: 'OK', onPress: () => BackHandler.exitApp()},
            ],
            {cancelable: false},
          );
    }
    
    render() {
        return (
          <MenuProvider>

            <Friends
            // navigation={navigation}
            // loading={loading}
            // subjectCompliance={subjectCompliance}
            // retrieveSubjectCompliance={this.retrieveSubjectCompliance}  
            // screenProps={screenProps}  
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
export default FriendsPage
// export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(HomeScreen));