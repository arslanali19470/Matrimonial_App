import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../utils/responsive';
import Picture from '../../components/customComponents/Picture';
import { BackIcon, SearchIcon, } from '../../assets';
import Heading from '../../components/customComponents/Heading';
import { GrayBG, GRAYTEXT, TRANSPARENT } from '../../utils/colors';

const ChatScreen = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <View>
            <StatusBar translucent backgroundColor={TRANSPARENT}
                barStyle={'dark-content'} />
            <View style={styles.rowCenterSpaceBetween}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Picture
                        localSource={BackIcon}
                        height={hp(2.5)}
                        width={wp(2.7)}
                    />
                </TouchableOpacity>

                <View style={styles.centerContainer}>
                    <TouchableOpacity>
                        <Picture
                            localSource={item.Profiler}
                            height={hp(6)}
                            width={wp(12)}
                        />
                    </TouchableOpacity>
                    <Heading text={item.name} fontFamily={"RobotoCondensed-SemiBold"} />
                </View>

            </View>
            <View style={styles.divider} />
        </View>
    )
}

export default ChatScreen;

const styles = StyleSheet.create({
    rowCenterSpaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        paddingTop: hp(6),
        paddingBottom: hp(2),
    },
    centerContainer: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    divider: {
        height: 1,
        width: wp(100),
        margin: 'auto',
        marginBottom: hp(1.7),
        backgroundColor: GRAYTEXT,
    },
})