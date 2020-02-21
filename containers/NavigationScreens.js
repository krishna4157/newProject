import React, { Component } from 'react';
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator as createBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import { createMaterialBottomTabNavigator as createBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, Entypo, Feather, Foundation } from '@expo/vector-icons';
import { Dimensions } from "react-native";
// import Diary from './diaryPage';
 import FamilyPage from './FamilyPage';
 import TabPage from './FriendsPage';
import OthersPage from './OthersPage';
import Family from '../components/Family';
import { Container, Text,Button, Title, Content, List, ListItem, Icon, Left, Body, Right, Switch, View } from 'native-base';

import FriendsPage from './FriendsPage';
// import EDiaryForm from './formPage';
// import SideBar from '../components/SideBar';
// import Theme from '../components/Theme';
// import EventCalender from './calendarPage';
// import Messages from './messagesPage';
// import Faq from '../containers/faqPage';
// import Contact from './contactPage';
// import ChangeLanguage from './changeLanguagePage';
// import Login from '../containers/loginPage';
// import SubjectTimeZone from '../containers/timeZonePage';
// import PinChange from '../components/securePIN/PinChange';
// import PinValidation from '../components/securePIN/PinValidation'
// import PinSetup from '../components/securePIN/PinSetup';
// import InitialScreen from '../containers/initialScreen';
// import AppLock from '../components/AppLock';
// import UserValidation from '../components/forgotPassword/UserValidation';
// import ResetPassword from '../components/forgotPassword/ResetPassword';
// import OtpVerification from '../components/forgotPassword/OtpVerification';

export const backgroundColor = 'red'
const tintColor = '#eceff1'
const mainScreenNavigator = createBottomTabNavigator({
    Family: {screen : FamilyPage,
        navigationOptions:{
            tabBarLabel :
            <Text style={{marginBottom:10,color:'white'}}>Family</Text>,
            tabBarIcon: ( ) => (
                <FontAwesome name='accusoft' color={'red'} size={12} />
              )
        }
    },
    Friends : {screen: FriendsPage,
        navigationOptions:{
            tabBarLabel :
            <Text style={{marginBottom:10,color:'white'}}>Friends</Text>
        }},
    Others: {screen : OthersPage,
        navigationOptions:{
            tabBarLabel :
            <Text style={{marginBottom:10,color:'white'}}>Others</Text>
        }},
    // AskQuestions: AskQuestions,

},{
    initialRouteName: 'Family',
    activeColor: '#F44336',
    inactiveColor:'white',
    barStyle: {
        backgroundColor: 'grey',
        padding:10 
    },   
  });


// const DiaryStack = createStackNavigator({
//     Diary: Diary,
//     Form: EDiaryForm,
// },
// {
//     defaultNavigationOptions: ({ navigation }) => ({
//         headerStyle: {
//             height:50,
//             backgroundColor: backgroundColor,
//             // marginTop: -Constants.statusBarHeight,
//         },
//         headerForceInset: { 
//             top:    'never', 
//             bottom: 'never', 
//         },
//         headerTintColor: tintColor,
//         headerTitleStyle: {
//             fontWeight: 'bold',
//             alignSelf: 'center'
//         },
//         gestureEnabled: false,
//     }),
// });

// const MoreOptionsStack = createStackNavigator({
//     More: SideBar,
//     Messages: Messages,
//     ChangeTheme: Theme,
//     EventCalender: EventCalender,
//     FAQ: Faq,
//     ChangeLanguage: ChangeLanguage,
//     Contact: Contact,
//     Form: EDiaryForm,
//     SubjectTimeZone: SubjectTimeZone,
//     AppLock: AppLock,
//     PinChange: PinChange,
//     PinSetup: PinSetup,
// },
// {
//     defaultNavigationOptions: ({ navigation }) => ({
//         headerStyle: {
//             height: 50,
//             backgroundColor: backgroundColor,
//             // marginTop: -Constants.statusBarHeight,
//         },
//         headerForceInset: { 
//             top:    'never', 
//             bottom: 'never', 
//         },
//         headerTintColor: tintColor,
//         headerTitleStyle: {
//             fontWeight: 'bold',
//             alignSelf: 'center'
//         },
//         gestureEnabled: false,
//     }),
// });

// const RootTabs = createBottomTabNavigator({
//     homeTab: {
//         screen: HomeStack,
//         navigationOptions: () => ({
//             title: 'HomeTitle',
//         })
//     },
// })
//     diaryTab: {
//         screen: DiaryStack,
//         navigationOptions: ({ screenProps: { t } }) => ({
//             title: t('HomePatnt_Diary'),
//             gestureEnabled: false,
//         })
//     },
//     moreTab: {
//         screen: MoreOptionsStack,
//         navigationOptions: ({ screenProps: { t } }) => ({
//             title: t('Actn_sheetMore'),
//             gestureEnabled: false,
//         })
//     },
// },
//     {
//         defaultNavigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, tintColor }) => {
//                 const { routeName } = navigation.state;
//                 if (routeName === 'homeTab') {
//                     return focused ? <Foundation name="home" size={24} color={tintColor} /> : <Feather name="home" size={24} color={tintColor} />;
//                 } else if (routeName === 'diaryTab') {
//                     return focused ? <MaterialCommunityIcons name="book-open-page-variant" size={24} color={tintColor} /> : <Entypo name="book" size={24} color={tintColor} />;
//                 } else if (routeName === 'moreTab') {
//                     return focused ? <MaterialIcons name="info" size={24} color={tintColor} /> : <MaterialIcons name="info-outline" size={24} color={tintColor} />;
//                 }
//             },
//         }),
//         // shifting: true,
//         order: ['diaryTab', 'homeTab', 'moreTab'],
//         initialRouteName: 'homeTab',
//         // tabBarComponent: TabBarBottom,
//         tabBarPosition: 'bottom',
//         activeTintColor: backgroundColor,
//         inactiveTintColor: '#90a4ae',
//         barStyle: { backgroundColor: '#fff', borderTopWidth: 0, },
//         animationEnabled: true,
//     });

// const AuthStack = createStackNavigator({
//     InitialScreen: InitialScreen,
//     PinValidate: PinValidation,
//     Login : Login,
//     ChangeLanguage: ChangeLanguage,
//     SubjectTimeZone: SubjectTimeZone,
//     PinSetup: PinSetup,
//     PinChange: PinChange,
//     UserValidation,
//     ResetPassword,
//     OtpVerification,
// },
//     {   
//         headerMode: 'none',
//         defaultNavigationOptions: ({ navigation }) => ({
//             headerVisible: true,
//             gestureEnabled: false,
//         }),
// });

// const AppRoutes = createSwitchNavigator({
//      Auth: RootTabs,
//     RootTabs: RootTabs,
// },
    // {   
    //     initialRouteName: 'RootTabs',
    // });

export default createAppContainer(mainScreenNavigator);