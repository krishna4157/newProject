import AsyncStorage from "@react-native-community/async-storage";
import { changeTheme } from "./Colors1";

const tintColor = '#2f95dc';
var i=0;
let setTheme ='';
if(i==0){
  setTheme = 'white';
  i++;
}


// setTimeout(()=>{
//   themes = theme._55;
//   alert(themes);
// },2000)


// console.log("Theme"+themes);
export const  DarkTheme = {
  appBackground: 'black',
  headerTabColor: '#ccc',
  cardBorder: 'black',
  shadowColor: '#ffffff',
  // theme=='dark'?'#3498DB':'red',
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  cardBackGround: 'grey',
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',

  FamilyHeader: '#F2F2F2',
  FriendsHeader: 'white',
  OthersHeader: '#F2F2F2'
};

export const WhiteTheme = {
  appBackground: 'white',
  headerTabColor: 'red',
  shadowColor: '#000',
  cardBorder: '#ffffff',
  cardBackGround: 'white',
  // theme=='dark'?'#3498DB':'red',
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
  FamilyHeader: '#F2F2F2',
  FriendsHeader: 'white',
  OthersHeader: '#F2F2F2'
};

// setTimeout(()=>{
//   console.log("Themes : "+themes);
var Colors = changeTheme() == 'Dark' ? DarkTheme : DarkTheme;
// },2000)
  export default Colors;


