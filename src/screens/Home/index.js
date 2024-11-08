import { StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Picture from '../../components/customComponents/Picture';
import { Board1, Chat, Heart, MatchIcon, NavigationPic, Profile } from '../../assets';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Heading from '../../components/customComponents/Heading';
import { GrayBG, TRANSPARENT, WHITE } from '../../utils/colors';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { hp, wp } from '../../utils/responsive';
import BottomView from '../../components/BottomView';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [index, setIndex] = useState(1);
    const navigation = useNavigation();

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '25%', '96%'], []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
        if (index === 0) {
            bottomSheetRef.current?.snapToIndex(1);
        }
        setIndex(index);
    }, []);


    return (
        <View>
            <StatusBar translucent backgroundColor={TRANSPARENT}
                barStyle={'dark-content'} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#d4d4d4", paddingBottom: 5, paddingHorizontal: 7, paddingTop: 35, }}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Picture
                        localSource={Profile}
                        height={hp(7)}
                        width={wp(15)}
                    />
                    <View style={{ justifyContent: "center" }}>
                        <Heading text={"Welcome"} fontSize={1.9} fontFamily={"RobotoCondensed-Regular"} />
                        <Heading text={"John Doe 👋 "} fontFamily={"RobotoCondensed-ExtraBold"} fontSize={2.8} marginTop={-.5} />
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10, }}>
                    <TouchableOpacity onPress={() => navigation.navigate("RequestScreen")}>
                        <Picture
                            localSource={Heart}
                            height={hp(2.7)}
                            width={wp(6)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("MatchScreen")}>
                        <Picture
                            localSource={MatchIcon}
                            height={hp(3.5)}
                            width={wp(7)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("MessageScreen")}>
                        <Picture
                            localSource={Chat}
                            height={hp(3)}
                            width={wp(7)}
                        />
                    </TouchableOpacity>

                </View>

            </View>

            <View>
                <Picture
                    localSource={Board1}
                    height={hp(100)}
                    width={wp(100)}
                />
            </View>

            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enableOverDrag={false}
                handleIndicatorStyle={{ backgroundColor: '#cccc', width: wp(15) }}

                backgroundStyle={styles.bottomSheetBackground}
            >
                <View style={styles.bottomSheetContentWrapper}>
                    <BottomSheetView style={styles.bottomSheetContent}>
                        <View>
                            <BottomView index={index} />
                        </View>
                    </BottomSheetView>
                </View>
            </BottomSheet>
        </View>
    )
}

export default Home;


const styles = StyleSheet.create({

    bottomSheetBackground: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: GrayBG,
        overflow: 'hidden',
    },
    bottomSheetContentWrapper: {
        flex: 1,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        overflow: 'hidden',
        marginTop: hp(-2)
    },
    bottomSheetContent: {
        backgroundColor: GrayBG,
        padding: 20,
    },
    text: {
        fontSize: 18,
    },



});

