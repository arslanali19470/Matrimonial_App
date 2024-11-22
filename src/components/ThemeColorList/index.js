import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../utils/responsive'
import Space from '../customComponents/Space'
import UnderLine from '../customComponents/UnderLine'
import Heading from '../customComponents/Heading'
import { GRAYTEXT, ProfileNameColor, Redish, ThemeBorder, TRANSPARENT } from '../../utils/colors'

const ThemeColorList = ({
    color,
    ThemeName,
    isDefault = false,
    isActive = false,
    underLine = true,
    onPress,
}) => {
    return (
        <>
            <View style={styles.rowSpaceBetween} >
                <View style={styles.rowCenterGap}>
                    <View style={[styles.colorCircle, { backgroundColor: color }]} />
                    <Heading
                        text={ThemeName}
                        fontFamily={"RobotoCondensed-SemiBold"}
                        fontSize={2.4}
                        color={ProfileNameColor}
                    />
                    {isDefault && (
                        <Heading
                            text={"(Default)"}
                            fontFamily={"RobotoCondensed-Medium"}
                            fontSize={1.6}
                            color={ProfileNameColor}
                        />
                    )}
                </View>
                <TouchableOpacity
                    style={[
                        styles.activeIndicator,
                        { borderColor: isActive ? Redish : GRAYTEXT },
                    ]}
                    onPress={onPress}
                >
                    <View
                        style={[
                            styles.innerCircle,
                            { backgroundColor: isActive ? Redish : TRANSPARENT },
                        ]}
                    />
                </TouchableOpacity>
            </View>
            <Space height={0.5} />
            {underLine && <UnderLine width={80} style={styles.underlineStyle} color={ThemeBorder} />}
            <Space height={1.8} />
        </>
    );
};

export default ThemeColorList;

const styles = StyleSheet.create({
    rowSpaceBetween: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    rowCenterGap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: wp(2),
    },
    colorCircle: {
        height: hp(3),
        width: hp(3),
        borderRadius: hp(2),
    },
    activeIndicator: {
        height: hp(3),
        width: hp(3),
        borderWidth: 1.2,
        borderRadius: hp(3),
        alignItems: "center",
        justifyContent: "center",
    },
    innerCircle: {
        height: hp(2),
        width: hp(2),
        borderRadius: hp(2),
        alignSelf: "center",
    },
    underlineStyle: {
        margin: "auto",
    },
});
