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
import Colors from '../constants/Colors';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
var friends = ['Others1','Others2','Others3'];
class Others extends Component {
    state={
    };

    render() {
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
        return (
          <View>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              {/* <Header /> */}
              {/* {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )} */}
              <View style={styles.body}>
                <View>
                  
                   
                    {friends.map((name,index)=>{
                     return (<Card style={{borderRadious:30}}>
         <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                  <CardTitle 
    title={name} 
    subtitle={index}
   />
   <AwesomeButton backgroundColor='red' textColor='white' >  X  </AwesomeButton>
   </View>
                    
                    <CardImage  
                    title="Above all i am here"
                    source={{uri: 'https://cdn.aarp.net/content/dam/aarp/money/scams_fraud/2019/12/1140-puppy-sad.jpg'}} 
                    />
  {/* <View  style={{flex:1,flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}>    
    <View>
    <AwesomeButton backgroundColor='green' textColor='red'>Add to Family</AwesomeButton>
    </View>
    <View>
    <AwesomeButton backgroundColor='green' textColor='red' >Add to Friends</AwesomeButton>
    </View>
    <View>
    <AwesomeButton backgroundColor='green' textColor='red' >Add to Others</AwesomeButton>
    </View>
    </View> */}
                    </Card>)})}
                  </View>
              </View>
            </ScrollView>
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
        backgroundColor: 'grey',
      },
      sectionContainer: {
        flexDirection:'row',
        padding:15,
        backgroundColor: Colors.FriendsHeader,
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
export default Others;