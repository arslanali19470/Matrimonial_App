import { StyleSheet } from 'react-native';
import { GRAYTEXT, MessageBG, WHITE } from '../../utils/colors';
import { hp, wp } from '../../utils/responsive';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MessageBG
    },
    leftBubble: {
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    rightBubble: {
        backgroundColor: '#007AFF',
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
        backgroundColor: '#f8f8f8',
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
        backgroundColor: WHITE
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
});
