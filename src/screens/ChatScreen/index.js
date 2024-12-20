import React, { useState, useCallback, useEffect } from 'react';
import { View, StatusBar, TouchableOpacity, Text, TextInput } from 'react-native';
import { GiftedChat, Bubble, InputToolbar, Send } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Person1, BackIcon, emoji, send, emojiIcon, sendIcon, micIcon } from '../../assets';
import { hp, wp } from '../../utils/responsive';
import Picture from '../../components/customComponents/Picture';
import Heading from '../../components/customComponents/Heading';
import styles from './styles';
import { BLUE, TRANSPARENT } from '../../utils/colors';

const ChatScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'It might be morning sickness. Most pregnant women may feel some kind of nausea...',
                // createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Helper Bot',
                    avatar: Person1,
                },
            },
            {
                _id: 2,
                text: 'I have been feeling very nauseous. What can I do?',
                // createdAt: new Date(),
                user: {
                    _id: 1,
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        const newMessages = messages.map((msg) => ({
            ...msg,
            createdAt: new Date(),
        }));
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    }, []);




    const renderBubble = (props) => {
        const { currentMessage } = props;
        const currentUserId = 1;

        return (
            <View>
                <Bubble
                    {...props}
                    wrapperStyle={{
                        left: styles.leftBubble,
                        right: styles.rightBubble,
                    }}
                    textStyle={{
                        left: styles.leftBubbleText,
                        right: styles.rightBubbleText,
                    }}
                />
                <View style={styles.footerContainer}>
                    {currentMessage.user._id === currentUserId && (
                        <Icon name="done-all" size={16} color={BLUE} style={styles.tickIcon} />
                    )}

                    <Text
                        style={[
                            styles.messageTime,
                            currentMessage.user._id !== 1 && { marginRight: wp(82) },
                        ]}
                    >
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}

                    </Text>
                </View>
            </View>
        );
    };



    const renderSend = (props) => (
        <Send {...props}>
            <View style={styles.sendButton}>
                <Icon name="send" size={24} color={BLUE} />
            </View>
        </Send>
    );


    const renderInputToolbar = (props) => {
        const handleSendMessage = () => {
            if (props.text.trim()) {
                props.onSend({ text: props.text.trim() }, true);
            }
        };

        return (
            <View style={styles.inputToolbarContainer}>
                <View style={styles.inputContainer}>
                    <Picture localSource={emojiIcon} height={hp(4)} width={wp(7)} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Message"
                        placeholderTextColor="#555"
                        multiline
                        onChangeText={(text) => props.onTextChanged(text)}
                        value={props.text}
                    />
                    <TouchableOpacity onPress={handleSendMessage}>
                        <Picture localSource={sendIcon} height={hp(4)} width={wp(7)} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.micButton}>
                    <Picture localSource={micIcon} height={hp(3.3)} width={wp(5)} />
                </TouchableOpacity>
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={TRANSPARENT} barStyle="dark-content" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Picture localSource={BackIcon} height={hp(2.5)} width={wp(2.7)} />
                </TouchableOpacity>
                <View style={styles.centerContainer}>
                    <Picture localSource={item.Profiler} height={hp(4.4)} width={wp(9)} style={styles.midImage} />
                    <Heading
                        text={item.name}
                        fontFamily="RobotoCondensed-SemiBold"
                        style={styles.title}
                        color="black"
                    />
                </View>
            </View>
            <View style={styles.divider} />
            <GiftedChat
                messages={messages}
                onSend={onSend}
                user={{ _id: 1 }}
                renderBubble={renderBubble}
                renderSend={renderSend}
                renderInputToolbar={renderInputToolbar}
            />
        </View>
    );
};

export default ChatScreen;
