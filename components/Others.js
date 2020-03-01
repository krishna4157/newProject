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
import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";
import { TouchableHighlight } from 'react-native-gesture-handler';

var friends = ['Others1','Others2','Others3'];
var products2 = ''

class Others extends Component {
    state={

    };

    render() {
      const {data1}=this.props;
      console.log("Y::"+data1);
    var product =  [{
      'name': 'Family1',
      'url' : 'url'
    },{
      'name': 'Product2',
      'url': 'url2'
    }];
    if(data1!=null){
      if(data1.length!=0 || data1!=null){
        products2 = data1;
        console.log("unknownDATAdata1 :"+data1.length);
    } else if(data1.length==0 && data1==undefined) {
      products2 =  [{
        'name': 'Product 1',
        'url' : 'url'
      },{
        'name': 'Product 2',
        'url': 'url2'
      }];
      console.log("unknownDATA :"+JSON.stringify(data1))
      }
      }
    // console.log(JSON.stringify(productsIds));
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
              {products2==null || products2=='' && 
              <View style={{justifyContent:'center',backgroundColor:'red'}}>
              <Text style={{textAlign:'center'}}>No data Available</Text>
              </View>}
                <View style={{padding:10}}>
                  
                   
                {products2!=null && products2!='' &&  products2.map((userdata,index)=>{
                     return ( <TouchableHighlight onPress={()=>{
                      alert("hello!")
                      console.log('HELLO!');
                    }} style={{ 
                      borderWidth: 1,
                      borderColor: '#ddd',
                      borderBottomWidth: 0,
                      shadowColor: '#000',
                      shadowOffset: { width: 10, height: 20 },
                      shadowOpacity: 10,
                      shadowRadius: 2,
                      elevation: 10,
                      borderRadius:20,
                      backgroundColor:'white',
                      marginTop:10 
                      }}>
                    <View>
                    <View 
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10
                      }}
                    >
                      <CardTitle title={userdata.name} subtitle={userdata.url} />
                      <AwesomeButton backgroundColor="red" textColor="white">
                        <Text style={{color:'white'}}>      X      </Text> 
                      </AwesomeButton>
                    </View>
                    <View style={{flexWrap: 'wrap',height:210,backgroundColor:'white',borderRadius:30}}>
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