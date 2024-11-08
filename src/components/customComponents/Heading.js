import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { multiThemeColor } from '../../utils/constant';
import { fp, hp } from '../../utils/responsive';

const Heading = ({
  text,
  textAlign = 'left',
  color,
  fontFamily,
  weight,
  fontSize = 2.5,
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

  // Construct the heading style dynamically
  const headingStyle = {
    textAlign,
    fontSize: fp(fontSize),
    fontWeight: weight,
    color: color || multiThemeColor().textcolor,
    fontFamily,
    marginLeft: hp(marginLeft),
    marginTop: hp(marginTop),
    marginBottom: hp(marginBottom),
    paddingBottom: hp(paddingBottom),
    ...style,
  };

  return (
    <View style={[styles.container, backBtn && styles.backBtnContainer]}>
      {backBtn && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          {/* Optional icon or back button text can go here */}
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onPress} disabled={!onPress}>
        <Text style={headingStyle} {...restProps}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    paddingHorizontal: hp(3),
  },
});
