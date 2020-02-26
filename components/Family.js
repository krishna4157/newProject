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

import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import { TouchableOpacity } from "react-native-gesture-handler";
var cardsList = ["Family1", "Family2", "Family3"];
class Family extends Component {
  state = {};

  render() {
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
    return (
      <View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            <View style={{backgroundColor:'grey',paddingBottom:10,padding:5}}>
              {cardsList.map((name, index) => {
                return (
                  
                  <View style={{ borderRadius:20,backgroundColor:'white',marginTop:10 }}>
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
                     source={{ uri: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg'}}
                    />
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
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
