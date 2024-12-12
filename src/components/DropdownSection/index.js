import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../customComponents/Heading'
import { fp, hp, wp } from '../../utils/responsive'
import { BLACK, GRAYTEXT, ProfileNameColor } from '../../utils/colors'
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownSection = ({ title, open, value, setOpen, setValue, items }) => {
    return (
        <>
            <Heading
                text={title}
                fontFamily="RobotoCondensed-SemiBold"
                fontSize={2.4}
                color={ProfileNameColor}
            />
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                placeholder="Select"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                textStyle={styles.dropdownText}
                zIndex={open ? 1000 : 1}
                dropDownDirection='DOWN'

            />
        </>
    )
}

export default DropdownSection

const styles = StyleSheet.create({


    dropdown: {
        marginTop: hp(1),
        borderColor: GRAYTEXT,
        borderWidth: 1.5,
        borderRadius: wp(2),
    },
    dropdownContainer: {
        borderColor: GRAYTEXT,
        marginTop: hp(1),
        shadowColor: BLACK,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
    },
    dropdownText: {
        fontSize: fp(2.2),
        color: BLACK,
    },
});
