import React, { Component } from 'react';
import { Container, Button, Title, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import {
    
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    PermissionsAndroid,
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  // import stylesss from '../styles';
// import Compliance from './ProgressBar';
// import styles from '../components/styles/homeStyles';
// import { NavigationEvents, SafeAreaView } from 'react-navigation';
// import { backgroundColor } from '../containers/NavigationScreens';
import Colors from '../constants/Colors';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import { faCog,faUser,faFax,faLanguage,faSignLanguage, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from "react-native-maps";

var arr = [faLanguage,faCog, faUser, faFax,faCoffee];
var MoreItems = ['Language','Settings','Logout','Themes','Support Us'];
class Maps extends Component {
    
  constructor(props){
    super(props);
    this.state= {
      paddingTop:1,
    mapMargin:1
    }
    }


    setMargin = () => {
      this.setState({mapMargin:0})
      }

    componentDidMount(){
      setTimeout(()=>this.setState({flex: 1}),1000);
}

_onMapReady() {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    .then(granted => {
      this.setState({ paddingTop: 0 });
    });
}



    render() {
      const{navigation}= this.props;
    //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
        return (
            <View style={{  width: "100%", height: "100%", paddingTop: this.state.paddingTop}}>
             <MapView 
             
             onMapReady={this._onMapReady} 
             ref={map => (this.map = map)}
             style={{marginBottom: this.state.mapMargin,flex:1}}
             provider='google'
             showsUserLocation={true}
             showsMyLocationButton={true}
             onMapReady={this._onMapReady}
                    >
                     
            
                      </MapView>
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
        scrollView: {
          backgroundColor: Colors.lighter,
          height:'100%',
          padding:5
        },
        engine: {
          position: 'absolute',
          right: 0,
        },
        body: {
          backgroundColor: Colors.OthersHeader,
        },
        sectionContainer: {
          flexDirection:'row',
          padding:15,
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
export default Maps;