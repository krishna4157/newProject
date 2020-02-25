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
import { NavigationEvents } from 'react-navigation';

var i=0;
// import {setCurrentScreen} from '../actions/storeAppStatus';
class FriendsPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      showDialog: false,
    }
  }

  handleHeaderMenuDialoge = (visible) => {
    console.log("Visible : "+visible);
    // this.setState({
    //   visible: false
    // });
    this.setState({
      visible: false
    });
  }

  async componentDidMount() {
    // if(i==0){
    this.setState({
      visible:true
    })
    // i++;
  // }
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
      const{visible}=this.state;
      console.log("In render : "+visible);
        return (
          
          <MenuProvider>
          <NavigationEvents
            onWillFocus={() => {
              console.log("error!!!")
              this.setState({
                visible:true
              })
              }}
          />          
          <DialogPopUp visible={visible} handleHeaderMenuDialoge={this.handleHeaderMenuDialoge}/>  
           
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