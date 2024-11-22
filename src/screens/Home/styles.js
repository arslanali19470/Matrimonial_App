import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { GrayBG, PURPLE, TRANSPARENT, WHITE } from '../../utils/colors';
import { hp, wp } from '../../utils/responsive';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: TRANSPARENT
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#d4d4d4",
        paddingVertical: 10,
        paddingHorizontal: 7,
        paddingTop: 35,
    },
    profile: { flexDirection: "row", gap: 10 },
    greeting: { justifyContent: "center" },
    icons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    background: {
        width: wp(100),
        height: hp(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSheetBackground: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: GrayBG,
    },
    bottomSheetContent: {
        backgroundColor: GrayBG,
        padding: 20,
    },
    bottomSheetIndicator: {
        backgroundColor: '#cccc',
        width: wp(15),
    },
    containerView: {
        width: wp(22),
        height: hp(30),
        backgroundColor: "rgba(0, 0, 0, .3)",
        opacity: 5,
        marginTop: -hp(48),
        borderRadius: 10,
        gap: 5,
        padding: 7,
        justifyContent: "center",
        paddingRight: 10,
        position: "relative",
    },
    toggleButton: {
        backgroundColor: "rgba(0, 0, 0, .3)",
        height: 35,
        width: 35,
        borderRadius: 40,
        alignSelf: "flex-end",
        position: "absolute",
        right: -20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    thumbnailImage: {
        height: hp(6),
        width: wp(12),
        alignSelf: "flex-end",
        borderRadius: 5,
        borderWidth: 2,
        overflow: "hidden",
        // opacity: 0.7
    },

})