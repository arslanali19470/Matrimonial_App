import { StyleSheet } from "react-native";
import { GrayBG, MessageBG, PURPLE, TRANSPARENT, WHITE } from "../../utils/colors";
import { fp, hp, wp } from "../../utils/responsive";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MessageBG
    },
    percentText: {
        color: WHITE,
        textAlign: "center",
        fontSize: fp(1.4)
    },
    percentBox: {
        backgroundColor: PURPLE,
        width: wp(23),
        paddingVertical: 3,
        borderRadius: 20,
        position: "absolute",
        top: "50%",
        right: "-51%"
    },
    DetailBox: {
        backgroundColor: WHITE,
        alignSelf: "center",
        width: wp(95),
        borderRadius: 10,
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    CameraBox: {
        backgroundColor: "red",
        position: "absolute",
        right: "6%",
        top: "5%",
        padding: 7,
        borderRadius: 100,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    profilePhotoBox: {
        position: "relative",
        width: wp(45),
        alignSelf: "center"
    },
    AnimationCircleStyle: {
        alignSelf: "center",
    },

})