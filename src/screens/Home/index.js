import { StatusBar, StyleSheet, Text, View, } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react';
// import { styles } from './styles';
import Picture from '../../components/customComponents/Picture';
import { Board1, Chat, Heart, NavigationPic, Profile } from '../../assets';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Heading from '../../components/customComponents/Heading';
import { GrayBG, TRANSPARENT, WHITE } from '../../utils/colors';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import BottomView from './BottomView';
import { hp, wp } from '../../utils/responsive';

const Home = () => {
    const [index, setIndex] = useState(1); // State for storing index

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
            <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#d4d4d4", padding: 5, paddingTop: 35 }}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Picture
                        localSource={Profile}
                        height={responsiveHeight(7)}
                        width={responsiveWidth(15)}
                    />
                    <View style={{ justifyContent: "center" }}>
                        <Heading text={"Welcome"} fontSize={1.9} fontFamily={"RobotoCondensed-Regular"} />
                        <Heading text={"John Doe 👋 "} fontFamily={"RobotoCondensed-ExtraBold"} fontSize={2.8} marginTop={-.5} />
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                    <Picture
                        localSource={Heart}
                        height={responsiveHeight(3.1)}
                        width={responsiveWidth(7)}
                    />
                    <Picture
                        localSource={Chat}
                        height={responsiveHeight(3)}
                        width={responsiveWidth(7)}
                    />
                    <Picture
                        localSource={NavigationPic}
                        height={responsiveHeight(3)}
                        width={responsiveWidth(7)}
                    />

                </View>

            </View>

            <View>
                <Picture
                    localSource={Board1}
                    height={responsiveHeight(100)}
                    width={responsiveWidth(100)}
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

    // Apply border radius and background color to the BottomSheet's background
    bottomSheetBackground: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // backgroundColor: WHITE,
        backgroundColor: GrayBG,

        overflow: 'hidden',
    },
    // Wrapper around BottomSheetView for rounded corners
    bottomSheetContentWrapper: {
        flex: 1,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        overflow: 'hidden',
        marginTop: hp(-2)
    },
    // Inner content of the BottomSheet
    bottomSheetContent: {
        // backgroundColor: 'green',
        backgroundColor: GrayBG,
        padding: 20,
    },
    text: {
        fontSize: 18,
        // color: 'white',
    },



});

