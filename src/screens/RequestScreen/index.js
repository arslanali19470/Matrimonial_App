import React from 'react'
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import { BackIcon, MatchIcon, SearchIcon } from '../../assets'
import { hp, wp } from '../../utils/responsive'
import { BLACK, GRAYTEXT, WHITE } from '../../utils/colors'
import Heading from '../../components/customComponents/Heading'
import Space from '../../components/customComponents/Space'
import CardList from '../../components/CardList'
import { ImagesList } from '../../utils/data'
import TopHeader from '../../components/TopHeader'


const RequestScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TopHeader
                leftIcon={BackIcon}
                title="Requests"
                RightIcon={MatchIcon}
                RightIcon2={SearchIcon}
                statusColor="dark"
                onPressLeft={() => navigation.goBack()}
            />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.RequestBox}>
                    <Space height={1} />
                    <Heading text={"Requests Received (24)"} fontFamily={"RobotoCondensed-SemiBold"} />
                    <Space height={1} />
                    <Heading text={"Requests that you have received from others will appear here"} fontFamily={"Lato-Regular"} fontSize={1.6} color={BLACK} />
                    <Space height={1.5} />
                </View>
                <CardList listName={ImagesList} />
            </ScrollView>

        </View>
    )
}

export default RequestScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowCenterSpaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: wp(5),
        paddingTop: hp(6),
        paddingBottom: hp(3),
    },
    rowCenterSpaceCenter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    BgTopBox: {
        backgroundColor: WHITE
    },
    Border: {
        backgroundColor: GRAYTEXT,
        height: 1,
        width: hp(100)
    },
    scrollView: {
        paddingHorizontal: wp(3),
    },
    RequestBox: {
        paddingLeft: wp(1),
    }
})
