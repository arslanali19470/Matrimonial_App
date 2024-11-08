import React from 'react'
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackIcon, MatchIcon, SearchIcon } from '../../assets'
import Picture from '../../components/customComponents/Picture'
import { hp, wp } from '../../utils/responsive'
import { BLACK, GRAYTEXT, TRANSPARENT, WHITE } from '../../utils/colors'
import Heading from '../../components/customComponents/Heading'
import UnderLine from '../../components/customComponents/UnderLine'
import Space from '../../components/customComponents/Space'
import RequestCard from '../../components/RequestCard'
import { useNavigation } from '@react-navigation/native'
import CardList from '../../components/CardList'
import { ImagesList } from '../../utils/data'


const RequestScreen = () => {
    const navigate = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={TRANSPARENT}
                barStyle={'dark-content'} />
            <View style={styles.BgTopBox}>
                <View style={styles.rowCenterSpaceBetween}>
                    <TouchableOpacity onPress={() => navigate.goBack()}>
                        <Picture
                            localSource={BackIcon}
                            height={hp(2.5)}
                            width={wp(3)}
                        />
                    </TouchableOpacity>
                    <Heading text={"Requests"} fontFamily={"RobotoCondensed-SemiBold"} marginLeft={wp(1.5)} />
                    <View style={styles.rowCenterSpaceCenter}>
                        <TouchableOpacity>
                            <Picture
                                localSource={MatchIcon}
                                height={hp(3.2)}
                                width={wp(6.4)}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Picture
                                localSource={SearchIcon}
                                height={hp(2.8)}
                                width={wp(8.5)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Space height={3} /> */}
            </View>
            <View style={styles.Border} />

            {/* <RequestCard Request={true} /> */}

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
        // backgroundColor: "red"
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
        // backgroundColor: "green",
        backgroundColor: GRAYTEXT,
        height: 1,
        width: hp(100)
    },
    scrollView: {
        paddingHorizontal: wp(3),
    },
    RequestBox: {
        paddingLeft: wp(1)
    }
})
