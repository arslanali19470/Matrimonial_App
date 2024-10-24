import {useContext} from 'react';
import {ThemeContext} from '../themes/index';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';





export const multiThemeColor = () => {
  const context = useContext(ThemeContext);
  const theme = context?.theme || 'light';

  if (theme === 'light') {
    return {

      WHITE: '#FFFFFF',
      Purple:"#490B3E",
      GrayText:"#CCCCCC",

      TRANSPARENT: 'transparent',
      main_background: '#FFFFFF',
      textcolor: '#000',
      GrayBox: 'lightgray',
      OnlyWHITE: '#FFF',
      PlaceHolder: '#282c34',
      ButtonBackGround: '#282c34',
    };
  } else {
    return {

      WHITE: '#ffff',
      TRANSPARENT: 'transparent',
      main_background: '#2F3E46',
      textcolor: '#000',
      GRAY: '#000',
      GrayBox: '#181c1c',
      OnlyWHITE: '#FFF',
      PlaceHolder: '#ccc',
      ButtonBackGround: '#ffff',
    };
  }
};



export { responsiveHeight, responsiveWidth, responsiveFontSize };