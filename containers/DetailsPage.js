import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import Family from '../components/Family';
import { BackHandler, Alert,View } from 'react-native';
import { MenuProvider } from "react-native-popup-menu";
import Login from "../components/Login";
import Details from "../components/Details";
// import { getDeviceToken } from '../utils/pushNotification/configurePushNotification';
// import { retrieveSubjectCompliance } from '../utils/homeUtils';
// import { withNavigationFocus } from "react-navigation";
// import {setCurrentScreen} from '../actions/storeAppStatus';
class DetailsPage extends Component {
    state={
        subjectCompliance: {
            dayCompliance: 0,
          weekCompliance: 0,
          monthCompliance: 0,
          totalCompliance: 0,
        }
    };

   


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
      const {navigation,t}= this.props;

      console.log(JSON.stringify(this.props));
        return (
            <Details
             navigation={navigation}
            // loading={loading}
            // subjectCompliance={subjectCompliance}
            // retrieveSubjectCompliance={this.retrieveSubjectCompliance}  
            // screenProps={screenProps}  
            />
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
export default DetailsPage
// export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(HomeScreen));