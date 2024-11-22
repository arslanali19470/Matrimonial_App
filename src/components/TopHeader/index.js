import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../utils/responsive';
import Picture from '../../components/customComponents/Picture';
import Heading from '../../components/customComponents/Heading';
import { GRAYTEXT, WHITE } from '../../utils/colors';

const TopHeader = ({
    leftIcon,
    title,
    MidImg,
    RightIcon,
    RightIcon2,
    background = background || WHITE,
    statusColor = statusColor || 'dark',
    border = false,
    onPressLeft,
    onPressRight1,
    onPressRight2,
    titleColor,
    showBar = showBar || true,
}) => {
    return (
        <>
            <View style={[styles.headerContainer, { backgroundColor: background }]}>
                {showBar && <StatusBar translucent backgroundColor="transparent" barStyle={`${statusColor}-content`} />}
                {/* {showBar && <StatusBar hidden={true} />} */}

                <View style={styles.rowCenterSpaceBetween}>

                    {/* Left Icon */}
                    {leftIcon && (
                        <TouchableOpacity onPress={onPressLeft}>
                            <Picture localSource={leftIcon} height={hp(2.5)} width={wp(2.7)} />
                        </TouchableOpacity>
                    )}

                    {/* Title and/or Center Image */}
                    <View
                        style={[
                            styles.centerContainer,
                            {
                                paddingLeft: RightIcon && RightIcon2 ? wp(10) : RightIcon || RightIcon2 ? 20 : 0,
                            },
                        ]}
                    >
                        {MidImg && (
                            <Picture localSource={MidImg} height={hp(6)} width={wp(12)} style={styles.midImage} />
                        )}
                        {title && (
                            <Heading
                                text={title}
                                fontFamily={"RobotoCondensed-SemiBold"}
                                style={styles.title}
                                color={titleColor}
                            />
                        )}
                    </View>

                    {/* Right Icons */}
                    <View style={styles.rightIconsContainer}>
                        {RightIcon && (
                            <TouchableOpacity onPress={onPressRight1}>
                                <Picture localSource={RightIcon} height={hp(3.2)} width={wp(6.4)} />
                            </TouchableOpacity>
                        )}
                        {RightIcon2 && (
                            <TouchableOpacity onPress={onPressRight2}>
                                <Picture localSource={RightIcon2} height={hp(2.8)} width={wp(8.5)} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                {/* Optional Divider */}
            </View >
            {border && <View style={styles.divider} />
            }
        </>
    );
};

export default TopHeader;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: WHITE,
    },
    rowCenterSpaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        paddingTop: hp(6),
        paddingBottom: hp(2),
    },
    centerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: wp(2),
        // backgroundColor: "red"
    },
    midImage: {
        marginRight: wp(2),
    },
    title: {
        textAlign: 'center',
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp(2),
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: GRAYTEXT,
        marginBottom: hp(1.7),
    },
});