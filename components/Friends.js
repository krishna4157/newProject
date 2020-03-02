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

import Colors from '../constants/Colors';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";
import AsyncStorage from '@react-native-community/async-storage';
import  _ from 'lodash'
import { faUser,faFax,faUserSecret,faAddressBook,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


var friends = ['Friends1','Friends2','Friends3'];

class Friends extends Component {
    state={
      products2: '',

    };

    async componentDidMount(){
      const {data1}= this.props
      this.setState({
        products2: data1
      })
      console.log('datafriends : '+JSON.stringify(data1))
    }


    setDataToFeeds = async(userdata,index)=>{
      alert('Sending Data!!!');
      const{products2}=this.state;
      let data = await AsyncStorage.getItem('Forms');
      if(products2!=''){
            alert('Feeds Called!');
            
            let removedData = _.remove(products2,function(n){
              console.log("N :"+JSON.stringify(n));
              return userdata.name != n.name;
            })
            let temp = JSON.parse(data);
            temp.push(userdata);
            let stringify = JSON.stringify(temp);
            AsyncStorage.setItem('Forms',stringify);
            AsyncStorage.setItem('FriendsData',JSON.stringify(removedData));

            this.setState({
              products2: removedData
            })
            console.log("Data Removed : "+JSON.stringify(removedData));
            console.log("Family Data: "+data);
        
        }
      }
  

    render() {
      const {products2}=this.state;
        return (
          <View>
            <SpringScrollView
style={styles.scrollView}
bounces={true}
//  initialContentOffset={{ x: 0, y: 550 }}

>
              <View style={styles.body}>
              {products2=='' || products2==null &&  
              <View style={{justifyContent:'center',backgroundColor:'red'}}>
              <Text style={{textAlign:'center'}}>No data Available</Text>
              </View>}
                <View style={{padding:10}}>
                  
                   {console.log("in component :"+JSON.stringify(products2))}
                {products2!=null && products2!='' && products2.map((userdata,index)=>{
                     return (
                      <TouchableHighlight onPress={()=>{
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
                      <Card>
                      <View 
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          padding: 10
                        }}
                      >
                        <CardTitle title={userdata.name} subtitle={userdata.url} />
                        <AwesomeButton onPress={()=>{this.setDataToFeeds(userdata)}} backgroundColor="red" textColor="white">
                        <FontAwesomeIcon style={{padding:25}} icon={faTimes} /> 
                        </AwesomeButton>
                      </View>
                      <View style={{flexWrap: 'wrap',height:210,backgroundColor:'white',borderRadius:30}}>
                      <Image
                      style={{width:'100%',height:'100%',borderBottomLeftRadius:20,borderBottomRightRadius:20}}
                       source={{ uri: 'https://cdn.aarp.net/content/dam/aarp/money/scams_fraud/2019/12/1140-puppy-sad.jpg'}}
                      />
                      </View>
                      </Card>
                    </TouchableHighlight>
                    )})}
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
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        height:'100%'
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
export default Friends;