import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Picture from '../../components/customComponents/Picture'
import { Board2, Gradient } from '../../assets'
import { multiThemeColor, responsiveFontSize, responsiveHeight, responsiveWidth } from '../../utils/constant'
import Heading from '../../components/customComponents/Heading'
import Space from '../../components/customComponents/Space'
import Button from '../../components/customComponents/Button'

const OnBoard_2 = ({ navigation }) => {
    return (
        <View style={styles.mainBackground}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <Picture
                localSource={Board2}
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
                <Heading text={"100% Verified Profiles"} fontFamily="RobotoCondensed-ExtraBold" fontSize={5} textAlign="center" color={multiThemeColor().WHITE}
                    style={{ paddingHorizontal: 20 }}
                />

                <Heading text={"Love begins here—your journey to forever starts now!"} fontSize={2.4} textAlign="center" color={multiThemeColor().GrayText}
                    fontFamily={"RobotoCondensed-Regular"}
                    style={{ paddingHorizontal: 40, paddingVertical: 5, lineHeight: 24 }} />

                <Space height={2} />

                <View style={styles.ScreenBlaock}>
                    <View style={styles.TwoDots} />
                    <View style={styles.UniqueDot} />
                    <View style={styles.TwoDots} />
                </View>
                <Space height={4} />
                <Button title={"Next"} fontWeight={400} onPress={() => navigation.navigate("OnBoard_3")} />
                <Space height={2} />
                <Heading text={"Skip"} weight={400} fontSize={2.4} textAlign="center" color={multiThemeColor().WHITE}
                    onPress={() => navigation.goBack()}
                />
            </View>

        </View>
    )
}

export default OnBoard_2

const styles = StyleSheet.create({
    mainBackground: {
        flex: 1,
    },
    DesprictionBox: {
        position: "absolute",
        top: responsiveHeight(60),
        width: responsiveWidth(100),

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