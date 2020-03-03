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


  render() {
    const {products1}=this.state;
    const {data1}=this.props;
    console.log("Family Data : "+products1);
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
    return (
     
      <View>
        <NavigationEvents 
          onDidFocus={()=>{
            console.log("Focus Called")
            this.setState({
              products1: data1
            })      
          }}
        />
        <SpringScrollView
           style={{backgroundColor:'white',height:'100%'}}
           bounces={true}
        >
          <View style={styles.body}>
          {products1==null || products1=='' && 
              <View style={{justifyContent:'center',backgroundColor:'red'}}>
              <Text style={{textAlign:'center'}}>No data Available</Text>
              </View>}
            <View style={{paddingBottom:10,padding:5,height:'120%'}}>
              {console.log("products : "+products1)}
              {products1!=null && products1!='' && products1.map((userdata, index) => {
                
                return (
                  
                  <Card style={{ borderRadius:20,backgroundColor:'white',marginTop:10 }}>
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
                     source={{ uri: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg'}}
                    />
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
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    height:'100%'
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
export default Family;
