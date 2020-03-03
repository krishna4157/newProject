import React, { Component } from "react";
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
  Animated,
  Image
} from "react-native";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-material-cards";
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
// import {Header} from 'react-native-elements';
// let data
// var products = ''
let data = [];

class Feed extends Component {
  state={
    products: '',
      }


      async componentDidMount(){
        const {data1}= this.props
        this.setState({
          products: data1
        })
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
          var data = JSON.parse(encryptedForms);
          this.setState({
              products: data
          })
          console.log('this state data :'+this.state.products);
      }

  

  render() {
     const {products}=this.state;
     const {data1}=this.props;
    console.log('products'+products);
    return (
      <View>
          <Header style={{alignItems:'center',backgroundColor:Colors.headerTabColor}} >
            <Title>FEED</Title>
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
                  <View 
                  style={{  borderWidth: 1,
                    borderColor: '#ddd',
                    borderBottomWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 10, height: 20 },
                    shadowOpacity: 10,
                    shadowRadius: 2,
                    elevation: 10,borderRadius:20,backgroundColor:'white',marginTop:10 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10
                      }}
                    >
                      <CardTitle title={userdata.name} subtitle={userdata.url} />
                      <Menu>
                        <MenuTrigger>
                          <FontAwesomeIcon
                            size={25}
                            icon={faEllipsisV}
                            color="#3498DB"
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
                            <Text style={{ fontSize: 20 }}>Add to Family</Text>
                          </MenuOption>
                          <MenuOption
                            onSelect={() => {
                              this.setDataTo('friends',userdata,index)
                              // alert(`Added to Friends`)
                            }}
                          >
                            <Text style={{ color: "red", fontSize: 20 }}>
                              Add to Friends
                            </Text>
                          </MenuOption>
                          <MenuOption onSelect={() => 
                            {
                              this.setDataTo('Others',userdata,index);
                              // alert(`Added to Others`)
                              }}>
                            <Text style={{ fontSize: 20 }}>Add to Others</Text>
                          </MenuOption>
                        </MenuOptions>
                      </Menu>
                      {/* <AwesomeButton style={{height:5}} backgroundColor='red' textColor='white' >  X  </AwesomeButton> */}
                    </View>
                    <MapView 
                    style={{flex:1}}
                    provider={PROVIDER_GOOGLE}
                    region ={{
                      latitude: 42.882004,
                      longitude:74.582748,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421
                    }}
                    showsUserLocation
                    />
                    {/* <CardImage
                      resizeMode='contain'
                      title="Above all i am here"
                      source={{
                        uri:
                          "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg"
                      }}
                    /> */}
                     <View style={{height:200}}>
                    <Button style={{backgroundColor:'white',width:'100%',height:'100%',borderRadius:20}} onPress={()=>{
                      // alert('hello world');
                    }}>
                    <Image
                    style={{flexWrap:'wrap',resizeMode:'cover',width:'100%',height:'110%',borderRadius:20}}
                     source={{ uri: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg'}}
                    />
                    </Button>
                   
                    </View>
                  </View>
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
const styles = StyleSheet.create({
  scrollView: {
    height:'100%',
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.FamilyHeader,
    padding:10
  },
  sectionContainer: {
    flexDirection: "row",
    backgroundColor: Colors.FamilyHeader,
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
    textAlign: "center"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});
export default Feed;
