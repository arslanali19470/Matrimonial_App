import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Heading from '../../components/customComponents/Heading'
import { Heart, Pakistan, Varified, WhiteHeart } from '../../assets'
import Picture from '../../components/customComponents/Picture'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { PURPLE, SubHeadText, WHITE } from '../../utils/colors'
import Space from '../../components/customComponents/Space'
// import UnderLine from '../UnderLine/UnderLine'
import UnderHeading from '../customComponents/UnderHeading'
import { hp, wp } from '../../utils/responsive'
import SubHeading from '../../components/customComponents/SubHeading'
import SubDetails from '../../components/customComponents/SubDetails'
import BtnSendRequest from '../../components/BtnSendRequest'
import { BlurView, } from "@react-native-community/blur";
import UnderLine from '../customComponents/UnderLine'

const BottomView = ({ index }) => {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                <Heading text={"Lahore, Pakistan"} fontSize={1.4} />
                <Picture
                    localSource={Pakistan}
                    height={hp(1.6)}
                    width={wp(5)}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Heading text={"Miss Aliya - 28"} fontFamily={"RobotoCondensed-ExtraBold"} fontSize={4.2} />
                {(index != 1 ? (<View>
                    <Heading text={"100% Complete"} fontSize={1.4} color={PURPLE} fontFamily={"RobotoCondensed-Bold"} />
                    <Space height={.5} />
                    <View style={{ backgroundColor: PURPLE, height: 1.8, width: responsiveWidth(19) }} />
                </View>) : (<BtnSendRequest size={false} />))}

            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Heading text={"Business Owner, M.phil (18 years)"} fontSize={1.5} />
                <Picture
                    localSource={Varified}
                    height={hp(1.5)}
                    width={wp(15)}
                />
            </View>
            <UnderLine />

            {/* ====================================================
            Personal Details
            ======================================================== */}


            <UnderHeading text={"Personal Details"} />
            <View style={[styles.RowBetween, styles.gap]}>
                <View
                // style={{ backgroundColor: "blue" }}
                >
                    <View>
                        <SubHeading text={"Name"} />
                        <SubDetails text={"Miss Aliya Sheharbano"} />
                    </View>
                    <Space height={2} />
                    <View>
                        <SubHeading text={"Sect"} />
                        <SubDetails text={"Sunni"} />
                    </View>
                    <Space height={2} />
                    <View>
                        <SubHeading text={"Height"} />
                        <SubDetails text={"5'4''"} />
                    </View>
                    <Space height={2} />
                    <View>
                        <SubHeading text={"Religion"} />
                        <SubDetails text={"Islam"} />
                    </View>
                </View>
                <View
                // style={{ backgroundColor: "red" }}
                >
                    <View>
                        <SubHeading text={"Marital Status"} />
                        <SubDetails text={"Single"} />
                    </View>
                    <Space height={2} />
                    <View>
                        <SubHeading text={"Cast"} />
                        <SubDetails text={"Mughal"} />
                    </View>
                    <Space height={2} />
                    <View>
                        <SubHeading text={"Date of Birth"} />
                        <View>
                            <SubDetails text={"Oct 1998"} />
                            <BlurView
                                style={styles.blurOverlay}
                                blurType="light"
                                blurAmount={11}
                                reducedTransparencyFallbackColor="white"
                            />
                        </View>
                    </View>
                    <Space height={2} />
                    <View>
                        <SubHeading text={"Nationality"} />
                        <SubDetails text={"Pakistani"} />
                    </View>
                </View>
            </View>
            <UnderLine />

            {/* ====================================================
            Education and Employment
            ======================================================== */}

            <UnderHeading text={"Education & Employement"} />

            <View style={[styles.RowBetween, styles.gap1]}>
                <View
                // style={{ backgroundColor: "blue" }}
                >
                    <View>
                        <SubHeading text={"Education"} />
                        <SubDetails text={"M.phil (18 years)"} />
                    </View>
                    <Space height={2} />
                    <View>
                        <SubHeading text={"Size"} />
                        <SubDetails text={"10 Marla"} />
                    </View>
                    <Space height={2} />

                </View>
                <View
                // style={{ backgroundColor: "red" }}
                >
                    <View>
                        <SubHeading text={"Monthly Income"} />
                        <SubDetails text={"greater than 200k"} />
                    </View>
                    <Space height={2} />
                    <View>
                        <SubHeading text={"Employment Status"} />
                        <SubDetails text={"Government Job"} />
                    </View>
                    <Space height={2} />

                </View>
            </View>

            <UnderLine />

            {/* ====================================================
            Private Details
            ======================================================== */}

            <UnderHeading text={"Private details"} />
            <View style={styles.whiteBox}>
                <Heading text={"This information is private. You will only be able to access this data after your match request has been accepted."} fontSize={1.4} color={SubHeadText} style={{ lineHeight: 18 }} />
            </View>
            <Space height={4} />
            <BtnSendRequest size={true} />
            <Space height={2} />


        </View>
    )
}

export default BottomView

const styles = StyleSheet.create({
    RowBetween: {
        flexDirection: "row",
        alignItems: "center",
    },
    gap: {
        gap: wp(10),
    },
    gap1: {
        gap: wp(20),

    },
    whiteBox: {
        backgroundColor: WHITE,
        margin: "auto",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignItems: "center",

    },

    blurOverlay: {
        ...StyleSheet.absoluteFillObject,
    },
})