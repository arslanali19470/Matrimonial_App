import React from 'react';
import { Image } from 'react-native';

const Picture = ({
  localSource,
  uriSource,
  height,
  width,
  imgColor,
  alignSelf,
  roundCorner,
  resizeMode,
  marginLeft,
  marginRight,
  transform,
  marginBottom,
  marginTop,
  position,
  top,
  left,
  right,
  bottom,
  opacity
  // themeValue
}) => {
  return (
    <>
      {uriSource ? (
        <Image
          style={{
            height: height,
            width: width,
            tintColor: imgColor,
            alignSelf: alignSelf,
            borderRadius: roundCorner || 0,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            position: position,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            opacity: opacity
          }}
          source={{ uri: uriSource }}
          onError={error => console.log('Image failed to load:', error)}
          resizeMode={resizeMode || 'cover'}
        />
      ) : (
        <Image
          style={{
            height: height,
            width: width,
            tintColor: imgColor,
            alignSelf: alignSelf,
            borderRadius: roundCorner || 0,
            transform: transform ? [{ scaleY: -1 }] : [],
            marginBottom: marginBottom,
            marginRight: marginRight,
            marginTop: marginTop,
            position: position,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            opacity: opacity
            // transform: [{ scaleX: 1.5 }],
            // backgroundColor: themeValue == 'dark' ? 'white' : 'transparent'
          }}
          source={localSource || undefined}
          resizeMode={resizeMode || 'cover'}

        />
      )}
    </>
  );
};

export default Picture;
