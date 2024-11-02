import { StyleSheet } from 'react-native';
import { PURPLE, WHITE } from '../../utils/colors';
import { fp, hp, wp } from '../../utils/responsive';

export const styles = StyleSheet.create({
    mainBackground: {
        flex: 1,
    },
    descriptionBox: {
        position: 'absolute',
        width: wp(100),
    },
    mainHeading: {
        paddingHorizontal: 20,
    },
    ButtonMainstyle: {
        backgroundColor: PURPLE,
        height: hp(7.5),
        width: wp(90),
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8,
        borderRadius: 50,
        alignSelf: "center",
        position: "relative"
    },
    BtnText: {
        color: WHITE,
        fontSize: fp(2.6),
    },
    BtnRoundIcon: {
        height: hp(6),
        width: hp(6),
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: "absolute",
        top: hp(.7),
        right: wp(2),
    },

    BtnDirection: {
        flexDirection: 'row',
        alignItems: 'center',
    },


})