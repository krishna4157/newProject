import React, { Component } from "react";
import {styles} from 'react-native-theme';
import LinearGradient from 'react-native-linear-gradient';
import {
  Container,
  Button,
  Title,
  Content,
  List,
  ListItem,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Header
} from "native-base";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Animated as NewAnimated
} from "react-native";
import {
  Card,
  CardTitle,
} from "react-native-material-cards";
import Animated, { Easing } from 'react-native-reanimated';
import {
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
// import stylesss from '../styles';
// import Compliance from './ProgressBar';
// import styles from '../components/styles/homeStyles';
// import { NavigationEvents, SafeAreaView } from 'react-navigation';
// import { backgroundColor } from '../containers/NavigationScreens';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faUser,
  faFax,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import  _ from 'lodash'
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
var Friends = ["Friends1", "Family2", "Others3"];
import { showMessage, hideMessage } from "react-native-flash-message";
import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";
import AsyncStorage from "@react-native-community/async-storage";
import MapView ,{PROVIDER_GOOGLE} from 'react-native-maps'
import { NavigationEvents } from "react-navigation";
import t from '../constants/TextTranslate';
import theme from 'react-native-theme';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
// import Translate from 'yandex-translate'
// import { resolve } from "url";
// import {Header} from 'react-native-elements';
// let data
var s = ''
let data = [];
let apikey = 'trnsl.1.1.20200304T084451Z.88e3100b0e437a11.05e1eb13b2103bee9e17fc5b43ef04224d906108'
var i=0;
var request = require('yandex-translate')(apikey);

apiKey= 'trnsl.1.1.20200304T084451Z.88e3100b0e437a11.05e1eb13b2103bee9e17fc5b43ef04224d906108'

class Feed extends Component {
  constructor(){
    super();
    this.animatedValue = new Animated.Value(0),
    this.moveAnimation = new NewAnimated.ValueXY({ x: -180, y: 0 })
    this.textAnimation = new NewAnimated.ValueXY({ x: 20, y: 0 })
    this.state={
    opacity: new NewAnimated.Value(0),
    products: '',
    time: Date.now(),
    onTapUserName: '',
    text: 'FEED',
      }

    }


    onLoad = () =>{
      NewAnimated.timing(this.state.opacity,{
        toValue: 1,
        // easing: Easing.back(),
        duration:500,
        useNativeDriver: true,
      }).start();
    }
      async componentDidUpdate(prevProps){
        // alert(JSON.stringify(prevProps));
      }



      async componentDidMount(){
        console.log('commponet Mounted!!');
        // this.interval = setInterval(()=>{
        //   this.setState({
        //     time: Date.now()
        //   })
        //   },1000);
        // if(i==0){
        // this.t('FEED');
        this.onRefreshData();
        // request.translate('You can burn my house.', { to: 'hi' }, function(err, res) {
        //   alert(res.text);
        //   console.log('HELLO');
        // });
        const {data1}= this.props
        this.setState({
          products: data1
        })
        // i++;
      // }
      
    }

      setDataTo = async(Relation,userdata,index)=>{
        // alert('Sending Data!!!');
        const{products}=this.state;
          if(products!=''){
            if(Relation=='family'){
              // alert('Family Called!');
              data = await AsyncStorage.getItem('FamilyData');
              let removedData = _.remove(products,function(n){
                console.log("N :"+JSON.stringify(n));
                return userdata.name != n.name;
              })
              let temp = JSON.parse(data);
              temp.push(userdata);
              let stringify = JSON.stringify(temp);
              AsyncStorage.setItem('FamilyData',stringify);
              this.setState({
                products: removedData
              })
              AsyncStorage.setItem('Forms',JSON.stringify(removedData));
              console.log("Data Removed : "+JSON.stringify(removedData));
              console.log("Family Data: "+data);
            } else if(Relation=='friends'){
              // alert('Friends Called!');
              data = await AsyncStorage.getItem('FriendsData');
              let removedData = _.remove(products,function(n){
                console.log("N :"+JSON.stringify(n));
                return userdata.name != n.name;
              })
              let temp = JSON.parse(data);
              temp.push(userdata);
              let stringify = JSON.stringify(temp);
              AsyncStorage.setItem('FriendsData',stringify);
              this.setState({
                products: removedData
              })
              AsyncStorage.setItem('Forms',JSON.stringify(removedData));
              console.log("Data Removed : "+JSON.stringify(removedData));
              console.log("Family Data: "+data);
              
            } else if(Relation=='Others'){
              // alert('Others Called!');
              data = await AsyncStorage.getItem('OthersData');
              let removedData = _.remove(products,function(n){
                console.log("N :"+JSON.stringify(n));
                return userdata.name != n.name;
              })
              let temp = JSON.parse(data);
              temp.push(userdata);
              let stringify = JSON.stringify(temp);              
              AsyncStorage.setItem('OthersData',stringify);
              this.setState({
                products: removedData
              })
              AsyncStorage.setItem('Forms',JSON.stringify(removedData));
              console.log("Data Removed : "+JSON.stringify(removedData));
              console.log("Others Data: "+data);
              
            }
          
          }



      }

      onRefreshData= async()=>{
        let encryptedForms = await AsyncStorage.getItem("Forms");
        // alert(this.props.locale);
          var data = JSON.parse(encryptedForms);
          this.setState({
              products: data
          })
          console.log('this state data :'+this.state.products);
      }

  

  render() {
     const {products,onTapUserName}=this.state;
     const {data1,navigation}=this.props;
    console.log('products'+products);
    return (
      <View>
        <NavigationEvents 
          onWillFocus={()=>{
            setTimeout(() => {
              // this._scrollView.endRefresh();
              this.onRefreshData();
            }, 2000);
          }}
        />
          <Header style={styles.HeaderStyle} >
            <Title style={styles.fontColor}>{t('FEED')}</Title>
          </Header>
        <SpringScrollView
        ref ={ref => (this._scrollView = ref)} 
        onRefresh={()=>{
          setTimeout(() => {
            this._scrollView.endRefresh();
            this.onRefreshData();
          }, 2000);
        }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
      
          {products!=null && products!='' && products.map(
                (userdata,index)  => {
                 console.log("userdata :"+JSON.stringify(userdata));
                 console.log("index :"+index);
                //  console.log("Keys :"+data);
                return (
                  <TouchableWithoutFeedback style={{borderRadius:30}} onPress={()=>{
                    if(userdata.name!=onTapUserName){
                    this.setState({
                      onTapUserName: userdata.name
                    })} else{
                      this.setState({
                        onTapUserName: ''
                      })
                    }
                    }}>
                  <Animated.View 
                  // style={{height:300,width:"150%",backgroundColor:'green',zIndex:1,borderBottomEndRadius:200,borderBottomStartRadius:200}} 
                  style={styles.cardStyle}
                  >
                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10,
                        width:'100%',
                        borderRadius:userdata.name==onTapUserName ? 20 :0,
                        borderBottomRightRadius:0,
                        borderBottomLeftRadius:0,


                      }}
                    >
                      <View style={{width:'90%'}}>
                      <Text style={styles.fontStyle} >{userdata.name}</Text>
                    <Text style={styles.subtitleStyle}>{userdata.city}</Text>
                      </View>
                      <Menu>
                        <MenuTrigger>
                          <FontAwesomeIcon
                            size={25}
                            icon={faEllipsisV}
                            color="white"
                          />
                        </MenuTrigger>
                        <MenuOptions>
                          <MenuOption
                            onSelect={() => {
                              this.setDataTo('family',userdata,index)
                              /* HERE WE GONE SHOW OUR FIRST MESSAGE */
                              // showMessage({
                              //   message: "Simple message",
                              //   type: "info"
                              // });
                            }}
                          >
                            <Text style={{ fontSize: 20 ,textAlign:'center'}}>Add to Family</Text>
                          </MenuOption>
                          <MenuOption
                            onSelect={() => {
                              this.setDataTo('friends',userdata,index)
                              // alert(`Added to Friends`)
                            }}
                          >
                            <Text style={{ fontSize: 20,textAlign:'center' }}>
                              Add to Friends
                            </Text>
                          </MenuOption>
                          <MenuOption onSelect={() => 
                            {
                              this.setDataTo('Others',userdata,index);
                              // alert(`Added to Others`)
                              }}>
                            <Text style={{ fontSize: 20,textAlign:'center' }}>Add to Others</Text>
                          </MenuOption>
                        </MenuOptions>
                      </Menu>
                      {/* <AwesomeButton style={{height:5}} backgroundColor='red' textColor='white' >  X  </AwesomeButton> */}
                    </LinearGradient>
                   
                    {/* <CardImage
                      resizeMode='contain'
                      title="Above all i am here"
                      source={{
                        uri:
                          "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg"
                      }}
                    /> */}
                     <View  style={{height:userdata.name==onTapUserName ? 200: 0,borderRadius:100}}>
                    {userdata.name==onTapUserName && <Button style={{backgroundColor:'white',width:'100%',height:'100%',borderRadius:20}} onPress={()=>{
                      // alert('hello world');
                      navigation.navigate('UserDetails',{'userdata':userdata})
                    //  this.props.navigation.navigate('Details')
                    }}>
                    <NewAnimated.Image  
                    onLoad={this.onLoad} 
                    {...this.props}
                    style={{
                      opacity: this.state.opacity,
                      transform: [
                        {
                          scale : this.state.opacity.interpolate({
                            inputRange: [0,1],
                            outputRange:[0.85,1],
                          })
                        }
                      ],
                      flexWrap:'wrap',resizeMode:'cover',width:'100%',height:'110%',borderBottomLeftRadius:20,borderBottomRightRadius:20}}
                     source={{ uri: userdata.url}}
                    />
                    </Button>}
                   
                    </View>
                    </Animated.View>
                  </TouchableWithoutFeedback>
                );
              })}
           <View>
            </View>
          </View>
        </SpringScrollView>
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   scrollView: {
//     height:'100%',
//     backgroundColor: Colors.lighter
//   },
//   engine: {
//     position: "absolute",
//     right: 0
//   },
//   body: {
//     backgroundColor: theme.name=='default' ? Colors.appBackground : 'red',
//     padding:10
//   },
//   sectionContainer: {
//     flexDirection: "row",
//     backgroundColor: Colors.FamilyHeader,
//     padding: 15,
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 24
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//     color: Colors.black,
//     textAlign: "center"
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: "400",
//     color: Colors.dark
//   },
//   highlight: {
//     fontWeight: "700"
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: "600",
//     padding: 4,
//     paddingRight: 12,
//     textAlign: "right"
//   }
// });
export default Feed;
