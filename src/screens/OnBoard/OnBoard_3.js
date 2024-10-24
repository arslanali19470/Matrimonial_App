import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Picture from '../../components/customComponents/Picture'
import { Board3, Gradient } from '../../assets'
import { multiThemeColor, responsiveFontSize, responsiveHeight, responsiveWidth } from '../../utils/constant'
import Heading from '../../components/customComponents/Heading'
import Space from '../../components/customComponents/Space'
import Button from '../../components/customComponents/Button'
import { useNavigation } from '@react-navigation/native'

const OnBoard_3 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainBackground}>
            <StatusBar translucent backgroundColor="transparent" />
            <Picture
                localSource={Board3}
                height={responsiveHeight(100)}
                width={responsiveWidth(100)}
            />
            <Picture
                localSource={Gradient}
                height={responsiveHeight(75)}
                width={responsiveWidth(100)}
                position={"absolute"}
                bottom={0}
            />
            <View style={styles.DesprictionBox}>
                <Heading text={"Find your Perfect Partner"} fontFamily="RobotoCondensed-ExtraBold" fontSize={5} textAlign="center" color={multiThemeColor().WHITE} />

                <Heading text={"Love begins here—your journey to forever starts now!"} fontSize={2.4} textAlign="center" color={multiThemeColor().GrayText}
                    fontFamily={"RobotoCondensed-Regular"}
                    style={{ paddingHorizontal: 40, paddingVertical: 5, lineHeight: 24 }} />

                <Space height={2} />

                <View style={styles.ScreenBlaock}>
                    <View style={styles.TwoDots} />
                    <View style={styles.TwoDots} />
                    <View style={styles.UniqueDot} />
                </View>
                <Space height={4} />
                <Button title={"Next"} fontWeight={400} onPress={() => navigation.navigate("OnBoard_2")} />
                <Space height={2} />
            </View>

        </View>
    )
}

export default OnBoard_3

const styles = StyleSheet.create({
    mainBackground: {
        flex: 1,
    },
    DesprictionBox: {
        position: "absolute",
        top: responsiveHeight(63),
        width: responsiveWidth(100)

    },
    ScreenBlaock: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "center"
    },
    TwoDots: {
        height: responsiveHeight(1.1),
        width: responsiveWidth(3.5),
        backgroundColor: "white",
        borderRadius: 10,

    },
    UniqueDot: {
        height: responsiveHeight(1.1),
        width: responsiveWidth(8),
        backgroundColor: "#490B3E",
        borderRadius: 10,
    }

})