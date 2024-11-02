import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fp, wp } from '../../utils/responsive'
import { BLACK, SubHeadText } from '../../utils/colors'

const SubDetails = ({ text }) => {
    return (
        <View>
            <Text style={styles.subheading}>{text}</Text>
        </View>
    )
}

export default SubDetails;

const styles = StyleSheet.create({
    subheading: {
        fontSize: fp(1.9),
        color: BLACK,
        fontFamily: "Lato-Bold",

    }
})