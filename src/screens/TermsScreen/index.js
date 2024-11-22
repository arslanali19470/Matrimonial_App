import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackIcon } from '../../assets'
import TopHeader from '../../components/TopHeader'
import { MessageBG, ProfileNameColor } from '../../utils/colors'
import { hp, wp } from '../../utils/responsive'
import Heading from '../../components/customComponents/Heading'
import Space from '../../components/customComponents/Space'

const TermsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <TopHeader
                leftIcon={BackIcon}
                title="Terms & Conditions"
                onPressLeft={() => navigation.goBack()}
            />
            <View style={{ backgroundColor: MessageBG, padding: 10, paddingTop: 15 }}>
                <ScrollView style={{
                    backgroundColor: "white",
                    // height: hp(51),
                    borderRadius: hp(2),
                    padding: wp(5),
                }}>
                    <Heading text={"Clause 1"}
                        fontFamily={"RobotoCondensed-SemiBold"}
                        fontSize={2.4}
                        color={ProfileNameColor} />
                    <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."}
                        fontFamily={"Lato-Regular"}
                        fontSize={1.65}
                        color={ProfileNameColor}
                        style={{ lineHeight: 20, marginTop: 5 }}
                    />
                    <Space height={2} />
                    <Heading text={"Clause 2"}
                        fontFamily={"RobotoCondensed-SemiBold"}
                        fontSize={2.4}
                        color={ProfileNameColor} />
                    <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."}
                        fontFamily={"Lato-Regular"}
                        fontSize={1.65}
                        color={ProfileNameColor}
                        style={{ lineHeight: 20, marginTop: 5 }}
                    />
                    <Space height={2} />
                    <Heading text={"Clause 3"}
                        fontFamily={"RobotoCondensed-SemiBold"}
                        fontSize={2.4}
                        color={ProfileNameColor} />
                    <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."}
                        fontFamily={"Lato-Regular"}
                        fontSize={1.65}
                        color={ProfileNameColor}
                        style={{ lineHeight: 20, marginTop: 5 }}
                    />

                    <Space height={2} />
                    <Heading text={"Clause 4"}
                        fontFamily={"RobotoCondensed-SemiBold"}
                        fontSize={2.4}
                        color={ProfileNameColor} />
                    <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."}
                        fontFamily={"Lato-Regular"}
                        fontSize={1.65}
                        color={ProfileNameColor}
                        style={{ lineHeight: 20, marginTop: 5, }}
                    />
                    <Space height={20} />
                </ScrollView>
            </View>
        </View>
    )
}

export default TermsScreen

const styles = StyleSheet.create({
    kk: {
        lineHeight: 20,
    }
})