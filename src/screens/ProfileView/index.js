import { ImageBackground, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BackIcon, HatGirl, HatGirl2, ShowCase, small_Thumbnail2, small_Thumbnail3, WhiteBack } from '../../assets'
import { hp, wp } from '../../utils/responsive'
import { TRANSPARENT, WHITE } from '../../utils/colors'
import Picture from '../../components/customComponents/Picture'
import TopHeader from '../../components/TopHeader'

const ProfileView = ({ navigation }) => {
    const Thumbnail = [
        {
            Small_thumbnail: small_Thumbnail2,
            LargeShowcase: HatGirl,
        },
        {
            Small_thumbnail: small_Thumbnail3,
            LargeShowcase: HatGirl2,
        },
        {
            Small_thumbnail: small_Thumbnail2,
            LargeShowcase: HatGirl,
        },
        {
            Small_thumbnail: small_Thumbnail3,
            LargeShowcase: HatGirl2,
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleThumbnailPress = (index, showcaseImage) => {
        setSelectedIndex(index);
        setSelectedBackground(showcaseImage);
    };

    const [selectedBackground, setSelectedBackground] = useState(HatGirl);

    return (
        <View style={{ flex: 1, }}>
            <StatusBar translucent backgroundColor={TRANSPARENT} barStyle="light-content" />
            <ImageBackground
                source={selectedBackground}
                style={{
                    width: wp(100),
                    height: hp(106),
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}
                resizeMode="cover"
            >

                <TopHeader
                    leftIcon={WhiteBack}
                    title="Anabiya - 24"
                    titleColor={WHITE}
                    onPressLeft={() => navigation.goBack()}
                    background={TRANSPARENT}
                />

                <View style={{
                    width: wp(90),
                    height: hp(10),
                    position: "absolute",
                    bottom: hp(2),
                    margin: "auto",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    alignSelf: "center"

                }}>
                    {Thumbnail.map((item, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={[
                                styles.thumbnailImage,
                                {
                                    borderColor: idx === selectedIndex ? "white" : "transparent",
                                    opacity: idx === selectedIndex ? 1 : 0.7,
                                },
                            ]}
                            onPress={() => handleThumbnailPress(idx, item.LargeShowcase)}
                        >
                            <Picture localSource={item.Small_thumbnail} height={hp(9)} width={wp(18)} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ImageBackground >
        </View >
    );
};

export default ProfileView;

const styles = StyleSheet.create({
    thumbnailImage: {
        height: hp(9),
        width: wp(18),
        alignSelf: "center",
        borderRadius: 5,
        borderWidth: 2,
        overflow: "hidden",
    },
});
