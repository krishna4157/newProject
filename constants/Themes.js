import AsyncStorage from "@react-native-community/async-storage";
import {DarkTheme,WhiteTheme} from './Colors';
export async function send () {
 var Themes = await AsyncStorage.getItem('Themes')
    if(Themes._55=='Dark'){
        return DarkTheme;
    } else {
        return WhiteTheme;

    }
}
        