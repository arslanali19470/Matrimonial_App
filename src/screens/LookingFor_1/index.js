import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { BLACK, WHITE, PRIMARY_COLOR, ProfileNameColor } from '../../utils/colors';
import { LookingFor_dropdownData_S1 } from '../../utils/data';
import { hp, wp } from '../../utils/responsive';

import Space from '../../components/customComponents/Space';
import DropdownSection from '../../components/DropdownSection';
import TopHeader from '../../components/TopHeader';
import { BackIcon } from '../../assets';
import Button from '../../components/customComponents/Button';
import Heading from '../../components/customComponents/Heading';

const LookingFor_1 = ({ navigation }) => {
    // const navigation = useNavigation();

    // States for dropdowns
    const [educationOpen, setEducationOpen] = useState(false);
    const [educationValue, setEducationValue] = useState(null);

    const [instituteOpen, setInstituteOpen] = useState(false);
    const [instituteValue, setInstituteValue] = useState(null);

    return (
        <View style={{ flex: 1 }}>
            <TopHeader
                leftIcon={BackIcon}
                title="Looking for"
                statusColor="dark"
                background={WHITE}
                onPressLeft={() => navigation.goBack()}
                border={true}
                coloredBorder={true}
                coloredBorderWidth={30}
                step={true}
                step_V1="2"
                step_V2="3"
            />
            <ScrollView
                style={styles.container}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
            >
                <Space height={4} />
                <Heading
                    text="What are you looking for in your partner?"
                    fontFamily="RobotoCondensed-SemiBold"
                    fontSize={2.8}
                    color={ProfileNameColor}
                />
                <Heading
                    text="Add as much details as possible about your preferred partner to increase you chance of getting a better potential match."
                    fontFamily="Lato-Regular"
                    fontSize={1.6}
                    color={ProfileNameColor}
                    marginTop={1}
                />
                <View style={styles.card}>
                    {/* Partner Education Level Dropdown */}
                    <DropdownSection
                        title="Partner Education Level"
                        open={educationOpen}
                        value={educationValue}
                        setOpen={() => {
                            setEducationOpen(!educationOpen);
                            setInstituteOpen(false);
                        }}
                        setValue={setEducationValue}
                        items={LookingFor_dropdownData_S1.partnerEducation.items}
                    />
                    <Space height={3} />

                    {/* Select Institute Dropdown */}
                    <DropdownSection
                        title="Select Institute"
                        open={instituteOpen}
                        value={instituteValue}
                        setOpen={() => {
                            setInstituteOpen(!instituteOpen);
                            setEducationOpen(false);
                        }}
                        setValue={setInstituteValue}
                        items={LookingFor_dropdownData_S1.institutes.items}
                    />
                </View>

                <Space height={38} />
                <Button title={"Next"} style={styles.button} onPress={() => navigation.navigate("LookingFor_2")} />
            </ScrollView>
        </View>
    );
};

export default LookingFor_1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: hp(4),
        alignSelf: 'center',
    },
    card: {
        backgroundColor: WHITE,
        width: wp(93),
        borderRadius: wp(2),
        marginTop: hp(2),
        paddingHorizontal: wp(3),
        paddingVertical: wp(5),
        shadowColor: BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    button: {
        alignSelf: 'center',
        backgroundColor: PRIMARY_COLOR,
        zIndex: -20
    },
});
