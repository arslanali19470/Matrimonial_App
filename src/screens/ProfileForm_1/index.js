import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import TopHeader from '../../components/TopHeader';
import { BackIcon, Down_icon, Female_icon, Male_icon } from '../../assets';
import { BLACK, GRAYTEXT, ProfileNameColor, PURPLE, WHITE } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import Heading from '../../components/customComponents/Heading';
import { fp, hp, wp } from '../../utils/responsive';
import Space from '../../components/customComponents/Space';
import Picture from '../../components/customComponents/Picture';
import DateBox from '../../components/DateBox';
import Button from '../../components/customComponents/Button';

const ProfileForm_1 = () => {
    const navigation = useNavigation();
    const [Gencheck, setGencheck] = useState(true)
    return (
        <>
            <TopHeader
                leftIcon={BackIcon}
                title="Edit Profile"
                statusColor="dark"
                background={WHITE}
                onPressLeft={() => navigation.goBack()}
                border={true}
                coloredBorder={true}
                coloredBorderWidth={25}
                step={true}
                step_V1="1"
                step_V2="3"
            />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Space height={2} />
                <Heading
                    text="Add information about yourself"
                    fontFamily="RobotoCondensed-SemiBold"
                    fontSize={2.8}
                    color={ProfileNameColor}
                />
                <Heading
                    text="This color change will only apply to buttons and icons etc"
                    fontFamily="Lato-Regular"
                    fontSize={1.6}
                    color={ProfileNameColor}
                    marginTop={1}
                />
                <View style={styles.card}>
                    <Heading
                        text="First Name"
                        fontFamily="RobotoCondensed-SemiBold"
                        fontSize={2.4}
                        color={ProfileNameColor}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Abbas"
                        keyboardType="text"
                    />
                    <Heading
                        text="Last Name"
                        fontFamily="RobotoCondensed-SemiBold"
                        fontSize={2.4}
                        color={ProfileNameColor}
                        marginTop={1}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter the last name"
                        keyboardType="text"
                    />
                </View>
                <Space height={2} />
                <View style={styles.card}>
                    <Heading
                        text="Gender"
                        fontFamily="RobotoCondensed-SemiBold"
                        fontSize={2.4}
                        color={ProfileNameColor}
                        marginBottom={1}
                    />
                    <View style={styles.genderRow}>
                        <TouchableOpacity style={[styles.genderOptionMale, { backgroundColor: Gencheck ? 'rgba(73, 11, 62, 0.2)' : 'rgba(255, 255, 255, 0.2)', }]} onPress={() => setGencheck(true)}>
                            <Picture localSource={Male_icon} height={hp(5.1)} width={wp(10.3)} />
                            <Heading
                                text="Male"
                                fontFamily={Gencheck ? "Lato-Bold" : "Lato-SemiBold"}
                                fontSize={2.4}
                                // color={PURPLE}
                                color={Gencheck ? PURPLE : ProfileNameColor}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.genderOptionFemale, { backgroundColor: Gencheck ? 'rgba(255, 255, 255, 0.2)' : 'rgba(73, 11, 62, 0.2)', }]} onPress={() => setGencheck(false)}>
                            <Picture localSource={Female_icon} height={hp(5.5)} width={wp(7.5)} />
                            <Heading
                                text="Female"
                                fontFamily={Gencheck ? "Lato-SemiBold" : "Lato-Bold"}
                                fontSize={2.4}
                                color={Gencheck ? ProfileNameColor : PURPLE}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Space height={2} />
                <View style={styles.card}>
                    <Heading
                        text="Date of Birth"
                        fontFamily="RobotoCondensed-SemiBold"
                        fontSize={2.4}
                        color={ProfileNameColor}
                        marginBottom={1}
                    />
                    <DateBox />
                </View>
                <View style={styles.card}>
                    <Heading
                        text="What is your height?"
                        fontFamily="RobotoCondensed-SemiBold"
                        fontSize={2.4}
                        color={ProfileNameColor}
                        marginBottom={1}
                    />
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.dateInput}
                            placeholder="DD/MM/YYYY"
                            editable={false}
                        />
                        <Picture localSource={Down_icon} height={hp(1.3)} width={wp(4.5)} />
                    </View>
                </View>
                <Space height={5} />
                <Button title="Next" onPress={() => navigation.navigate("ProfileForm_2")} />
                <Space height={7} />
            </ScrollView>
        </>
    );
};

export default ProfileForm_1;

const styles = StyleSheet.create({
    scrollView: {
        // padding: wp(5),
        alignSelf: "center"
    },
    card: {
        backgroundColor: WHITE,
        width: wp(93),
        borderRadius: wp(2),
        marginTop: hp(2),
        paddingHorizontal: wp(3),
        paddingVertical: wp(5),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    textInput: {
        fontSize: fp(2.2),
        borderWidth: 1.5,
        borderColor: GRAYTEXT,
        borderRadius: wp(2),
        marginTop: hp(1),
        height: hp(6),
        paddingHorizontal: wp(2.5),
    },
    genderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    genderOptionMale: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: hp(1.5),
        width: wp(40),
        height: hp(15),
        borderRadius: wp(3),
        borderWidth: 1,
        borderColor: PURPLE,

    },
    genderOptionFemale: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: hp(1.5),
        width: wp(40),
        height: hp(15),
        borderRadius: wp(3),
        borderWidth: 1,
        borderColor: PURPLE,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: GRAYTEXT,
        borderRadius: wp(2),
        marginTop: hp(1),
        height: hp(6),
        paddingHorizontal: wp(2.5),
    },
    dateInput: {
        fontSize: fp(2.2),
        flex: 1,
        color: BLACK,
    },
});
