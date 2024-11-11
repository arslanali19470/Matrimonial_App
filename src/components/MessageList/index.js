import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Picture from '../customComponents/Picture';
import { hp, wp } from '../../utils/responsive';
import Heading from '../customComponents/Heading';
import { BLACK, GrayBG, MessageBG, TimeTextColor } from '../../utils/colors';
import Space from '../customComponents/Space';
import { MessageArray } from '../../utils/data';

const MessagesList = ({ navigation }) => {
    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.navigate("ChatScreen", { item })}>
            <View style={styles.messageContainer}>
                <View style={styles.profileContainer}>
                    <Picture
                        localSource={item.Profiler}
                        height={hp(8)}
                        width={wp(16)}
                    />
                    <View style={styles.headingContainer}>
                        <Heading text={item.name} fontFamily={"RobotoCondensed-Bold"} />
                        <Space height={0.4} />
                        <Heading text={item.subhead} fontSize={1.6} fontFamily={"Lato-Regular"} color={BLACK} />
                    </View>
                </View>
                <View style={styles.dotDateContainer}>
                    <View style={[styles.onlineDot, { backgroundColor: item.onlineColor }]} />
                    <Heading text={item.TimeText} fontSize={1.6} color={TimeTextColor} />
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            style={styles.scrollView}
            data={MessageArray}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            ListHeaderComponent={<Space height={3} />}
        />
    );
};

export default MessagesList;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: MessageBG,
    },
    messageContainer: {
        flexDirection: "row",
        marginBottom: hp(1.7),
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp(4),
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    headingContainer: {
        marginLeft: wp(3),
    },
    dotDateContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: hp(1),
    },
    onlineDot: {
        height: hp(1.5),
        width: hp(1.5),
        borderRadius: 20,
        alignSelf: "flex-end",
    },
    divider: {
        height: 1,
        width: wp(90),
        margin: 'auto',
        marginBottom: hp(1.7),
        backgroundColor: GrayBG,
    },
});
