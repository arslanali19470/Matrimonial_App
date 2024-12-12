// PartnerPreferencesScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { BLACK, WHITE, PRIMARY_COLOR } from '../../utils/colors';
import { LookingFor_DropDown_S2 } from '../../utils/data';
import { hp, wp } from '../../utils/responsive';

import Space from '../../components/customComponents/Space';
import DropdownSection from '../../components/DropdownSection';
import TopHeader from '../../components/TopHeader';
import { BackIcon } from '../../assets';
import Button from '../../components/customComponents/Button';

const LookingFor_2 = ({ navigation }) => {
    // const navigation = useNavigation();

    // States for dropdowns
    const [nationalityOpen, setNationalityOpen] = useState(false);
    const [nationalityValue, setNationalityValue] = useState(null);

    const [countryOpen, setCountryOpen] = useState(false);
    const [countryValue, setCountryValue] = useState(null);

    const [cityOpen, setCityOpen] = useState(false);
    const [cityValue, setCityValue] = useState(null);

    const [ethnicityOpen, setEthnicityOpen] = useState(false);
    const [ethnicityValue, setEthnicityValue] = useState(null);

    return (
        <View style={{ flex: 1, }}>
            <TopHeader
                leftIcon={BackIcon}
                title="Looking for"
                statusColor="dark"
                background={WHITE}
                onPressLeft={() => navigation.goBack()}
                border={true}
                coloredBorder={true}
                coloredBorderWidth={90}
                step={true}
                step_V1="2"
                step_V2="3"
            />
            <ScrollView
                style={styles.container}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.card}>
                    {/* Partner Nationality Dropdown */}
                    <DropdownSection
                        title="Partner Nationality"
                        open={nationalityOpen}
                        value={nationalityValue}
                        setOpen={() => {
                            setNationalityOpen(!nationalityOpen);
                            setCountryOpen(false);
                            setCityOpen(false);
                            setEthnicityOpen(false);
                        }}
                        setValue={setNationalityValue}
                        items={LookingFor_DropDown_S2.nationality.items}
                    />
                    <Space height={3} />

                    {/* Partner Country of Current Residence Dropdown */}
                    <DropdownSection
                        title="Partner Country of Current Residence"
                        open={countryOpen}
                        value={countryValue}
                        setOpen={() => {
                            setCountryOpen(!countryOpen);
                            setNationalityOpen(false);
                            setCityOpen(false);
                            setEthnicityOpen(false);
                        }}
                        setValue={setCountryValue}
                        items={LookingFor_DropDown_S2.country.items}
                    />
                </View>

                <View style={[styles.card, { zIndex: -10 }]}>
                    {/* Partner City of Current Residence Dropdown */}
                    <DropdownSection
                        title="Partner City of Current Residence"
                        open={cityOpen}
                        value={cityValue}
                        setOpen={() => {
                            setCityOpen(!cityOpen);
                            setNationalityOpen(false);
                            setCountryOpen(false);
                            setEthnicityOpen(false);
                        }}
                        setValue={setCityValue}
                        items={LookingFor_DropDown_S2.city.items}
                    />
                    <Space height={3} />

                    {/* Partner Ethnicity Dropdown */}
                    <DropdownSection
                        title="Partner Ethnicity"
                        open={ethnicityOpen}
                        value={ethnicityValue}
                        setOpen={() => {
                            setEthnicityOpen(!ethnicityOpen);
                            setNationalityOpen(false);
                            setCountryOpen(false);
                            setCityOpen(false);
                        }}
                        setValue={setEthnicityValue}
                        items={LookingFor_DropDown_S2.ethnicity.items}
                    />
                </View>

                <Space height={18} />
                <Button title={"Next"} style={styles.button} />
            </ScrollView>
        </View>
    );
};

export default LookingFor_2;

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
    },
});
