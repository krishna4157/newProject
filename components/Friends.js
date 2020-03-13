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
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";
import AsyncStorage from '@react-native-community/async-storage';
import  _ from 'lodash'
import { faUser,faFax,faUserSecret,faAddressBook,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import theme from 'react-native-theme';
import styles from 'react-native-theme'
import { NavigationEvents } from 'react-navigation';
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
      // alert('Sending Data!!!');
      const{products2}=this.state;
      let data = await AsyncStorage.getItem('Forms');
      if(products2!=''){
            // alert('Feeds Called!');
            
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


      onRefreshData= async()=>{
        let encryptedForms = await AsyncStorage.getItem("FriendsData");
        // alert(this.props.locale);
          var data = JSON.parse(encryptedForms);
          this.setState({
              products2: data
          })
          console.log('this state data :'+this.state.products2);
      }
  

    render() {
      const {products2}=this.state;
        return (
          <View style={{
            flex:1,backgroundColor:theme.name=='default'?'white':'black'}}>
            <NavigationEvents 
              onDidFocus={()=>{
               
                this.onRefreshData();      
              }}
            />
            <SpringScrollView
               ref ={ref => (this._scrollView = ref)} 
               onRefresh={()=>{
                 setTimeout(() => {
                   this._scrollView.endRefresh();
                   this.onRefreshData();
                 }, 2000);
               }}
              //  style={styles}
               bounces={true}
            >
              <View style={styles.body}>
              {products2==null || products2=='' && 
                  <View style={{justifyContent:'center'}}>
                  <Text style={{textAlign:'center'}}>No data Available</Text>
                  </View>}
                <View style={{paddingBottom:10,padding:5,height:'120%'}}>
                  {console.log("products : "+products2)}
                  {products2!=null && products2!='' && products2.map((userdata, index) => {
                    
                    return (
                      
                      <Card style={{ borderRadius:20,backgroundColor:theme.name=='default'?'white':'grey',marginTop:10 ,height:190}}>
                        <View 
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 10
                          }}
                        >
                          <CardTitle title={userdata.name} subtitle={userdata.subtitle} />
                          <AwesomeButton  onPress={()=>{this.setDataToFeeds(userdata)}} backgroundColor="red" textColor="white">
                          <View style={{width:50,alignItems:'center'}}>
                          <FontAwesomeIcon color={'white'} size={30} icon={faTimes}  />
                          </View>
                          </AwesomeButton>
                        </View>
                        <View style={{flexWrap: 'wrap',height:210,backgroundColor:'white',borderRadius:30}}>
                        <Button style={{backgroundColor:'white',width:'100%',height:'100%',borderRadius:20}} onPress={()=>{
                          // alert('hello world');
                          navigation.navigate('Maps',{'userdata': userdata}) 
                        }}>
                        <Image
                       style={{flexWrap:'wrap',resizeMode:'cover',width:'100%',height:'110%',borderRadius:20}}
                         source={{ uri: userdata.url}}
                        />
                        </Button>
                        </View>
                      </Card>
                    );
                  })}
                </View>
              </View>
            </SpringScrollView>
          </View>
        );
      }
    }
    // const styles = StyleSheet.create({
    //   scrollView: {
    //     backgroundColor: theme.name=='default'? 'white':'black',
    //     shadowColor: '#000000',
    //     shadowOffset: {
    //       width: 0,
    //       height: 3
    //     },
    //     shadowRadius: 5,
    //     shadowOpacity: 1.0,
    //     height:'100%'
    //   },
    //   engine: {
    //     position: 'absolute',
    //     right: 0,
    //   },
    //   body: {
    //     // backgroundColor: '#F2F2F2',
    //   },
    //   sectionContainer: {
    //     flexDirection:'row',
    //     padding:15,
    //     backgroundColor: Colors.FriendsHeader,
    //     justifyContent:'space-between',
    //     alignItems:'center',
    //     paddingHorizontal: 24,
    //   },
    //   sectionTitle: {
    //     fontSize: 24,
    //     fontWeight: '600',
    //     color: Colors.black,
    //     textAlign:'center'
    //   },
    //   sectionDescription: {
    //     marginTop: 8,
    //     fontSize: 18,
    //     fontWeight: '400',
    //     color: Colors.dark,
    //   },
    //   highlight: {
    //     fontWeight: '700',
    //   },
    //   footer: {
    //     color: Colors.dark,
    //     fontSize: 12,
    //     fontWeight: '600',
    //     padding: 4,
    //     paddingRight: 12,
    //     textAlign: 'right',
    //   },
    // });
export default Friends;