import React, { Component } from 'react';
import { Container, Button, Title, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import {
    
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
  } from 'react-native';
  import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
  import {
    Header,
    LearnMoreLinks,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  // import stylesss from '../styles';
// import Compliance from './ProgressBar';
// import styles from '../components/styles/homeStyles';
// import { NavigationEvents, SafeAreaView } from 'react-navigation';
// import { backgroundColor } from '../containers/NavigationScreens';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import Colors from '../constants/Colors';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import FriendsPage from '../containers/FriendsPage';
import { YourComponent } from '../constants/dialog';
class Relations extends Component {
    state={
    };

    render() {
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
        return (
            <View>
            <Text style={{fontSize:40}}>Hello world!</Text>
            <Menu>
              <MenuTrigger text='Select action' />
              <MenuOptions>
                <MenuOption onSelect={() => 
                
                <FriendsPage/>} text='Save' />
                <MenuOption onSelect={() =>YourComponent() } >
                  <Text style={{color: 'red'}}>Delete</Text>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
              </MenuOptions>
            </Menu>
          </View>  
        );
      }
    }
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'grey'
  },
  sectionContainer: {
    flexDirection:'row',
    backgroundColor: Colors.FamilyHeader,
    padding:15,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign:'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
export default Relations;