import React, { useState } from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CircleDesign, WhiteBack, WhiteSearch } from '../../assets'
import Picture from '../../components/customComponents/Picture'
import { hp, wp } from '../../utils/responsive'
import { BLUE, TRANSPARENT, WHITE } from '../../utils/colors'
import Heading from '../../components/customComponents/Heading'
import Space from '../../components/customComponents/Space'
import MessagesList from '../../components/MessageList'


const MessageScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={TRANSPARENT}
                barStyle={'light-content'} />

            <View style={styles.BgTopBox}>
                <Picture
                    localSource={CircleDesign}
                    height={hp(15)}
                    width={wp(25)}
                    position={"absolute"}
                    right={wp(2)}
                    top={-hp(2)}

                />
                <View style={styles.rowCenterSpaceBetween}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Picture
                            localSource={WhiteBack}
                            height={hp(2.5)}
                            width={wp(2.7)}
                        />
                    </TouchableOpacity>
                    <Heading text={"Messages"} fontFamily={"RobotoCondensed-SemiBold"} color={WHITE} />
                    <TouchableOpacity>
                        <Picture
                            localSource={WhiteSearch}
                            height={hp(2.4)}
                            width={wp(5)}
                        />
                    </TouchableOpacity>

                </View>
                <Space height={3} />
            </View>
            {/* <Space height={2} /> */}

            <MessagesList navigation={navigation} />

        </View>
    )
}

export default MessageScreen;

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
    },

    BgTopBox: {
        backgroundColor: BLUE,
    },


})
