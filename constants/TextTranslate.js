import AsyncStorage from "@react-native-community/async-storage";
let apikey = 'trnsl.1.1.20200304T084451Z.88e3100b0e437a11.05e1eb13b2103bee9e17fc5b43ef04224d906108'

var request = require('yandex-translate')(apikey);

const getLanguage=async()=>{
  return AsyncStorage.getItem('selectLanguage');
}

export default t=(name)=>{
    var s ='';
    var selectedLanguage= getLanguage;

    if(selectedLanguage!='en-US'){
    request.translate(name, { to: 'hi' }, function(err, res) {
        // alert(res.text);
          s = res.text;
          console.log(res.text);
          return res.text;
        
      })
    } else {
        s=name;
    }
      setTimeout(()=>{
        alert(s);
        return s;
    },1000)
    }