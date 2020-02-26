import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Button, ListItem, List } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import Signt from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee,faUser,faFax,faUserSecret,faAddressBook } from '@fortawesome/free-solid-svg-icons'

var j = 0;
var storedNavigations = [];
var completed = 0;
var k = 0;
var chapters=['Family','Friends','Others ']
export default ({navigationPage,handleHeaderMenuDialoge,visible,hideDialog}) => {

    var redirectIcons = [];
    const navigations = ['Family','Friends','Others'];
    var ListofChapters = chapters;
    var arr = [faCoffee, faAddressBook, faUserSecret];
        ListofChapters.map((chapter) => {
                    redirectIcons.push(chapter);
        
        });
        return showChapterPages(redirectIcons,arr,handleHeaderMenuDialoge,visible,navigations,hideDialog,navigationPage);
    }
    
    
        function showChapterPages(redirectIcons,arr,handleHeaderMenuDialoge,visible,navigations,hideDialog,navigationPage) {
            var chapterTitles = redirectIcons.map((chapter, index) => {
                return (
                    
                    <ListItem style={{width:'100%',justifyContent:'space-between'}} noBorder={index >= redirectIcons.length - 1 ? true : false} 
                     onPress={() => { 
                        hideDialog();
                         setTimeout(()=>{handleHeaderMenuDialoge(visible,navigations[index]) }),1000}} 
                    >
                    <FontAwesomeIcon
  icon={arr[index]} color='black' size={20} /> 
                        <Text style={{ paddingLeft:15,color: 'black', fontSize:20 }}>{chapter}</Text>
                    </ListItem>
                )
            })
            return chapterTitles;

        }


    //     function handleNavigation(navigation, ordinal, handleHeaderMenuDialoge, noOfchapters, signatureType) {
    //         var redirectPages = ["", "StudyInfoScreen", "StudyVideoListScreen", "DocumentsScreen", "KnowledgeReviewScreen", "SubjectRegistrationForm", "DocumentListScreen"];
         
    //     //     handleHeaderMenuDialoge();
    //     //     var chapter = redirectPages[ordinal];
    //     //     if (chapter != "CongratulationsScreen" && chapter != "DocumentListScreen") {
    //     //         navigation.navigate(chapter, { ordinal: redirectPages.indexOf(chapter) });
    //     //     } else if (chapter == "DocumentListScreen") {
    //     //         if (signatureType == 2) {
    //     //             navigation.navigate(chapter, { signatureType: 2 });
    //     //         } else {
    //     //             navigation.navigate(chapter, { signatureType: 1 });
    //     //         }
    //     //     } else {
    //     //         navigation.navigate(chapter, { currChapterOrdinal: 4 });

    //     //     }
    //     // }
    // }
