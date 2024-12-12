// import { StyleSheet, View } from "react-native";
// import React, { useState } from "react";
// import { BackIcon } from "../../assets";
// import TopHeader from "../../components/TopHeader";
// import { BLACK, GRAYTEXT, ProfileNameColor, WHITE } from "../../utils/colors";
// import { useNavigation } from "@react-navigation/native";
// import { fp, hp, wp } from "../../utils/responsive";
// import Heading from "../../components/customComponents/Heading";
// import DropDownPicker from "react-native-dropdown-picker";

// const ProfileForm_2 = () => {
//     const navigation = useNavigation();

//     // Centralized dropdown state
//     const [dropdownState, setDropdownState] = useState({
//         active: null, // Tracks which dropdown is open
//         values: {
//             education: null,
//             institute: null,
//         },
//     });

//     // Dropdown items
//     const dropdownItems = {
//         education: [
//             { label: "High School", value: "high_school" },
//             { label: "Bachelor's", value: "bachelor" },
//             { label: "Master's", value: "master" },
//             { label: "PhD", value: "phd" },
//         ],
//         institute: [
//             { label: "Harvard", value: "harvard" },
//             { label: "MIT", value: "mit" },
//             { label: "Stanford", value: "stanford" },
//             { label: "Oxford", value: "oxford" },
//         ],
//     };

//     // Handle dropdown open/close and value change
//     const handleDropdownChange = (key, type, value) => {
//         setDropdownState((prevState) => {
//             const updatedState = { ...prevState };

//             if (type === "open") {
//                 updatedState.active = value ? key : null; // Set active dropdown
//             } else if (type === "value") {
//                 updatedState.values[key] = value; // Update selected value
//             }

//             return updatedState;
//         });
//     };

//     return (
//         <>
//             {/* Top Header */}
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

//             {/* Main Content */}
//             <View style={styles.container}>
//                 <View style={styles.card}>
//                     {/* Education Dropdown */}
//                     <Heading
//                         text="Education Level"
//                         fontFamily="RobotoCondensed-SemiBold"
//                         fontSize={2.4}
//                         color={ProfileNameColor}
//                     />
//                     <DropDownPicker
//                         open={dropdownState.active === "education"}
//                         value={dropdownState.values.education}
//                         items={dropdownItems.education}
//                         setOpen={(value) =>
//                             handleDropdownChange("education", "open", value)
//                         }
//                         setValue={(value) =>
//                             handleDropdownChange("education", "value", value)
//                         }
//                         placeholder="Select your education level"
//                         style={styles.dropdown}
//                         dropDownContainerStyle={styles.dropdownContainer}
//                         textStyle={styles.dropdownText}
//                         zIndex={1000}
//                     />

//                     {/* Institute Dropdown */}
//                     <Heading
//                         text="Institute"
//                         fontFamily="RobotoCondensed-SemiBold"
//                         fontSize={2.4}
//                         color={ProfileNameColor}
//                         style={{ marginTop: hp(2) }}
//                     />
//                     <DropDownPicker
//                         open={dropdownState.active === "institute"}
//                         value={dropdownState.values.institute}
//                         items={dropdownItems.institute}
//                         setOpen={(value) =>
//                             handleDropdownChange("institute", "open", value)
//                         }
//                         setValue={(value) =>
//                             handleDropdownChange("institute", "value", value)
//                         }
//                         placeholder="Select your institute"
//                         style={styles.dropdown}
//                         dropDownContainerStyle={styles.dropdownContainer}
//                         textStyle={styles.dropdownText}
//                         zIndex={900}
//                     />
//                 </View>
//             </View>
//         </>
//     );
// };

// export default ProfileForm_2;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
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
//         marginTop: hp(2),
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
