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
var cardsList = ["Family1", "Family2", "Family3"];
var products1 = ''
class Family extends Component {
  state = {};

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
      products1 = data1;
      console.log("unknownDATAdata1 :"+data1.length);
  } else if(data1.length==0 && data1==undefined) {
    products1 =  [{
      'name': 'Product 1',
      'url' : 'url'
    },{
      'name': 'Product 2',
      'url': 'url2'
    }];
    console.log("unknownDATA :"+JSON.stringify(data1))
    }
    }
    console.log('products'+products1);
    
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
    return (
     
      <View>
        <SpringScrollView
           style={{backgroundColor:'white'}}
           bounces={true}
        >
          <View style={styles.body}>
          {products1==null || products1=='' && 
              <View style={{justifyContent:'center',backgroundColor:'red'}}>
              <Text style={{textAlign:'center'}}>No data Available</Text>
              </View>}
            <View style={{backgroundColor:'#F2F2F2',paddingBottom:10,padding:5}}>
              {console.log("products : "+products1)}
              {products1!=null && products1!='' && products1.map((userdata, index) => {
                
                return (
                  
                  <View style={{ borderRadius:20,backgroundColor:'white',marginTop:10 }}>
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
                     source={{ uri: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg'}}
                    />
                    </View>
                  </View>
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
    backgroundColor: "grey"
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
