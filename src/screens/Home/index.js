import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
    FlatList,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    View,
} from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import Picture from '../../components/customComponents/Picture';
import Heading from '../../components/customComponents/Heading';
import BottomView from '../../components/BottomView';

import { Chat, Heart, MatchIcon, Profile, } from '../../assets';
import { TRANSPARENT, WHITE } from '../../utils/colors';
import { hp, wp } from '../../utils/responsive';
import { styles } from './styles';
import { MaterialIcons } from '../../utils/constant';
import { profiles } from '../../utils/data';

const Home = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['22%', '22%', '96%'], []);
    const [Thumbnail, setThumbnail] = useState(true)

    const handleSheetChanges = useCallback((index) => {
        if (index === 0) bottomSheetRef.current?.snapToIndex(1);
    }, []);


    // Change Name :
    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const newIndex = viewableItems[0].index;
            setIndex(newIndex);
            setCurrentImageIndex(0);// always goes to top white box 
        }
    }, []);


    //Change Border Of Image Thumbnail
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const onViewableVerticalItemsChanged = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const visibleIndex = viewableItems[0].index;
            setCurrentImageIndex(visibleIndex);
        }
    }, []);


    const renderVerticalImages = ({ item: image, name, smallThumbnail }) => (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View>
                <View style={[styles.containerView, { marginLeft: Thumbnail ? -wp(55) : -wp(70) }]}>
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={() => setThumbnail(!Thumbnail, console.log(Thumbnail))}
                    >
                        {Thumbnail ? <MaterialIcons name="keyboard-double-arrow-left" color={WHITE} size={20} style={{ marginLeft: 0 }} /> :
                            <MaterialIcons name="keyboard-double-arrow-right" color={WHITE} size={20} style={{ marginLeft: 10 }} />}
                    </TouchableOpacity>

                    {smallThumbnail.map((img, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={[
                                styles.thumbnailImage,
                                { borderColor: currentImageIndex === idx ? "white" : "transparent", opacity: currentImageIndex === idx ? 1 : .7, },
                            ]}
                            onPress={() => navigation.navigate("ProfileView")}
                        >
                            <Picture localSource={img} height={hp(7)} width={wp(12)} opacity={1} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ImageBackground>
    );

    const renderHorizontalProfiles = ({ item }) => (
        <FlatList
            data={item.images}
            renderItem={({ item: image }) => renderVerticalImages({
                item: image,
                name: item.name,
                smallThumbnail: profiles[index].smallThumbnail

            })}
            keyExtractor={(image, idx) => `${item.id}-${idx}`}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            onViewableItemsChanged={onViewableVerticalItemsChanged}
            snapToInterval={hp(100)}
            snapToAlignment="start"
            decelerationRate="fast"
        />
    );


    return (
        <View
            style={styles.container}
        >
            <StatusBar translucent backgroundColor={TRANSPARENT} barStyle="dark-content" />

            <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#d4d4d4", paddingBottom: 5, paddingHorizontal: 7, paddingTop: 35, }}>
                <TouchableOpacity style={{ flexDirection: "row", gap: 10, }} onPress={() => navigation.navigate("ProfileScreen")}>
                    <Picture
                        localSource={Profile}
                        height={hp(7)}
                        width={wp(15)}
                    />
                    <View style={{ justifyContent: "center" }}>
                        <Heading text={"Welcome"} fontSize={1.9} fontFamily={"RobotoCondensed-Regular"} />
                        <Heading text={"John Doe 👋 "} fontFamily={"RobotoCondensed-ExtraBold"} fontSize={2.8} marginTop={-.5} />
                    </View>
                </TouchableOpacity>
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

            <FlatList
                data={profiles}
                renderItem={renderHorizontalProfiles}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
            />

            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enableOverDrag={false}
                handleIndicatorStyle={styles.bottomSheetIndicator}
                backgroundStyle={styles.bottomSheetBackground}
            >
                <BottomSheetView style={styles.bottomSheetContent}>
                    <BottomView smallButton={true} profileName={profiles[index]?.name} snapPoints={snapPoints} />
                </BottomSheetView>
            </BottomSheet>
        </View>
    );
};

export default Home;
