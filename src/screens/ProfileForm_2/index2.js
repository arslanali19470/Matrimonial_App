// import React, { useState, useCallback } from 'react';
// import {
//     StyleSheet,
//     View,
//     FlatList,
//     KeyboardAvoidingView,
//     Platform,
//     ScrollView,
//     SafeAreaView,
// } from 'react-native';
// import { BackIcon } from '../../assets';
// import TopHeader from '../../components/TopHeader';
// import { BLACK, GRAYTEXT, ProfileNameColor, WHITE } from '../../utils/colors';
// import { useNavigation } from '@react-navigation/native';
// import { fp, hp, wp } from '../../utils/responsive';
// import Heading from '../../components/customComponents/Heading';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Button from '../../components/customComponents/Button';
// import { getDropdownData, dropdownData } from '../../utils/data';

// const ProfileForm = () => {
//     const navigation = useNavigation();

//     const initialDropdownState = Object.keys(dropdownData)
//         .filter((key) => key !== "defaults")
//         .reduce((state, key) => {
//             const dropdown = getDropdownData(key);
//             state[key] = { open: dropdown.initialOpen, value: dropdown.initialValue, items: dropdown.items };
//             return state;
//         }, {});

//     const [dropdownState, setDropdownState] = useState(initialDropdownState);

//     const toggleDropdown = useCallback((key, open) => {
//         setDropdownState((prevState) => {
//             const updatedState = { ...prevState };
//             Object.keys(updatedState).forEach((dropdownKey) => {
//                 if (dropdownKey !== key) {
//                     updatedState[dropdownKey].open = false;
//                 }
//             });
//             updatedState[key].open = open;
//             return updatedState;
//         });
//     }, []);

//     const renderDropdown = ({ key, label }) => {
//         const { open, value, items } = dropdownState[key];

//         return (
//             <View style={{ marginBottom: hp(2) }}>
//                 <Heading
//                     text={label}
//                     fontFamily="RobotoCondensed-SemiBold"
//                     fontSize={2.4}
//                     color={ProfileNameColor}
//                 />
//                 <DropDownPicker
//                     open={open}
//                     value={value}
//                     items={items}
//                     setOpen={(open) => toggleDropdown(key, open)}
//                     setValue={(callback) =>
//                         setDropdownState((prevState) => ({
//                             ...prevState,
//                             [key]: { ...prevState[key], value: callback(prevState[key]?.value) },
//                         }))
//                     }
//                     setItems={(callback) =>
//                         setDropdownState((prevState) => ({
//                             ...prevState,
//                             [key]: { ...prevState[key], items: callback(prevState[key]?.items) },
//                         }))
//                     }
//                     placeholder="Select"
//                     style={styles.dropdown}
//                     dropDownContainerStyle={styles.dropdownContainer}
//                     textStyle={styles.dropdownText}
//                     zIndex={1000 - Object.keys(dropdownState).indexOf(key)}
//                     dropDownDirection="DOWN"
//                 />
//             </View>
//         );
//     };

//     const cards = [
//         {
//             id: "card1",
//             dropdowns: [
//                 { key: "education", label: "Education Level" },
//                 { key: "institute", label: "Institute (optional)" },
//             ],
//         },
//         {
//             id: "card2",
//             dropdowns: [
//                 { key: "employment", label: "Employment Status" },
//                 { key: "profession", label: "Select Profession" },
//             ],
//         },
//         {
//             id: "card3",
//             dropdowns: [{ key: "religion", label: "Religion" }],
//         },
//     ];

//     const renderCard = ({ item }) => {
//         const isLastCardWithOpenDropdown =
//             item.dropdowns.some((dropdown) => dropdown.key === "religion" && dropdownState[dropdown.key]?.open);

//         return (
//             <View
//                 style={[
//                     styles.card,
//                     isLastCardWithOpenDropdown ? { marginBottom: hp(20) } : null,
//                 ]}
//             >
//                 {item.dropdowns.map((dropdown) => renderDropdown(dropdown))}
//             </View>
//         );
//     };


//     return (
//         <>
//             <TopHeader
//                 leftIcon={BackIcon}
//                 title="Edit Profile"
//                 statusColor="dark"
//                 background={WHITE}
//                 onPressLeft={() => navigation.goBack()}
//                 border={true}
//                 coloredBorder={true}
//                 coloredBorderWidth={35}
//                 step={true}
//                 step_V1="1"
//                 step_V2="3"
//             />
//             <SafeAreaView style={{ flex: 1 }}>
//                 <KeyboardAvoidingView
//                     style={{ flex: 1 }}
//                     behavior={Platform.OS === "ios" ? "padding" : undefined}
//                 >
//                     <ScrollView
//                         contentContainerStyle={styles.scrollContainer}
//                         keyboardShouldPersistTaps="handled"
//                     >
//                         <FlatList
//                             data={cards}
//                             keyExtractor={(item) => item.id}
//                             renderItem={renderCard}
//                             contentContainerStyle={styles.container}
//                             showsVerticalScrollIndicator={false}
//                         />
//                         <Button title="Next" style={{ marginTop: hp(3) }} />
//                     </ScrollView>
//                 </KeyboardAvoidingView>
//             </SafeAreaView>
//         </>
//     );
// };


// export default ProfileForm;

// const styles = StyleSheet.create({
//     scrollContainer: {
//         flexGrow: 1,
//         paddingBottom: hp(4),
//     },
//     container: {
//         flexGrow: 1,
//         paddingHorizontal: wp(4),
//     },
//     card: {
//         backgroundColor: WHITE,
//         width: wp(93),
//         borderRadius: wp(2),
//         marginTop: hp(2),
//         paddingHorizontal: wp(3),
//         paddingVertical: wp(5),
//         shadowColor: BLACK,
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.22,
//         shadowRadius: 2.22,
//         elevation: 3,
//     },
//     dropdown: {
//         marginTop: hp(1),
//         borderColor: GRAYTEXT,
//         borderWidth: 1.5,
//         borderRadius: wp(2),
//     },
//     dropdownContainer: {
//         borderColor: GRAYTEXT,
//     },
//     dropdownText: {
//         fontSize: fp(2.2),
//         color: BLACK,
//     },
// });
