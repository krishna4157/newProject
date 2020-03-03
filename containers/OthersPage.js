import React, { Component } from "react";
// import { connect } from "react-redux";
import Home from '../components/Family';
import { BackHandler, Alert,View, Text } from 'react-native';
import Family from "../components/Friends";
import Others from "../components/Others";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
class OthersPage extends Component {
    state={
        data1: '',
        subjectCompliance: {
            dayCompliance: 0,
          weekCompliance: 0,
          monthCompliance: 0,
          totalCompliance: 0,
        }
    };




    componentDidMount = async()=>{
      let encryptedForms = await AsyncStorage.getItem("OthersData");
        var data = JSON.parse(encryptedForms);
        this.setState({
            data1: data
        })
        console.log('this Others data :'+this.state.data1);
    }
    

    
    render() {
      const {data1}=this.state;
        return (
          <MenuProvider>

          {data1!='' ? 
          <Others data1={data1}
             
          /> : <View style={{backgroundColor:'red'}}>
               <Text style={{color:'white',textAlign:'center'}}>No Data Available</Text>
          </View>}
          </MenuProvider>

        );
    }
}

// const mapStateToProps = state => ({
//       selectedLanguage: state.changeLanguage.selectedLanguage,
//       loading: state.loading,
//       subject: state.subjectStudyMetaData.subject,
// });

// const mapDispatchToProps = dispatch => bindActionCreators(
//     {
//     setCurrentScreen,

//     },
//     dispatch,
//   );
export default OthersPage
// export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(HomeScreen));