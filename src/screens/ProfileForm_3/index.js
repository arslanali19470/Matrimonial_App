import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { BLACK, WHITE, PRIMARY_COLOR } from '../../utils/colors';
import { dropdownData_S2, dropdownData_S2_S2 } from '../../utils/data';
import { hp, wp } from '../../utils/responsive';

import Space from '../../components/customComponents/Space';
import DropdownSection from '../../components/DropdownSection';
import TopHeader from '../../components/TopHeader';
import { BackIcon } from '../../assets';
import Button from '../../components/customComponents/Button';

const ProfileForm_3 = ({ navigation }) => {
    // const navigation = useNavigation();

    // States for dropdowns
    const [nationalityOpen, setNationalityOpen] = useState(false);
    const [nationalityValue, setNationalityValue] = useState(null);

    const [residenceOpen, setResidenceOpen] = useState(false);
    const [residenceValue, setResidenceValue] = useState(null);

    const [relocationOpen, setRelocationOpen] = useState(false);
    const [relocationValue, setRelocationValue] = useState(null);

    const [maritalOpen, setMaritalOpen] = useState(false);
    const [maritalValue, setMaritalValue] = useState(null);

    return (
        <View style={{ flex: 1, }}>
            <TopHeader
                leftIcon={BackIcon}
                title="My Profile"
                statusColor="dark"
                background={WHITE}
                onPressLeft={() => navigation.goBack()}
                border={true}
                coloredBorder={true}
                coloredBorderWidth={65}
                step={true}
                step_V1="1"
                step_V2="3"
            />
            <ScrollView
                style={styles.container}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.card}>
                    {/* Nationality Dropdown */}
                    <DropdownSection
                        title="Nationality"
                        open={nationalityOpen}
                        value={nationalityValue}
                        setOpen={() => {
                            setNationalityOpen(!nationalityOpen);
                            setResidenceOpen(false);
                            setRelocationOpen(false);
                            setMaritalOpen(false);
                        }}
                        setValue={setNationalityValue}
                        items={dropdownData_S2.nationality.items}
                    />
                    <Space height={3} />

                    {/* Country of Current Residence Dropdown */}
                    <DropdownSection
                        title="Country of Current Residence"
                        open={residenceOpen}
                        value={residenceValue}
                        setOpen={() => {
                            setResidenceOpen(!residenceOpen);
                            setNationalityOpen(false);
                            setRelocationOpen(false);
                            setMaritalOpen(false);
                        }}
                        setValue={setResidenceValue}
                        items={dropdownData_S2.residence.items}
                    />
                    <Space height={3} />

                    {/* Relocation Preference Dropdown */}
                    <DropdownSection
                        title="Relocation Preference (optional)"
                        open={relocationOpen}
                        value={relocationValue}
                        setOpen={() => {
                            setRelocationOpen(!relocationOpen);
                            setNationalityOpen(false);
                            setResidenceOpen(false);
                            setMaritalOpen(false);
                        }}
                        setValue={setRelocationValue}
                        items={dropdownData_S2.relocation.items}
                    />
                    <Space height={3} />


                </View>

                <View style={[styles.card, { zIndex: -10 }]}>
                    {/* Marital Status Dropdown */}
                    <DropdownSection
                        title="Marital Status"
                        open={maritalOpen}
                        value={maritalValue}
                        setOpen={() => {
                            setMaritalOpen(!maritalOpen);
                            setNationalityOpen(false);
                            setResidenceOpen(false);
                            setRelocationOpen(false);
                        }}
                        setValue={setMaritalValue}
                        items={dropdownData_S2.marital.items}
                    />
                </View>
                <Space height={15} />
                <Button title={"Next"} style={styles.button} onPress={() => navigation.navigate("ProfileForm_4")} />
            </ScrollView>
        </View>
    );
};

export default ProfileForm_3;

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
        borderRadius: wp(5),
        zIndex: -20,

    },
});
