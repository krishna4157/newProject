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
  Switch
} from "native-base";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated
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
var Friends = ["Friends1", "Family2", "Others3"];
import { showMessage, hideMessage } from "react-native-flash-message";

class Feed extends Component {
  state = {};

  render() {
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
    return (
      <View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {/* <Header /> */}
          {/* {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )} */}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Feed Page</Text>
              <View>
                <AwesomeButton>Add to Family</AwesomeButton>
              </View>
            </View>
            <View>
              {Friends.map((name, index) => {
                return (
                  <Card style={{ borderRadious: 30 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10
                      }}
                    >
                      <CardTitle title={name} subtitle={index} />
                      <Menu>
                        <MenuTrigger>
                          <FontAwesomeIcon
                            size={20}
                            icon={faEllipsisV}
                            color="red"
                          />
                        </MenuTrigger>
                        <MenuOptions>
                          <MenuOption
                            onSelect={() => {
                              /* HERE WE GONE SHOW OUR FIRST MESSAGE */
                              showMessage({
                                message: "Simple message",
                                type: "info"
                              });
                            }}
                          >
                            <Text style={{ fontSize: 20 }}>Add to Family</Text>
                          </MenuOption>
                          <MenuOption
                            onSelect={() => alert(`Added to Friends`)}
                          >
                            <Text style={{ color: "red", fontSize: 20 }}>
                              Add to Friends
                            </Text>
                          </MenuOption>
                          <MenuOption onSelect={() => alert(`Added to Others`)}>
                            <Text style={{ fontSize: 20 }}>Add to Others</Text>
                          </MenuOption>
                        </MenuOptions>
                      </Menu>
                      {/* <AwesomeButton style={{height:5}} backgroundColor='red' textColor='white' >  X  </AwesomeButton> */}
                    </View>
                    <CardImage
                      title="Above all i am here"
                      source={{
                        uri:
                          "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg"
                      }}
                    />
                  </Card>
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
export default Feed;
