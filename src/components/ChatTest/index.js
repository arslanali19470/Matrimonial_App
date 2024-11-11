import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat, Bubble, InputToolbar, Send } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Person1, } from '../../assets';
import { wp } from '../../utils/responsive';
import styles from './styles';

const ChatTest = ({ }) => {
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
                        <Icon name="done-all" size={16} color="#007AFF" style={styles.tickIcon} />
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
                <Icon name="send" size={24} color="#007AFF" />
            </View>
        </Send>
    );

    const renderInputToolbar = (props) => (
        <InputToolbar {...props} containerStyle={styles.inputToolbar} />
    );

    return (

        <View style={{ flex: 1 }}>
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

export default ChatTest;
