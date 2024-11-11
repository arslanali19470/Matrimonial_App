import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopHeader from '../../components/TopHeader';
import { BackIcon, } from '../../assets';

const ProfileScreen = ({ navigation }) => {
    return (
        <View >
            <TopHeader
                leftIcon={BackIcon}
                title="Profile"
                onPressLeft={() => navigation.goBack()}
            />
            <Text style={{ textAlign: "center" }}>1</Text>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({

});
