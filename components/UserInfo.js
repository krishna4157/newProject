import React, { Component } from 'react';
import { Container, Button, Title, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import {
    
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    Image,
  } from 'react-native';
  
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
import Colors from '../constants/Colors';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import { faCog,faUser,faFax,faLanguage,faSignLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import theme from 'react-native-theme';
import { NavigationEvents } from 'react-navigation';
import ImageViewer from 'react-native-image-zoom-viewer';
var arr = [faLanguage,faCog, faUser, faFax];
var MoreItems = ['Language','Settings','Logout'];
class UserInfo extends Component {
    state={
      t: 5
    };

    render() {
      const{userdata}= this.props;

      const images = [{
        // Simplest usage.
        url: userdata.url,
    
        // width: number
        // height: number
        // Optional, if you know the image size, you can set the optimization performance
    
        // You can pass props to <Image />.
        props: {
            // headers: ...
        }
    }]
      
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
        return (
            <View style={{flex:1,backgroundColor:'black'}}>
            <Text>{this.state.t}</Text>
            <NavigationEvents 
            onDidFocus={()=>{
              this.setState({
                t: t
              })
            }}
            />
            {/* <Modal visible={true} transparent={true}> */}
                 <ImageViewer imageUrls={images}/>
             {/* </Modal> */}
            <Text></Text>
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
          backgroundColor: Colors.OthersHeader,
        },
        sectionContainer: {
          flexDirection:'row',
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
export default UserInfo;