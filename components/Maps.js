import React, { Component } from 'react';
import { Container, Button, Title, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import {
    
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    Dimensions,
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
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import { NavigationEvents } from 'react-navigation';
import MapViewDirections from 'react-native-maps-directions'
var arr = [faLanguage,faCog, faUser, faFax,faCoffee];
var MoreItems = ['Language','Settings','Logout','Themes','Support Us'];
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class Maps extends Component {
    
  constructor(props){
    // this.mapRef = null;
    super(props);
    this.state = {
paddingTop:1,
      mapMargin:1,
      coordinates: [
        {
          'latitude': 37.3317876,
          'longitude': -122.0054812,
        },
        {
          'latitude': 37.771707,
          'longitude': -122.4053769,
        },
      ],
    };
 
    this.mapView = null;
    }


    onMapPress = (e) => {
      this.setState({
        coordinates: [
          ...this.state.coordinates,
          e.nativeEvent.coordinate,
        ],
      });
    }


    componentDidMount() {
      let location =this.props.navigation.state.params.userdata.location;

      // this.mapView.fitToCoordinates(location, { edgePadding: { top: 10, right: 10, bottom: 10, left: 10 }, animated: false })
    }

    setMargin = () => {
      
    // alert('sfs')  
    }

    

onMapRender=()=> {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    .then(granted => {
      this.setState({ paddingTop: 0 });
      this.setState({mapMargin:0});
    });
}



    render() {
      const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyC5dUTX1m25NeILTFp5BTS4mpy8tDylbnc';
let userdata =this.props.navigation.getParam('userdata') || '';
const location = userdata.location;      
const{navigation}= this.props;
      //   const { subjectCompliance, retrieveSubjectCompliance, screenProps: { t } } = this.props;
      
      return (
            <View style={{  width: "100%", height: "100%", paddingTop: this.state.paddingTop}}>
             <NavigationEvents style={{flex:1}} onWillBlur={()=>{
               setTimeout(()=>{this.setMargin;
                this.setState({mapMargin:0})
                this.setState({paddingTop:0})
              console.log("hello")},3000);
            }} />
             <MapView 
             initialRegion={{
              latitude: location[0].latitude,
              longitude: location[0].longitude,
              latitudeDelta: location[0].latitudeDelta,
              longitudeDelta: location[0].longitudeDelta
            }}
             showsPointsOfInterest
             showsScale
            userLocationAnnotationTitle
            zoomControlEnabled
            followsUserLocation
            // onPress={this.onMapPress}
            // showsTraffic
             ref={map => (this.map = map)}
             style={{marginBottom: this.state.mapMargin,flex:1}}
             provider='google'
             showsUserLocation={true}
             showsMyLocationButton={true}
             onMapReady={
              this.onMapRender
             }
                    >
                      {location &&location.map((coordinate, index) =>
          <MapView.Marker draggable key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        
                     
            
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