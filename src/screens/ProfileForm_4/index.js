import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { BLACK, WHITE, PRIMARY_COLOR } from '../../utils/colors';
import { dropdownData_S3 } from '../../utils/data';
import { hp, wp } from '../../utils/responsive';

import Space from '../../components/customComponents/Space';
import DropdownSection from '../../components/DropdownSection';
import TopHeader from '../../components/TopHeader';
import { BackIcon } from '../../assets';
import Button from '../../components/customComponents/Button';

const ProfileForm = ({ navigation }) => {
    // const navigation = useNavigation();

    // States for dropdowns
    const [houseSizeOpen, setHouseSizeOpen] = useState(false);
    const [houseSizeValue, setHouseSizeValue] = useState(null);

    const [incomeOpen, setIncomeOpen] = useState(false);
    const [incomeValue, setIncomeValue] = useState(null);

    const [casteOpen, setCasteOpen] = useState(false);
    const [casteValue, setCasteValue] = useState(null);

    const [sectOpen, setSectOpen] = useState(false);
    const [sectValue, setSectValue] = useState(null);

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
                coloredBorderWidth={90}
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
                    {/* Size of House Dropdown */}
                    <DropdownSection
                        title="Size of house"
                        open={houseSizeOpen}
                        value={houseSizeValue}
                        setOpen={() => {
                            setHouseSizeOpen(!houseSizeOpen);
                            setIncomeOpen(false);
                            setCasteOpen(false);
                            setSectOpen(false);
                        }}
                        setValue={setHouseSizeValue}
                        items={dropdownData_S3.houseSize.items}
                    />
                    <Space height={3} />

                    {/* Monthly Household Income Dropdown */}
                    <DropdownSection
                        title="Monthly household income"
                        open={incomeOpen}
                        value={incomeValue}
                        setOpen={() => {
                            setIncomeOpen(!incomeOpen);
                            setHouseSizeOpen(false);
                            setCasteOpen(false);
                            setSectOpen(false);
                        }}
                        setValue={setIncomeValue}
                        items={dropdownData_S3.income.items}
                    />
                </View>

                <View style={[styles.card, { zIndex: -10 }]}>
                    {/* Caste Dropdown */}
                    <DropdownSection
                        title="Caste"
                        open={casteOpen}
                        value={casteValue}
                        setOpen={() => {
                            setCasteOpen(!casteOpen);
                            setHouseSizeOpen(false);
                            setIncomeOpen(false);
                            setSectOpen(false);
                        }}
                        setValue={setCasteValue}
                        items={dropdownData_S3.caste.items}
                    />
                    <Space height={3} />

                    {/* Sect Dropdown */}
                    <DropdownSection
                        title="Sect"
                        open={sectOpen}
                        value={sectValue}
                        setOpen={() => {
                            setSectOpen(!sectOpen);
                            setHouseSizeOpen(false);
                            setIncomeOpen(false);
                            setCasteOpen(false);
                        }}
                        setValue={setSectValue}
                        items={dropdownData_S3.sect.items}
                    />
                </View>

                <Space height={18} />
                <Button title={"Confirm Step 1"} style={styles.button} onPress={() => navigation.navigate("LookingFor_1")} />
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
    button: {
        alignSelf: 'center',
        backgroundColor: PRIMARY_COLOR,
    },
});
