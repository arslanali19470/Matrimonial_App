import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Heading from '../customComponents/Heading';
import { ProfileNameColor, WHITE } from '../../utils/colors';
import Picture from '../customComponents/Picture';
import { ForwardIcon } from '../../assets';
import { hp, wp } from '../../utils/responsive';

const ProfileDetailList = ({ title, firstValue, secondValue, onPress }) => {
    return (
        <View style={styles.container}>
            <Heading
                text={title}
                fontFamily="RobotoCondensed-SemiBold"
                fontSize={2.4}
                color={ProfileNameColor}
            />
            <View style={styles.rightContainer}>
                <Heading
                    text={`${firstValue + "/" + secondValue}`}
                    fontFamily="RobotoCondensed-SemiBold"
                    fontSize={2.4}
                    color={ProfileNameColor}
                />
                <Picture
                    localSource={ForwardIcon}
                    height={hp(2.6)}
                    width={wp(3)}
                    marginTop={2}
                />
            </View>
        </View>
    );
};

export default ProfileDetailList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: WHITE,
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        borderRadius: wp(2),
        marginBottom: hp(2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});
