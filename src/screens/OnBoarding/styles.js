import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    mainBackground: {
        flex: 1,
    },
    descriptionBox: {
        position: 'absolute',
        width: responsiveWidth(100),
    },
    mainHeading: {
        paddingHorizontal: 20,
    },
    ButtonMainstyle: {
        backgroundColor: '#490B3E',
        height: responsiveHeight(7.5),
        width: responsiveWidth(90),
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8,
        borderRadius: 50,
        alignSelf: "center",
        position: "relative"
    },
    BtnText: {
        color: 'white',
        fontSize: responsiveFontSize(2.6),
    },
    BtnRoundIcon: {
        height: responsiveHeight(6),
        width: responsiveHeight(6),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: "absolute",
        top: responsiveHeight(.7),
        right: responsiveWidth(2),
    },

    BtnDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: "flex-start",
    },


})