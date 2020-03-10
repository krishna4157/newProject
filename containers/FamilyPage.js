import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import Family from '../components/Family';
import { BackHandler, Alert,View, Text } from 'react-native';
import { MenuProvider } from "react-native-popup-menu";
import AsyncStorage from "@react-native-community/async-storage";
import theme from 'react-native-theme';

// import { getDeviceToken } from '../utils/pushNotification/configurePushNotification';
// import { retrieveSubjectCompliance } from '../utils/homeUtils';
// import { withNavigationFocus } from "react-navigation";
// import {setCurrentScreen} from '../actions/storeAppStatus';
class FamilyPage extends Component {
    state={
      data1:'',  
      subjectCompliance: {
            dayCompliance: 0,
          weekCompliance: 0,
          monthCompliance: 0,
          totalCompliance: 0,
        }
    };

    componentDidMount = async()=>{
      let encryptedForms = await AsyncStorage.getItem("FamilyData");
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
        const{navigation}=this.props;
      const {data1}= this.state;
        return (
          <MenuProvider>
            {data1!='' ? <Family navigation={navigation} data1={data1}
             
             /> : 
             <View style={{ flex:1,
              width:'100%',
              height:'100%',
              backgroundColor:theme.name=='default'? 'white':'black'}}>
             <View style={{backgroundColor:'red'}}>
               <Text style={{color:'white',textAlign:'center'}}>No Data Available</Text>
             </View>
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
export default FamilyPage
// export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(HomeScreen));