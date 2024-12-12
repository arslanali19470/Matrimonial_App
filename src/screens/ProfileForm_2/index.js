import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { BLACK, WHITE } from '../../utils/colors';
import { dropdownData } from '../../utils/data';
import { hp, wp } from '../../utils/responsive';

import Space from '../../components/customComponents/Space';
import DropdownSection from '../../components/DropdownSection';
import TopHeader from '../../components/TopHeader';
import { BackIcon } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/customComponents/Button';

const ProfileForm = ({ navigation }) => {
    // const navigation = useNavigation();

    // States for dropdowns
    const [educationOpen, setEducationOpen] = useState(false);
    const [educationValue, setEducationValue] = useState(null);

    const [instituteOpen, setInstituteOpen] = useState(false);
    const [instituteValue, setInstituteValue] = useState(null);

    const [employmentOpen, setEmploymentOpen] = useState(false);
    const [employmentValue, setEmploymentValue] = useState(null);

    const [professionOpen, setProfessionOpen] = useState(false);
    const [professionValue, setProfessionValue] = useState(null);

    const [religionOpen, setReligionOpen] = useState(false);
    const [religionValue, setReligionValue] = useState(null);

    return (
        <View style={{ flex: 1 }}>
            <TopHeader
                leftIcon={BackIcon}
                title="Edit Profile"
                statusColor="dark"
                background={WHITE}
                onPressLeft={() => navigation.goBack()}
                border={true}
                coloredBorder={true}
                coloredBorderWidth={35}
                step={true}
                step_V1="1"
                step_V2="3"
            />
            <ScrollView
                style={styles.container}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}

            >
                {/* Section 1 */}
                <View style={styles.card}>
                    {/* Education Level Dropdown */}
                    <DropdownSection
                        title="Education Level"
                        open={educationOpen}
                        value={educationValue}
                        setOpen={() => {
                            setEducationOpen(!educationOpen);
                            setInstituteOpen(false);
                            setEmploymentOpen(false);
                            setProfessionOpen(false);
                            setReligionOpen(false)
                        }}
                        setValue={setEducationValue}
                        items={dropdownData.education.items}
                    />
                    <Space height={3} />

                    {/* Institute Dropdown */}
                    <DropdownSection
                        title="Select Institute (optional)"
                        open={instituteOpen}
                        value={instituteValue}
                        setOpen={() => {
                            setInstituteOpen(!instituteOpen);
                            setEducationOpen(false);
                            setEmploymentOpen(false);
                            setProfessionOpen(false);
                            setReligionOpen(false);
                        }}
                        setValue={setInstituteValue}
                        items={dropdownData.institute.items}
                    />
                </View>

                {/* Section 2 */}
                <View style={[styles.card, { zIndex: -10 }]}>
                    {/* Employment Status Dropdown */}
                    <DropdownSection
                        title="Employment Status"
                        open={employmentOpen}
                        value={employmentValue}
                        setOpen={() => {
                            setEmploymentOpen(!employmentOpen);
                            setEducationOpen(false);
                            setInstituteOpen(false);
                            setProfessionOpen(false);
                            setReligionOpen(false);

                        }}
                        setValue={setEmploymentValue}
                        items={dropdownData.employment.items}
                    />
                    <Space height={3} />

                    {/* Profession Dropdown */}
                    <DropdownSection
                        title="Select Profession"
                        open={professionOpen}
                        value={professionValue}
                        setOpen={() => {
                            setProfessionOpen(!professionOpen);
                            setEducationOpen(false);
                            setInstituteOpen(false);
                            setEmploymentOpen(false);
                            setReligionOpen(false);
                        }}
                        setValue={setProfessionValue}
                        items={dropdownData.profession.items}
                    />
                </View>

                {/* Section 3 */}
                <View style={[styles.card, { zIndex: -20 }]}>
                    {/* Religion Dropdown */}
                    <DropdownSection
                        title="Religion"
                        open={religionOpen}
                        value={religionValue}
                        setOpen={() => {
                            setReligionOpen(!religionOpen);
                            setEducationOpen(false);
                            setInstituteOpen(false);
                            setEmploymentOpen(false);
                            setProfessionOpen(false);
                        }}
                        setValue={setReligionValue}
                        items={dropdownData.religion.items}
                    />
                </View>
                <Space height={religionOpen ? 25 : 7} />
                <Button title={"Next"} style={{ zIndex: -30 }} onPress={() => navigation.navigate("ProfileForm_3")} />
                <Space height={2} />
            </ScrollView>
        </View>
    );
};

export default ProfileForm;

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
});
