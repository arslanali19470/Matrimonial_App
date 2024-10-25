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
        alignItems: 'flex-end',
        paddingRight: 8,
        borderRadius: 50,
        alignSelf: "center"
    },
    BtnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    BtnRoundIcon: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginLeft: 85,
    },
    BtnDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },


})