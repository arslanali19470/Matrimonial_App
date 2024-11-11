import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackIcon, MatchIcon, SearchIcon } from '../../assets'
import Picture from '../../components/customComponents/Picture'
import { hp, wp } from '../../utils/responsive'
import { GRAYTEXT, PURPLE, TRANSPARENT, WHITE } from '../../utils/colors'
import Heading from '../../components/customComponents/Heading'
import Space from '../../components/customComponents/Space'
import { ImagesList, PendingNumber } from '../../utils/data'
import CardList from '../../components/CardList'
import TopHeader from '../../components/TopHeader'


const MatchScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <View style={styles.container}>
            <TopHeader
                leftIcon={BackIcon}
                title="Requests"
                RightIcon={MatchIcon}
                RightIcon2={SearchIcon}
                statusColor="dark"
                border={true}
                onPressLeft={() => navigation.goBack()}
            />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.containerTab}>
                    {/* Tab 1 */}
                    <TouchableOpacity
                        style={[
                            styles.tab,
                            { backgroundColor: activeTab === 0 ? PURPLE : "transparent" }
                        ]}
                        onPress={() => setActiveTab(0)}
                    >
                        <Heading
                            text={"Completed (28)"}
                            fontSize={2}
                            color={activeTab === 0 ? WHITE : "#666666"}
                            onPress={() => setActiveTab(0)}
                            fontFamily={activeTab === 0 ? "RobotoCondensed-Regular" : "RobotoCondensed-Bold"}
                        />
                    </TouchableOpacity>

                    {/* Tab 2 */}
                    <TouchableOpacity
                        style={[
                            styles.tab,
                            { backgroundColor: activeTab === 1 ? PURPLE : "transparent" }
                        ]}
                        onPress={() => setActiveTab(1)}
                    >
                        <Heading
                            text={"Pending (3)"}
                            fontSize={2}
                            color={activeTab === 1 ? WHITE : "#666666"}
                            fontFamily={activeTab === 1 ? "RobotoCondensed-Regular" : "RobotoCondensed-Bold"}
                            onPress={() => setActiveTab(1)}
                        />
                    </TouchableOpacity>
                </View>
                <Space height={1} />
                <CardList listName={activeTab === 1 ? ImagesList : PendingNumber} />
            </ScrollView>
        </View>
    )
}

export default MatchScreen;

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
    containerTab: {
        backgroundColor: WHITE,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 20,
        marginTop: hp(2),
        overflow: "hidden",
        width: wp(90),
        alignSelf: "center",
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    tab: {
        width: wp(42),
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 7,
    },
    scrollView: {
        paddingHorizontal: wp(3),
    },
})
