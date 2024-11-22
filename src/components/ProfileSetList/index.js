import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Heading from '../customComponents/Heading';
import Picture from '../customComponents/Picture';
import { ProfileNameColor, PURPLE } from '../../utils/colors';
import { ForwardIcon } from '../../assets';
import { hp, wp } from '../../utils/responsive';

const ProfileSetList = ({
    smallDot = smallDot || false,
    RightDetail,
    LeftIcon,
    title,
    RightIcon = RightIcon || true,
    imageHeigh = imageHeigh || hp(3),
    imageWidth = imageWidth || wp(6.2),
    titleColor = titleColor || ProfileNameColor,
    onPress,
}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* Left Section */}
            <View style={styles.leftSection}>
                {LeftIcon && (
                    <Picture
                        localSource={LeftIcon}
                        height={imageHeigh}
                        width={imageWidth}
                        marginTop={2}
                    />
                )}
                <Heading
                    text={title}
                    fontFamily="RobotoCondensed-SemiBold"
                    // fontFamily="RobotoCondensed-Bold"
                    fontSize={2.3}
                    color={titleColor}
                />
            </View>

            {/* Right Section */}
            <View style={styles.rightSection}>
                {smallDot && <View style={styles.smallDot} />}
                {RightDetail && (
                    <Heading
                        text={RightDetail}
                        fontSize={1.7}
                        color={PURPLE}
                    />
                )}
                {RightIcon && (
                    <Picture
                        localSource={ForwardIcon}
                        height={hp(2.6)}
                        width={wp(3)}
                        marginTop={2}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp(2),
        // backgroundColor: "red",
        paddingVertical: hp(1),
        // paddingHorizontal: wp(1),
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp(2.5),
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp(3),
    },
    smallDot: {
        height: hp(1.7),
        width: hp(1.7),
        backgroundColor: PURPLE,
        borderRadius: hp(1.7) / 2,
    },
});

export default ProfileSetList;
