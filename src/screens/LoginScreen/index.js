import React from 'react';
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Linking,
} from 'react-native';
import { BLACK, GRAYTEXT, ProfileNameColor, PURPLE, TRANSPARENT } from '../../utils/colors';
import { LoginBg, Pakistan } from '../../assets';
import { fp, hp, wp } from '../../utils/responsive';
import Heading from '../../components/customComponents/Heading';
import Picture from '../../components/customComponents/Picture';
import IconButton from '../../components/IconButton';
import Space from '../../components/customComponents/Space';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
                <StatusBar translucent backgroundColor={TRANSPARENT} barStyle="light-content" hidden={false} />
                <ImageBackground source={LoginBg} style={styles.background} resizeMode="cover">
                    <View style={styles.innerContainer}>
                        <Heading
                            text="Enter Phone Number"
                            fontFamily="RobotoCondensed-SemiBold"
                            fontSize={2.8}
                            color={ProfileNameColor}
                        />
                        <View style={styles.inputContainer}>
                            <View style={styles.row}>
                                <Picture localSource={Pakistan} height={hp(2.6)} width={wp(7)} />
                                <Heading text="+92" fontSize={2.2} />
                                <View style={styles.divider} />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter Phone Number"
                                    keyboardType="phone-pad"
                                />
                            </View>
                        </View>
                        <Text style={styles.text}>
                            By continuing you accept the{' '}
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://example.com/terms')}
                            >
                                Terms & Conditions
                            </Text>{' '}
                            and the{' '}
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://example.com/privacy')}
                            >
                                Privacy Policy
                            </Text>
                        </Text>
                        <Space height={3} />
                        <IconButton onPress={() => navigation.navigate("Home")} />
                    </View>
                </ImageBackground>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    background: {
        width: wp(100),
        height: hp(100),
    },
    innerContainer: {
        marginTop: hp(70),
        paddingHorizontal: wp(4),
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: GRAYTEXT,
        borderRadius: wp(3),
        marginTop: hp(2),
        paddingHorizontal: wp(2),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    divider: {
        backgroundColor: BLACK,
        height: hp(5),
        width: wp(0.3),
    },
    textInput: {
        flex: 1,
        fontSize: fp(2.2),
    },
    text: {
        fontSize: 12,
        color: BLACK,
        lineHeight: 20,
        marginTop: hp(2),
        width: wp(90),
    },
    link: {
        color: PURPLE,
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
