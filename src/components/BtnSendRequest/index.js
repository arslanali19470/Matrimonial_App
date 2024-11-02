import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WhiteHeart } from '../../assets'
import { fp, hp, wp } from '../../utils/responsive'
import { PURPLE } from '../../utils/colors'
import Picture from '../customComponents/Picture'

const BtnSendRequest = ({ size }) => {
    return (
        <TouchableOpacity style={styles.btnView(size)}>
            <Picture
                localSource={WhiteHeart}
                height={size ? hp(2.2) : hp(1.8)}
                width={size ? wp(4.8) : wp(4.2)}
            />
            <Text style={styles.btnText(size)}>Send Request</Text>

        </TouchableOpacity>
    )
}

export default BtnSendRequest

const styles = StyleSheet.create({
    btnView: (size) => ({
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: size ? 10 : 5,
        backgroundColor: PURPLE,
        padding: size ? 12 : 8,
        borderRadius: 60,
    }),
    btnText: (size) => ({
        color: "white",
        fontSize: size ? fp(1.8) : fp(1.5)
    }),


})