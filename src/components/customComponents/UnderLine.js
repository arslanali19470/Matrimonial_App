import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Space from './Space'
// import { responsiveWidth } from 'react-native-responsive-dimensions'
import { GRAYTEXT } from '../../utils/colors'
import { wp } from '../../utils/responsive'

const UnderLine = ({ color, width, style }) => {
    return (
        <View>
            <Space height={1.5} />
            <View style={[styles.underline(color, width), style]} />
        </View>
    )
}

export default UnderLine

const styles = StyleSheet.create({
    underline: (color, width) => ({
        height: 1,
        width: wp(width) || wp(90),
        backgroundColor: color || GRAYTEXT,
    }),
});
