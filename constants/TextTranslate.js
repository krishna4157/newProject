import AsyncStorage from "@react-native-community/async-storage";
let apikey = 'trnsl.1.1.20200304T084451Z.88e3100b0e437a11.05e1eb13b2103bee9e17fc5b43ef04224d906108'
import TextData from '../constants/locale/locale';

var request = require('yandex-translate')(apikey);

// const getLanguage =async()=>{
//   var temp = await AsyncStorage.getItem('selectLanguage');
//   return temp;  
// }
var tl = 'en';
var s = '';
var languageStatus = true;
var temp = Object.keys(TextData);

export default t = (name) => {

  var selectedLanguage = tl;


  //  alert(JSON.stringify(TextData[name]));
  var s = temp.includes(name);
  if (s == true) {
    return TextData[name];
  
  } else {
    return 'false'
  }
}

export const setLanguage = (language) => {

  languageStatus = false;
  tl = language;

    temp.forEach(function (name) {
      new Promise((resolve,reject)=>{
      request.translate(name, { to: language }, function(err, res) {
                // alert(res.text);
                resolve(res.text);
            })
            }).then((res)=>{
              TextData[name]=res;
              // alert(res);
              // s= res;

            })
          
    });

    //     return new Promise(async(resolve,reject)=>{

    // 
    // })


  
}

export const getLanguage = () => {
  return tl;
}

export const languageSet = () => {
  return languageStatus;
}