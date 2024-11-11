import { StyleSheet } from 'react-native';
import { BLUE, GRAYTEXT, MessageBG, WHITE } from '../../utils/colors';
import { hp, wp } from '../../utils/responsive';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MessageBG
    },
    leftBubble: {
        backgroundColor: WHITE,
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    rightBubble: {
        backgroundColor: BLUE,
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    leftBubbleText: {
        color: '#333',
    },
    rightBubbleText: {
        color: '#fff',
    },
    inputToolbar: {
        // backgroundColor: '#f8f8f8',
        backgroundColor: 'green',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    sendButton: {
        marginBottom: 5,
        marginRight: 10,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 5,
        marginTop: 2,
        gap: 10,
    },
    tickIcon: {
        marginLeft: 5,
    },
    messageTime: {
        fontSize: 10,
        color: '#999',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(5),
        paddingBottom: hp(2),
        // paddingTop: hp(2),
        // backgroundColor: WHITE
        // backgroundColor: "red"
    },
    centerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: wp(2),
    },
    midImage: {
        marginRight: wp(2),
    },
    title: {
        textAlign: 'center',
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: GRAYTEXT,
        marginBottom: hp(1.7),
    },
    inputToolbarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 6,
        alignItems: "center",
        // backgroundColor: "red",
        paddingTop: 20
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: BLUE,
        borderRadius: wp(30),
        flex: 1,
    },
    textInput: {
        width: wp(60),
        color: "#333",
    },
    micButton: {
        backgroundColor: BLUE,
        height: wp(13),
        width: wp(13),
        borderRadius: wp(20),
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },
    // ============
    // Add these to your styles.js
    audioBubbleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginVertical: 5,
    },
    audioDuration: {
        marginLeft: 10,
        color: 'grey',
    },
    progressBar: {
        height: 5,
        flex: 1,
        backgroundColor: '#d3d3d3',
        borderRadius: 5,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    progressFill: {
        height: '100%',
        backgroundColor: 'blue',
    },
    recordingText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 5,
    },
    recordButton: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#e0e0e0',
    },
    recordButtonContainer: {
        alignItems: 'center',
        padding: 10,
    },
});
