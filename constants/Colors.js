const tintColor = '#2f95dc';
var theme = 'bright'
export default Colors = {
  headerTabColor: 
  // theme=='dark'?'#3498DB':'red',
  headerTabColor(theme),
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

function headerTabColor(theme){
  if(theme=='red'){
    return 'red'
  } else {
      return '#3498DB'
  }

}