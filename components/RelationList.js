import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Button, ListItem, List } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import Signt from 'react-native-vector-icons/FontAwesome5';
var j = 0;
var storedNavigations = [];
var completed = 0;
var k = 0;
var chapters=['hello','hello2']
export default (arr) => {

    var redirectIcons = [];
    var ListofChapters = chapters;
    // var arr = ["", "infocirlceo", "videocamera", "filetext1", "question", "solution1"];
        ListofChapters.map((chapter) => {
                    redirectIcons.push(chapter);
        
        });
        return showChapterPages(redirectIcons,arr);
    }
    
    
        function showChapterPages(redirectIcons,arr) {
            var chapterTitles = redirectIcons.map((chapter, index) => {
                return (
                    <ListItem touchableHighlightStyle={{ borderRadius: 20 }} noBorder={index >= redirectIcons.length - 1 ? true : false} 
                    // onPress={() => { handleNavigation(navigation, chapter.ordinal, , noOfchapters, signatureType) }} 
                    >
                     <Icon
                                name={arr[index]}
                                color={'red'}
                                size={10}
                            />
                        <Text style={{ color: 'blue', fontSize:20, paddingTop: 5, paddingLeft: 20 }}>{chapter}</Text>
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
