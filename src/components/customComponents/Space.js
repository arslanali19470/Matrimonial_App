import React from 'react';
import { View } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../../utils/constant';

const Space = ({ height, width }) => {
  const responsiveHeightValue = height ? responsiveHeight(height) : 0;
  const responsiveWidthValue = width ? responsiveWidth(width) : 0;

  return <View style={{ height: responsiveHeightValue, width: responsiveWidthValue }} />;
};

export default Space;
