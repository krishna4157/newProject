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
import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";
import { TouchableHighlight } from 'react-native-gesture-handler';

var friends = ['Others1','Others2','Others3'];
class Others extends Component {
    state={
    };

    render() {
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
        return (
          <View>
            <SpringScrollView
              style={styles.scrollView}>
              {/* <Header /> */}
              {/* {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )} */}
              <View style={styles.body}>
                <View style={{padding:10}}>
                  
                   
                    {friends.map((name,index)=>{
                     return ( <TouchableHighlight onPress={()=>{
                      alert("hello!")
                      console.log('HELLO!');
                    }} style={{ borderWidth: 1,
                      borderColor: '#ddd',
                      borderBottomWidth: 0,
                      shadowColor: '#000',
                      shadowOffset: { width: 10, height: 20 },
                      shadowOpacity: 10,
                      shadowRadius: 2,
                      elevation: 10,borderRadius:20,backgroundColor:'white',marginTop:10 }}>
                    <View>
                    <View 
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10
                      }}
                    >
                      <CardTitle title={name} subtitle={index} />
                      <AwesomeButton backgroundColor="red" textColor="white">
                        <Text style={{color:'white'}}>      X      </Text> 
                      </AwesomeButton>
                    </View>
                    <View style={{flexWrap: 'wrap',height:210,backgroundColor:'red',borderRadius:30}}>
                    <Image
                    style={{width:'100%',height:'100%',borderBottomLeftRadius:20,borderBottomRightRadius:20}}
                     source={{ uri: 'https://cdn.aarp.net/content/dam/aarp/money/scams_fraud/2019/12/1140-puppy-sad.jpg'}}
                    />
                    </View>
                    </View>
                  </TouchableHighlight>)})}
                  </View>
              </View>
            </SpringScrollView>
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
        backgroundColor: '#F2F2F2',
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