import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PURPLE, WHITE } from '../../utils/colors'
import { fp, hp, wp } from '../../utils/responsive'
import Heading from '../customComponents/Heading'
import { MaterialIcons } from '../../utils/constant'

const IconButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.ButtonMainstyle} onPress={onPress}>
            <Heading text={"Get Started"} color={WHITE} />
            <View style={styles.BtnRoundIcon}>
                <View style={{ alignItems: 'center' }}>
                    <MaterialIcons name="east" color={PURPLE} size={25} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    ButtonMainstyle: {
        backgroundColor: PURPLE,
        height: hp(7.5),
        width: wp(90),
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8,
        borderRadius: 50,
        alignSelf: "center",
        position: "relative"
    },
    BtnText: {
        color: WHITE,
        fontSize: fp(2.6),
    },
    BtnRoundIcon: {
        height: hp(6),
        width: hp(6),
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: "absolute",
        top: hp(.7),
        right: wp(2),
    },

    BtnDirection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})