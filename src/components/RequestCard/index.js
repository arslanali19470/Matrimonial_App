import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { hp, wp } from '../../utils/responsive'
import Picture from '../customComponents/Picture'
import { DoubleCheck, Pakistan, Req1, Req3, Req4, Req5, RequestBlack, Varified, WhiteCross } from '../../assets'
import { BLACK, PURPLE, WHITE } from '../../utils/colors'
import Heading from '../customComponents/Heading'
import Space from '../customComponents/Space'

const RequestCard = ({ Request, Match }) => {
    const RequestNumbers = [Req5, Req1, Req3, Req5];
    const PendingNumber = [Req1, Req3, Req4, Req5];
    const [activeTab, setActiveTab] = useState(0);
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            {Request && (
                <>
                    <Space height={1} />
                    <Heading text={"Requests Received (24)"} fontFamily={"RobotoCondensed-SemiBold"} />
                    <Space height={1} />
                    <Heading text={"Requests that you have received from others will appear here"} fontFamily={"Lato-Regular"} fontSize={1.6} color={BLACK} />
                    <Space height={1.5} />
                </>
            )}
            {Match && (
                <>
                    <View style={styles.container}>
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
                </>
            )}
            {(activeTab === 1 ? RequestNumbers : PendingNumber).map((item, ind) =>
                <View style={styles.requestItem} key={ind}>
                    <Picture
                        localSource={item}
                        height={hp(40)}
                        width={wp(100)}
                        top={0}
                        left={-wp(3)}
                    />
                    <Picture
                        localSource={RequestBlack}
                        height={hp(20)}
                        width={wp(100)}
                        roundCorner={15}
                        position={"absolute"}
                        bottom={-20}
                        left={-wp(3)}
                    />
                    <TouchableOpacity style={styles.crossButton}>
                        <Picture
                            localSource={WhiteCross}
                            height={hp(2)}
                            width={wp(4)}
                        />
                    </TouchableOpacity>
                    <View style={styles.verifiedBadge}>
                        {true ?
                            <Picture
                                localSource={Varified}
                                height={hp(1.5)}
                                width={wp(15)}
                            /> :
                            <Heading text={"Non-Varified"} color={PURPLE} fontSize={1.6} fontFamily={"RobotoCondensed-Bold"} style={{}} />
                        }
                    </View>
                    <View style={styles.userInfo}>
                        <View style={styles.locationRow}>
                            <Heading text={"Lahore, Pakistan"} fontSize={1.4} color={WHITE} />
                            <Picture
                                localSource={Pakistan}
                                height={hp(1.6)}
                                width={wp(5)}
                            />
                        </View>
                        <View style={styles.nameAndAcceptRow}>
                            <View>
                                <Heading text={"Miss Aliya - 28"} fontFamily={"RobotoCondensed-ExtraBold"} fontSize={4.2} color={WHITE} />
                                <Heading text={"Business Owner, M.phil (18 years)"} fontSize={1.5} color={WHITE} />
                            </View>
                            <TouchableOpacity style={styles.acceptButton}>
                                <Picture
                                    localSource={DoubleCheck}
                                    height={hp(2.3)}
                                    width={wp(4)}
                                />
                                <Text style={styles.acceptText}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>
    )
}

export default RequestCard

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: wp(3),
    },
    requestItem: {
        height: hp(35),
        marginBottom: 20,
    },
    crossButton: {
        backgroundColor: PURPLE,
        width: hp(5),
        height: hp(5),
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        position: "absolute"
    },
    verifiedBadge: {
        backgroundColor: "white",
        paddingLeft: 10,
        paddingRight: 5,
        paddingVertical: 3,
        width: wp(21),
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        position: "absolute",
        top: hp(3),
    },
    userInfo: {
        padding: 10,
        position: "absolute",
        bottom: 10,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    nameAndAcceptRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp(7),
    },
    acceptButton: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        backgroundColor: "#5D6F50",
        borderRadius: 20,
        width: wp(25),
        height: hp(4),
    },
    acceptText: {
        color: "white",
    },
    container: {
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
});
