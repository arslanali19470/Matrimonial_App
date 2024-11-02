import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveFontSize, multiThemeColor } from '../../utils/constant';
import { fp, hp } from '../../utils/responsive';

const Heading = ({
  text,
  textAlign = 'left',
  color,
  fontFamily,
  weight,
  fontSize,
  backBtn = false,
  marginLeft = 0,
  marginTop = 0,
  marginBottom = 0,
  paddingBottom = 0,
  style = {},
  onPress,
  ...restProps
}) => {
  const navigation = useNavigation();

  const headingStyle = {
    textAlign,
    fontSize: fp(fontSize) || fp(2.5),
    fontWeight: weight,
    color: color || multiThemeColor().textcolor,
    fontFamily: fontFamily,

    marginLeft: hp(marginLeft),
    marginTop: hp(marginTop),
    marginBottom: hp(marginBottom),
    paddingBottom: hp(paddingBottom),

    ...style,
  };

  return (
    <>
      {!backBtn ? (
        // Wrap Text in TouchableOpacity for pressability
        <TouchableOpacity onPress={onPress}>
          <Text style={headingStyle} {...restProps}>
            {text}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* Optional icon or back button text can go here */}
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Text style={[headingStyle, styles.backBtnText]} {...restProps}>
              {text}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnText: {
    // paddingHorizontal: responsiveHeight(3),
    paddingHorizontal: hp(3),
  },
});
