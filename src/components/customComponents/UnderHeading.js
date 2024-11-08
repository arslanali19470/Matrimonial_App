import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Space from './Space'
import Heading from './Heading'
import { Yellowish } from '../../utils/colors'
import { fp, wp } from '../../utils/responsive'

const UnderHeading = ({ text }) => {
    return (
        <View>
            <Space height={2} />
            <Text style={styles.UnderHeading}>{text}</Text>
            <Space height={.5} />
            <View style={styles.lineUnder} />
            <Space height={2} />

        </View>
    )
}

export default UnderHeading;

const styles = StyleSheet.create({
    UnderHeading: {
        fontSize: fp(2.2),
        color: Yellowish,
        // fontWeight: "600",
        // fontFamily: "RobotoCondensed-Bold",
        fontFamily: "Lato-Bold",

    },
    lineUnder: {
        width: wp(12),
        height: 2,
        backgroundColor: Yellowish
    }
})
