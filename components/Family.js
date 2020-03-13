import React, { Component } from "react";
import {
  Card,
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
  View,
  CardItem,
} from "native-base";
import {
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  Animated,
  Image
} from "react-native";
import {
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-material-cards";
import {
  Header,
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
import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";

import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import  _ from 'lodash'
import { NavigationEvents } from "react-navigation";
var cardsList = ["Family1", "Family2", "Family3"];
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from 'react-native-theme';
import theme from "react-native-theme";

class Family extends Component {
  state = {
    products1:''
  };


  async componentDidMount(){
    const {data1}= this.props
    this.setState({
      products1: data1
    })
  }

  setDataToFeeds = async(userdata,index)=>{
    // alert('Sending Data!!!');
    let data = await AsyncStorage.getItem('Forms');
    console.log("FeedForms : "+data);
    const{products1}=this.state;
      if(products1!=''){
          // alert('Feeds Called!');
          
          
          let removedData = _.remove(products1,function(n){
            console.log("N :"+JSON.stringify(n));
            return userdata.name != n.name;
          })
          let temp = JSON.parse(data);
          temp.push(userdata);
          let stringify = JSON.stringify(temp);
          AsyncStorage.setItem('Forms',stringify);
          AsyncStorage.setItem('FamilyData',JSON.stringify(removedData));
          this.setState({
            products1: removedData
          })
          console.log("Data Removed : "+JSON.stringify(removedData));
          console.log("Family Data: "+data);
      
      }



  }



  onRefreshData= async()=>{
    let encryptedForms = await AsyncStorage.getItem("FamilyData");
    // alert(this.props.locale);
      var data = JSON.parse(encryptedForms);
      this.setState({
          products1: data
      })
      console.log('this state data :'+this.state.products);
  }


  render() {
    const {products1}=this.state;
    const {data1,navigation}=this.props;
    console.log("Family Data : "+products1);
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
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
          {products1==null || products1=='' && 
              <View style={{justifyContent:'center'}}>
              <Text style={{textAlign:'center'}}>No data Available</Text>
              </View>}
            <View style={{paddingBottom:10,padding:5,height:'120%'}}>
              {console.log("products : "+products1)}
              {products1!=null && products1!='' && products1.map((userdata, index) => {
                
                return (
                  
                  <Card style={{ borderRadius:20,backgroundColor:theme.name=='default'?'white':'grey',marginTop:10 }}>
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

export default Family;
