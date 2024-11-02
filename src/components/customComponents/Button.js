import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize, multiThemeColor } from '../../utils/constant';
import { fp, hp, wp } from '../../utils/responsive';

const Button = ({
    height,
    width,
    onPress,
    alignSelf,
    style,
    title,
    backgroundColor,
    absolute,
    absoluteRed,
    TextColor,
    leftIcon,
    fontWeight,
    txtmarginLeft,
    disabled,
    borderRadius
}) => {
    const buttonStyle = {
        // height: responsiveHeight(height) || responsiveHeight(7.5),
        height: hp(height) || hp(7.5),
        // width: responsiveHeight(width) || responsiveWidth(90),
        width: wp(width) || wp(90),
        borderRadius: 4,
        alignSelf: alignSelf || 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // borderRadius: responsiveHeight(borderRadius) || responsiveHeight(50),
        borderRadius: hp(borderRadius) || hp(50),
        backgroundColor: backgroundColor || multiThemeColor().Purple,
        // ...(absolute || absoluteRed
        //     ? { position: 'absolute', bottom: absoluteRed ? responsiveHeight(7) : 0 }
        //     : {}),
        ...(absolute || absoluteRed
            ? { position: 'absolute', bottom: absoluteRed ? hp(7) : 0 }
            : {}),
    };

    return (
        <TouchableOpacity
            disabled={disabled}
            style={[style, buttonStyle]}
            onPress={onPress}
        >
            {leftIcon && <View style={styles.Button}>{leftIcon}</View>}
            <Text
                style={{
                    color: TextColor || '#FFFFFF',
                    fontWeight: fontWeight || 'bold',
                    marginLeft: txtmarginLeft || 0,
                    // fontSize: responsiveFontSize(2.6),
                    fontSize: fp(2.6),
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    Button: {
        position: 'absolute',
        // left: responsiveWidth(2),
        left: wp(2),
        marginLeft: 50,
    },
});
