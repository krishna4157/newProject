import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import Home from '../components/Family';
import { BackHandler, Alert,View,Text } from 'react-native';
import { MenuProvider } from "react-native-popup-menu";
import Feed from "../components/Feed";
import AsyncStorage from "@react-native-community/async-storage";
// import { getDeviceToken } from '../utils/pushNotification/configurePushNotification';
// import { retrieveSubjectCompliance } from '../utils/homeUtils';
// import { withNavigationFocus } from "react-navigation";
// import {setCurrentScreen} from '../actions/storeAppStatus';
class FeedPage extends Component {
    state={
      data1: '',
        subjectCompliance: {
            dayCompliance: 0,
          weekCompliance: 0,
          monthCompliance: 0,
          totalCompliance: 0,
        }
    };

    
    componentDidMount = async()=>{
      let encryptedForms = await AsyncStorage.getItem("Forms");
        var data = JSON.parse(encryptedForms);
        this.setState({
            data1: data
        })
        console.log('this state data :'+this.state.data1);
    }


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
    
    
    
    render() {
      const{data1}=this.state;
      const {navigation}= this.props;
        console.log("Static Data : "+data1);
        return (
          <MenuProvider>
            {data1!='' ? <Feed data1={data1} navigation={navigation}
             
            /> : <View>
              <Text>loading</Text>
            </View>}
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
export default FeedPage
// export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(HomeScreen));