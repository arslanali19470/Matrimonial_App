import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Picture from "../../components/customComponents/Picture";
import { BackIcon, Bell_black, CameraIcon, DeleteIcon, FeedBackIcon, LogoutIcon, NeedHelpIcon, NewDelete, NewLogout, NewSaved, PaintIcon, Pakistan, PencilIcon, PotfolioLeft_O, PotfolioRight_O, Profile, SavedNew, SaveIcon, TermsIcon, WorldIcon } from "../../assets";
import { fp, hp, wp } from "../../utils/responsive";
import { MessageBG, ProfileNameColor, PURPLE, Redish, TRANSPARENT } from "../../utils/colors";
import TopHeader from "../../components/TopHeader";
import Heading from "../../components/customComponents/Heading";
import Space from "../../components/customComponents/Space";
import ProfileSetList from "../../components/ProfileSetList";
import { styles } from './styles';

const CircularProgressBar = ({ navigation }) => {
    const [progress, setProgress] = useState(80);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <TopHeader
                leftIcon={BackIcon}
                title="Profile"
                statusColor="dark"
                background={MessageBG}
                onPressLeft={() => navigation.goBack()}
            />
            <Picture
                localSource={PotfolioRight_O}
                height={hp(13)}
                width={wp(26)}
                position={"absolute"}
                top={0}
                right={wp(2)}
            />
            {/* Circular Progress Bar */}
            <View style={styles.profilePhotoBox}>
                <AnimatedCircularProgress
                    size={155}
                    width={6}
                    fill={progress}
                    tintColor={PURPLE}
                    backgroundColor={TRANSPARENT}
                    rotation={75}
                    lineCap="round"
                    style={styles.AnimationCircleStyle}
                >
                    {() => (
                        <>
                            <Picture localSource={Profile} height={hp(20)} width={wp(40)} />
                        </>
                    )}
                </AnimatedCircularProgress>

                <View style={styles.percentBox}>
                    <Text style={styles.percentText}> {`${Math.round(progress)}%`} Complete</Text>
                </View>
                <TouchableOpacity style={styles.CameraBox}>

                    <View style={{
                        height: hp(3.5), width: wp(7.5)
                    }} />

                </TouchableOpacity>

            </View>

            <Picture
                localSource={PotfolioLeft_O}
                height={hp(22)}
                width={wp(22)}
                position={"absolute"}
                top={hp(20)}
                left={wp(0)}
            />

            <View style={{ alignItems: "center" }}>
                <Heading
                    text={"John Doe"}
                    fontFamily={"RobotoCondensed-ExtraBold"}
                    fontSize={3.6}
                    color={ProfileNameColor}
                />
                <Heading
                    text={"Software Engineer"}
                    fontFamily={"RobotoCondensed-Bold"}
                    fontSize={2.4}
                    color={PURPLE}
                />
                <Heading
                    text={"Bachelors / BS (16 years)"}
                    fontSize={1.4}
                />
                <View style={{ flexDirection: "row", alignItems: "center", gap: 2, }}>
                    <Heading text={"Lahore, Pakistan"} fontSize={1.4} />
                    <Picture
                        localSource={Pakistan}
                        height={hp(1.6)}
                        width={wp(5)}
                        marginTop={2}
                    />
                </View>
            </View>
            <Space height={(3)} />

            {/* Profile */}
            <View style={styles.DetailBox}>
                <Heading
                    text={"Profile"}
                    fontFamily={"RobotoCondensed-SemiBold"}
                    fontSize={2.8}
                    color={ProfileNameColor}
                />
                <ProfileSetList LeftIcon={Bell_black} title={"Notification"} />
                <ProfileSetList LeftIcon={PencilIcon} title={"Edit Profile"} RightDetail="75% Complete" onPress={() => navigation.navigate("EditProfile")} />

                <ProfileSetList LeftIcon={NewSaved} title={"Saved Profiles"} />
            </View>

            {/* Settings */}
            <Space height={3} />
            <View style={styles.DetailBox}>
                <Heading
                    text={"Settings"}
                    fontFamily={"RobotoCondensed-SemiBold"}
                    fontSize={2.8}
                    color={ProfileNameColor}
                />
                <ProfileSetList LeftIcon={WorldIcon} title={"Languages"} RightDetail="English" />
                <ProfileSetList LeftIcon={PaintIcon} title={"App Theme"} smallDot={true} RightDetail="Purple"
                    onPress={() => navigation.navigate("ThemeScreen")}
                />
                <ProfileSetList LeftIcon={TermsIcon} title={"Terms & Conditions"} onPress={() => navigation.navigate("TermsScreen")} />
                <ProfileSetList LeftIcon={FeedBackIcon} title={"Feedback"} />
                <ProfileSetList LeftIcon={NeedHelpIcon} title={"Need Help?"} imageHeigh={hp(3.6)} />
            </View>


            {/* Delete */}
            <Space height={3} />
            <View style={styles.DetailBox}>
                <ProfileSetList LeftIcon={NewLogout} title={"LogOut"} RightIcon={false} titleColor={Redish} imageHeigh={hp(3.2)} />
                <ProfileSetList LeftIcon={NewDelete} title={"Delete Account"} RightIcon={false} titleColor={Redish} imageHeigh={hp(3.5)} imageWidth={wp(6)} />
            </View>
            <Space height={3} />



        </ScrollView >
    );
};

export default CircularProgressBar;

{/* <Picture
                        localSource={CameraIcon}
                        height={hp(3.5)}
                        width={wp(7.5)}

                    /> */}