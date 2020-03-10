import AsyncStorage from "@react-native-community/async-storage";
import theme from 'react-native-theme';
const tintColor = '#2f95dc';
var i=0;


// if(i==0){
//   setTheme = 'white';
//   i++;
// }


// setTimeout(()=>{
//   themes = theme._55;
//   alert(themes);
// },2000)


// alert("Theme"+i);
export const  DarkTheme = {
  appBackground: 'black',
  headerTabColor: '#ccc',
  cardBorder: 'red',
  shadowColor: 'red',
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
  shadowColor: 'red',
  cardBorder: 'reds',
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

export const themes = {
  DarkTheme,
  WhiteTheme,
};

theme.add({ // Add default theme
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
  },
});



alert("THEME : "+theme.name);
var Colors =  DarkTheme;

// export default Colors () {
//   Colors = theme.name == 'default' ? WhiteTheme : DarkTheme;
//   return Colors;
// }

export default Colors;


