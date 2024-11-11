import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CircleDesign, WhileSearch2, WhiteBack, WhiteSearch } from '../../assets'
import { hp, wp } from '../../utils/responsive'
import { BLUE, WHITE } from '../../utils/colors'
import MessagesList from '../../components/MessageList'
import TopHeader from '../../components/TopHeader'
import Picture from '../../components/customComponents/Picture'


const MessageScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TopHeader
                leftIcon={WhiteBack}
                title="Messages"
                titleColor={WHITE}
                background={BLUE}
                RightIcon2={WhileSearch2}
                statusColor="light"
                border={true}
                onPressLeft={() => navigation.goBack()}
            />
            <Picture
                localSource={CircleDesign}
                height={hp(20)}
                width={wp(40)}
                position={"absolute"}
                top={0}
                right={wp(2)}
            />

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
