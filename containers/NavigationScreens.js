import React, { Component } from 'react';
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator as createBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import { createMaterialBottomTabNavigator as createBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, Entypo, Feather, Foundation } from '@expo/vector-icons';
import { Dimensions } from "react-native";
// import Diary from './diaryPage';
 import FamilyPage from './FamilyPage';
import OthersPage from './OthersPage';
// import Family from '../components/Family';
import { Container, Text,Button, Title, Content, List, ListItem, Left, Body, Right, Switch, View } from 'native-base';
import { Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee,faUser,faFax,faUsers,faUserSecret } from '@fortawesome/free-solid-svg-icons'

import FriendsPage from './FriendsPage';
import RelationsPage from './RelationsPage';
import RelationsMenuPage from './RelationsMenuPage';
import FeedPage from './FeedPage';
import MorePage from './MorePage';
import LoginPage from './LoginPage';
import LanguagePage from './LanguagePage';

// import {
//     Menu,
//     MenuProvider,
//     MenuOptions,
//     MenuOption,
//     MenuTrigger,
//   } from 'react-native-popup-menu';
// https://fontawesome.com/v4.7.0/icons/
const RelationNavigator = createStackNavigator({ 
    RelationsMenuPage : {
        screen: RelationsMenuPage
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
     initialRouteName: 'RelationsMenuPage',
     headerMode:'none'
   });

   const MoreTabs =  createStackNavigator({
    More: MorePage,
    Language: LanguagePage,
   })

   const RootTabs = createBottomTabNavigator({
    Feed: {screen : FeedPage,
        navigationOptions:{
            backgroundColor: 'green',
            activeColor: '#1DC7E2',  
            inactiveColor: 'black',  
            tabBarLabel : 
            <Text style={{marginBottom:10,color:'black',fontFamily:'Raleway'}}>Feeds</Text>,
            tabBarIcon: 
<FontAwesomeIcon
  icon={faCoffee} size={25} color='orange' />              
        }
    },
//     Feed: {screen : FamilyPage,
//         navigationOptions:{
//             tabBarLabel : 
//             <Text style={{marginBottom:10,color:'white'}}>Feeds</Text>,
//             tabBarIcon: 
// <FontAwesomeIcon
//   icon={faCoffee} color='red' />              
//         }
//     },
    Relations : {screen: RelationNavigator,
        navigationOptions:{
            backgroundColor: 'blue',
            activeColor: '#f60c0d',  
            inactiveColor: '#f65a22',  
            
                
            tabBarLabel :            
            <Text style={{marginBottom:10,color:'black'}}>Relations</Text>,            
            
            tabBarIcon:     
            <FontAwesomeIcon color='green' size={30}
            icon={faUsers} />
        }},
    More: {screen : MoreTabs,
        navigationOptions:{
            tabBarLabel :
            <Text style={{marginBottom:10,color:'black'}}>More</Text>,
            tabBarIcon:  
            <FontAwesomeIcon
            icon={faFax} size={20} color='black' />
            
        }},
    // AskQuestions: AskQuestions,

},{
     initialRouteName: 'Feed',
    activeColor: '#F44336',
    inactiveColor:'black',
    barStyle: {
        backgroundColor: 'white',
        padding:10,
        color:'black' 
    },
    navigationOptions: {
        tabBarOnPress: ( ) => {
            console.log("New Tab Screen tabBarOnPress working")
            // defaultHandler();
          }
    }   
  });

const AppNavigator = createStackNavigator({
    Login :{
        screen:LoginPage
    },
    RootTabs : {
        screen: RootTabs
    }, 
    RelationsMenuPage : {
        screen: RelationsMenuPage
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
     initialRouteName: 'Login',
     headerMode:'none'
   });


export const backgroundColor = 'red'
const tintColor = '#eceff1'


const Main = createStackNavigator({
    Login :{
        screen:LoginPage
    }, 
    RootTabs : {
        screen : RootTabs
    }, 
    RelationsMenuPage : {
        screen: RelationsMenuPage
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
     initialRouteName: 'Login',
     headerMode:'none'
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
//    mainScreenNavigator    headerForceInset: { 
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


   

    //    const AppContainer = createAppContainer(AppNavigator);


    //    const AppRoutes = createSwitchNavigator({
    //     AppNavigator: AppNavigator,
    //     RootTabs: RootTabs,
    // },
    //     {   
    //         initialRouteName: 'RootTabs',
    //     });

export default createAppContainer(AppNavigator);