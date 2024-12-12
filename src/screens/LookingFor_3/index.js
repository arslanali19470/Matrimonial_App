// PartnerPreferencesScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BLACK, WHITE, PRIMARY_COLOR } from '../../utils/colors';
import { LookingFor_DropDown_S3 } from '../../utils/data';
import { hp, wp } from '../../utils/responsive';

import Space from '../../components/customComponents/Space';
import DropdownSection from '../../components/DropdownSection';
import TopHeader from '../../components/TopHeader';
import { BackIcon } from '../../assets';
import Button from '../../components/customComponents/Button';

const LookingFor_3 = () => {
    const navigation = useNavigation();

    // States for dropdowns
    const [casteOpen, setCasteOpen] = useState(false);
    const [casteValue, setCasteValue] = useState(null);

    const [subCasteOpen, setSubCasteOpen] = useState(false);
    const [subCasteValue, setSubCasteValue] = useState(null);

    const [religionOpen, setReligionOpen] = useState(false);
    const [religionValue, setReligionValue] = useState(null);

    const [sectOpen, setSectOpen] = useState(false);
    const [sectValue, setSectValue] = useState(null);

    const [subSectOpen, setSubSectOpen] = useState(false);
    const [subSectValue, setSubSectValue] = useState(null);

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
                    {/* Partner Caste Dropdown */}
                    <DropdownSection
                        title="Partner Caste"
                        open={casteOpen}
                        value={casteValue}
                        setOpen={() => {
                            setCasteOpen(!casteOpen);
                            setSubCasteOpen(false);
                            setReligionOpen(false);
                            setSectOpen(false);
                            setSubSectOpen(false);
                        }}
                        setValue={setCasteValue}
                        items={LookingFor_DropDown_S3.caste.items}
                    />
                    <Space height={3} />

                    {/* Partner Sub Caste Dropdown (Optional) */}
                    <DropdownSection
                        title="Partner Sub Caste (optional)"
                        open={subCasteOpen}
                        value={subCasteValue}
                        setOpen={() => {
                            setSubCasteOpen(!subCasteOpen);
                            setCasteOpen(false);
                            setReligionOpen(false);
                            setSectOpen(false);
                            setSubSectOpen(false);
                        }}
                        setValue={setSubCasteValue}
                        items={LookingFor_DropDown_S3.subCaste.items}
                    />
                </View>

                <View style={[styles.card, { zIndex: -10 }]}>
                    {/* Partner Religion Dropdown */}
                    <DropdownSection
                        title="Partner Religion"
                        open={religionOpen}
                        value={religionValue}
                        setOpen={() => {
                            setReligionOpen(!religionOpen);
                            setCasteOpen(false);
                            setSubCasteOpen(false);
                            setSectOpen(false);
                            setSubSectOpen(false);
                        }}
                        setValue={setReligionValue}
                        items={LookingFor_DropDown_S3.religion.items}
                    />
                    <Space height={3} />

                    {/* Partner Sect Dropdown */}
                    <DropdownSection
                        title="Partner Sect"
                        open={sectOpen}
                        value={sectValue}
                        setOpen={() => {
                            setSectOpen(!sectOpen);
                            setCasteOpen(false);
                            setSubCasteOpen(false);
                            setReligionOpen(false);
                            setSubSectOpen(false);
                        }}
                        setValue={setSectValue}
                        items={LookingFor_DropDown_S3.sect.items}
                    />
                    <Space height={3} />

                    {/* Partner Sub Sect Dropdown (Optional) */}
                    <DropdownSection
                        title="Partner Sub Sect (optional)"
                        open={subSectOpen}
                        value={subSectValue}
                        setOpen={() => {
                            setSubSectOpen(!subSectOpen);
                            setCasteOpen(false);
                            setSubCasteOpen(false);
                            setReligionOpen(false);
                            setSectOpen(false);
                        }}
                        setValue={setSubSectValue}
                        items={LookingFor_DropDown_S3.subSect.items}
                    />
                </View>

                <Space height={subSectOpen ? 17 : 6} />
                <Button title={"Confirm Step 2"} style={styles.button} />
                <Space height={2} />
            </ScrollView>
        </View>
    );
};

export default LookingFor_3;

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
