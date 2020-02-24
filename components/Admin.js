
import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Container, Button, ListItem ,List} from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../constants/ui/colorScheme';
import DialogMenus from '../dialogMenus/navigationMenu';
import { getLanguageData   } from '../../utils/consentData';
import NavigationMenu from '../dialogMenus/navigationMenu';

export default class NavigateToAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
     submitSubjectData = async ()  => {
        const {subjectData, navigation, handleHeaderMenuDialoge,} = this.props;
        handleHeaderMenuDialoge();
        navigation.navigate('UsersListScreen')
        // try {
        // await api.post('consent/subject/submit', subjectData )
        // }
        // catch(error) {
        //     console.log(error);
        //     Toast.show('Failed to save.', {
        //         // duration: 5000,
        //         position:200,
        //         visible: true,
        //         backgroundColor:'#e84338',
        //         delay: 0
        //     })
        // }
    }
   
    render() {
        const { navigation,language,handleHeaderMenuDialoge,signatureType,isRegistered,navigationMenus,subjectData} = this.props;
        const chapters = getLanguageData(language);
        return (
            <View >
                <View style={{paddingTop:10}}>
                <List>
                <RelationList navigationMenus={navigationMenus} isRegistered ={isRegistered} signatureType={signatureType} chapters={chapters} navigation={navigation} handleHeaderMenuDialoge={handleHeaderMenuDialoge} noOfchapters={7} visitedChapters={subjectData.visitedChapters}/>
                    {/* {this.renderIcons()} */}
                    {/* <DialogMenus chapters={chapters} navigation={navigation} handleHeaderMenuDialoge={handleHeaderMenuDialoge}/> */}
                    </List>
                    <Button full style={{ backgroundColor: Colors.errorButton, borderRadius: 5, width: wp('46%'), alignSelf: 'center' }} onPress={()=>this.submitSubjectData()}>
                        <Text style={{ alignSelf: 'center', color: Colors.textColorwithbg, fontSize: wp('2.5%'), fontFamily:'Yantramanav_Bold', paddingLeft: 10 }}>
                            ADMIN
                            </Text>
                    </Button>
                </View>
            </View>
        );
    }
}
