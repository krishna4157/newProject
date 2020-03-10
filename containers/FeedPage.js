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
var i=0;
class FeedPage extends Component {
    state={
      date : '',
      data1: '',
      locale: 'en',
        subjectCompliance: {
            dayCompliance: 0,
          weekCompliance: 0,
          monthCompliance: 0,
          totalCompliance: 0,
        }
    };
    // async componentDidUpdate(prevProps){
    //   let locale = await AsyncStorage.getItem("Locale");
    //   alert(locale)
    //   setTimeout(()=>{
    //   if(this.state.locale!=locale){
    //   this.setState({
    //     locale: locale
    //   })
    //   }
    // },3000)

    // }

    async componentDidUpdate(prevProps){
      // setInterval(()=>{
      //   this.setState({
      //     date : 'number'
      //   })
      // },2000)
      // alert(JSON.stringify(prevProps));
      let locale = await AsyncStorage.getItem("Locale");
      // alert(JSON.stringify(locale));
      if(i<=1){
        this.setState({
          locale: locale
        })
        i++;
      }
    }
    
    componentDidMount = async()=>{
      let encryptedForms = await AsyncStorage.getItem("Forms");
      let locale = await AsyncStorage.getItem("Locale");
      // alert(locale);
      if(this.state.locale!=locale){
        this.setState({
          locale: locale
        })
      }
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
    
      const{data1,locale}=this.state;
      const {navigation}= this.props;
        console.log("Static Data : "+data1);
        return (
          <MenuProvider>
            {data1!='' ? <Feed locale={locale} data1={data1} navigation={navigation}
             
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