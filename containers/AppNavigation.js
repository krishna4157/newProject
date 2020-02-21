import React, { Component } from "react";
import NavigationScreens from "./NavigationScreens.js";
// import NetInfo from '@react-native-community/netinfo'
// import {storeAppStatus} from '../actions/storeAppStatus';
// import OfflineNotice from '../components/OfflineNotice';
import { connect } from "react-redux";
// import { storeOfflineFormsToSync} from '../actions/storeAppStatus';
import { bindActionCreators } from "redux";
import { View } from 'react-native';
// import {getOfflineForms,checkForDataSync} from '../utils/offline/dataSync';
// import  {storeSyncStatus,updateSyncCompleteStatus} from '../actions/storeAppStatus';
// import _ from 'lodash';
import AsyncStorage from "@react-native-community/async-storage";
// import Popup from "../components/Popup";
var i=0;
import Home from './homePage';

var dataSubmit=0;
class AppNavigation extends Component {

  state={
    disappear:false,
    isInternetReachable:'',
    connectionStatus: '',
    visible: false,
    errorMessage: '',
    // Status:'',
    // loading: true,
    // isConnected: false,
    // locale: 'en-US',
    // isReady: false,
  }

//   componentWillUnmount() {
//     NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
//  }

//  componentDidMount(){
//   // this.unsubscribe();
//   NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
// }

// dataSubmitSuccess(){
//   dataSubmit=0;
// };


// componentDidUpdate(prevProps){
//   const {updateSyncCompleteStatus,storeOfflineFormsToSync,getOfflineForms,appStatus,storeSyncStatus}= this.props;
//    prevProps =  prevProps;
//    const prevAppStatus = {
//      ...prevProps.appStatus,
//      isSyncing: null,
//      syncCompleted: null,
//    };
//    const currentAppStatus ={
//      ...appStatus,
//      isSyncing: null,
//      syncCompleted: null,
//    };

//    const prevprops ={
//       isDeviceOnline: prevProps.appStatus.isDeviceOnline,      
//    }

//    const currentprops = {
//      isDeviceOnline: appStatus.isDeviceOnline
//    }
//    if(!_.isEqual(prevprops,currentprops) && appStatus.isDeviceOnline==true){
//     this.stopToaster();
//    }
//    if(!_.isEqual(prevAppStatus, currentAppStatus)){
//       checkForDataSync(appStatus,storeSyncStatus,updateSyncCompleteStatus,storeOfflineFormsToSync,dataSubmit,this.dataSubmitSuccess);
      
//    }
//   NetInfo.isConnected.fetch().then(isInternetReachable	 => {
//     if(i==0){
//        if(this.props.isConnected==true && this.props.appStatus.isDeviceOnline==true){
//           } else{
//             this.setState({
//               disappear:false
//             })
//           }
//     this.setState({isInternetReachable:isInternetReachable});
//     i++;
//   }
//   })
// }
// handleConnectivityChange = state => {
//   const {storeAppStatus,appStatus,screenProps:{t}} = this.props;
//   i=0;
//   if(state.type=="none" || state.type=="unknown"){
//     storeAppStatus(false); 
//     this.setState({
//       visible:true,
//       errorMessage:t('OfflineMessage'),
//     })

//    } else {    
//      storeAppStatus(true);  
//    }
// }


// closePopup = () => {
//   this.setState(prevState => {
//     return {
//     ...prevState,
//     errorMessage: '',
//     visible:false,
//   }});
// }

// checkFunction=(prevProps)=>{
//   const{appStatus}=this.props;
//   if(prevProps.appStatus.isDeviceOnline != appStatus.isDeviceOnline && appStatus.isDeviceOnline==true && prevProps!=0){
//     return true;
//   } else {
//     return false;
//   }
// }
  
// stopToaster=()=>{
//   setTimeout(() => {this.setState({disappear: true})}, 3000);
// }
  
  render() {
    return (
      <View style={{flex:1,backgroundColor:'red'}}>
      {/* {disappear ==false && <OfflineNotice t={screenProps.t} isInternetReachable={isInternetReachable} isConnected={isConnected} />} */}
      {/* <NavigationScreens
      /> */}
      <NavigationScreens />
    {/* { appStatus.isDeviceOnline ==false &&<Popup t={screenProps.t} message={errorMessage} visible={visible} closePopup={this.closePopup} color={"#e57373"}  />} */}
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   isConnected: state.appStatus.isDeviceOnline,
//   appStatus: state.appStatus,

// });

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     storeAppStatus,
//     storeOfflineFormsToSync,
//     getOfflineForms,
//     checkForDataSync,
//     storeSyncStatus,
//     updateSyncCompleteStatus,
//   },
//   dispatch,
// );

export default AppNavigation;

// export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);