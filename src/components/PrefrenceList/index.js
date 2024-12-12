import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import Picture from '../customComponents/Picture';
import Heading from '../customComponents/Heading';
import { GrayBG, ProfileNameColor, PURPLE, TimeTextColor } from '../../utils/colors';
import { EqualIcon } from '../../assets';
import { hp, wp } from '../../utils/responsive';
import Space from '../customComponents/Space';

const PrefrenceList = ({
    isEqual = true,
    text,
    ListNum = false,
    border = true,
    tick = true,
}) => {
    const [isChecked, setIsChecked] = useState(tick);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.leftSection}>
                    {isEqual && (
                        <Picture localSource={EqualIcon} height={hp(1)} width={wp(5)} />
                    )}
                    <CheckBox
                        value={isChecked}
                        onValueChange={(newValue) => setIsChecked(newValue)}
                        tintColors={{ true: PURPLE, false: TimeTextColor }}

                    />


                    <Heading
                        text={text}
                        fontFamily={"RobotoCondensed-SemiBold"}
                        color={isChecked ? ProfileNameColor : TimeTextColor}
                    />
                </View>
                {ListNum && (
                    <View style={styles.listNumContainer}>
                        <Heading
                            text={ListNum}
                            textAlign="center"
                            fontSize={2.2}
                            weight={700}
                        />
                    </View>
                )}
            </View>
            <Space height={2} />
            {border && <View style={styles.divider} />}
        </>
    );
};

export default PrefrenceList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },

    listNumContainer: {
        width: hp(3.5),
        height: hp(3.5),
        borderWidth: 1.2,
        borderColor: PURPLE,
        borderRadius: hp(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        height: 1,
        width: wp(80),
        alignSelf: 'center',
        marginBottom: hp(1.7),
        backgroundColor: GrayBG,
    },


});
