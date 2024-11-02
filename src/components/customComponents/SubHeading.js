import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fp, hp } from '../../utils/responsive'
import { SubHeadText } from '../../utils/colors'

const SubHeading = ({ text }) => {
    return (
        <View>
            <Text style={styles.subheading}>- {text}</Text>
        </View>
    )
}

export default SubHeading

const styles = StyleSheet.create({
    subheading: {
        fontSize: fp(1.5),
        color: SubHeadText,
        fontFamily: "Lato-Regular",
        marginBottom: hp(.25)
    }
})