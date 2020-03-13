import AsyncStorage from "@react-native-community/async-storage";
let apikey = 'trnsl.1.1.20200304T084451Z.88e3100b0e437a11.05e1eb13b2103bee9e17fc5b43ef04224d906108'

var request = require('yandex-translate')(apikey);

const getLanguage =async()=>{
  var temp = await AsyncStorage.getItem('selectLanguage');
  return temp;  
}
var tl = 'en';
var s ='';
export default t =  (name)=>{
  
  var selectedLanguage= tl;
  if(selectedLanguage=='en'){
    s=name;
    return s;
    
    } else {
      // return 'HELLO';
      var promise = new Promise((resolve,reject)=>{
        request.translate(name, { to: selectedLanguage }, function(err, res) {
          alert(res.text);
          s=res.text
          resolve(res.text);
      })
      }).then((res)=>{
        s= res;
        return res
      })
        
    }
    // console.log(JSON.stringify(s));
        // return s;    
}

export const  setLanguage = (language)=>{
  tl= language
}