import { StyleSheet } from "react-native";
import { BLACK, GrayBG, GRAYTEXT, ProfileNameColor, PURPLE, WHITE } from "../../utils/colors";
import { hp, wp } from "../../utils/responsive";

export const styles = StyleSheet.create({
    wrapper: {
        padding: wp(3),
    },
    profileStrengthContainer: {
        backgroundColor: WHITE,
        paddingHorizontal: wp(3),
        paddingVertical: hp(2.2),
        borderRadius: wp(3),
        shadowColor: BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    profileStrengthRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(70),
        gap: 10,
    },
    circularProgress: {
        marginTop: -10,
    },
    addImagesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoButton: {
        height: hp(2.7),
        width: hp(2.7),
        borderWidth: 1,
        borderColor: BLACK,
        alignItems: 'center',
        borderRadius: hp(1.5),
        justifyContent: 'center',
    },
    profileInfoText: {
        color: ProfileNameColor,
        marginTop: 5,
    },
    BoldText: {
        fontWeight: 'bold',
    },
    profileImageWrapper: {
        position: 'relative',
    },
    mainLabel: {
        backgroundColor: WHITE,
        position: 'absolute',
        bottom: hp(3),
        left: wp(-4),
        color: PURPLE,
        paddingRight: wp(6),
        paddingLeft: wp(8),
        paddingVertical: hp(0.5),
        fontSize: 14,
        borderRadius: 20,
        fontWeight: '700',
    },
    cameraRow: {
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 10,
    },
    cameraContainer: {
        backgroundColor: WHITE,
        borderRadius: wp(2),
        padding: wp(4),
        shadowColor: BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
    },
    cameraBorder: {
        borderWidth: 2,
        borderColor: GRAYTEXT,
        borderStyle: 'dotted',
        padding: 15,
    },
    cameraInner: {
        backgroundColor: GrayBG,
        height: hp(5.5),
        width: hp(5.5),
        borderRadius: hp(3),
        alignItems: 'center',
        justifyContent: 'center',
    },
});