import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import TopHeader from '../../components/TopHeader';
import { GrayBG, GRAYTEXT, ProfileNameColor, PURPLE, TRANSPARENT, WHITE } from '../../utils/colors';
import { BackIcon, CameraIcon, ProfileMian } from '../../assets';
import Heading from '../../components/customComponents/Heading';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { hp, wp } from '../../utils/responsive';
import Space from '../../components/customComponents/Space';
import Picture from '../../components/customComponents/Picture';
import ProfileDetailList from '../../components/ProfileDetalList';
import { styles } from './styles';

const EditProfile = ({ navigation }) => {
    const [progress, setProgress] = useState(80);
    const cameraNumber = [1, 2, 3];
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <TopHeader
                leftIcon={BackIcon}
                title="Edit Profile"
                statusColor="dark"
                background={WHITE}
                onPressLeft={() => navigation.goBack()}
                border={true}
            />
            <View style={styles.wrapper}>
                <View style={styles.profileStrengthContainer}>
                    <Heading
                        text="Profile Strength"
                        fontFamily="RobotoCondensed-SemiBold"
                        fontSize={2.8}
                        color={ProfileNameColor}
                    />
                    <View style={styles.profileStrengthRow}>
                        <Heading
                            text="Your profile strength is 75%. Complete your profile to get a better chance of getting noticed by others."
                            fontFamily="Lato-Bold"
                            fontSize={1.4}
                            color={ProfileNameColor}
                            lineHeight={hp(2.1)}
                        />
                        <AnimatedCircularProgress
                            size={55}
                            width={5}
                            fill={progress}
                            tintColor={PURPLE}
                            backgroundColor={TRANSPARENT}
                            rotation={75}
                            lineCap="round"
                            style={styles.circularProgress}
                        >
                            {() => (
                                <Heading
                                    text={`${Math.round(progress)}%`}
                                    fontSize={2}
                                    color={PURPLE}
                                    fontFamily="RobotoCondensed-SemiBold"
                                />
                            )}
                        </AnimatedCircularProgress>
                    </View>
                </View>
                <Space height={3} />
                <View style={styles.addImagesRow}>
                    <Heading
                        text="Add Images"
                        fontFamily="RobotoCondensed-SemiBold"
                        fontSize={2.8}
                        color={ProfileNameColor}
                    />
                    <TouchableOpacity style={styles.infoButton}>
                        <Heading
                            text="i"
                            fontFamily="RobotoCondensed-Bold"
                            fontSize={1.9}
                            color={ProfileNameColor}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.profileInfoText}>
                    You can add up to <Text style={styles.BoldText}>4</Text> images, but{' '}
                    <Text style={styles.BoldText}>1 is mandatory</Text>.
                </Text>
                <Space height={3} />
                <View style={styles.profileImageWrapper}>
                    <Picture localSource={ProfileMian} height={hp(30)} width={wp(94)} roundCorner={wp(3)} />
                    <Text style={styles.mainLabel}>Main</Text>
                </View>
                <Space height={3} />
                <View style={styles.cameraRow}>
                    {cameraNumber.map((item, ind) => (
                        <TouchableOpacity key={ind} style={styles.cameraContainer}>
                            <View style={styles.cameraBorder}>
                                <View style={styles.cameraInner}>
                                    <Picture localSource={CameraIcon} height={hp(3)} width={wp(6.3)} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <Space height={3} />
                <Heading
                    text="Profile Details"
                    fontFamily="RobotoCondensed-SemiBold"
                    fontSize={2.8}
                    color={ProfileNameColor}
                />
                <Space height={3} />
                <ProfileDetailList title="Family" firstValue="5" secondValue="5" />
                <ProfileDetailList title="Looks" firstValue="5" secondValue="8" />
                <ProfileDetailList title="Religion" firstValue="5" secondValue="5" />
                <ProfileDetailList title="Education" firstValue="5" secondValue="6" />
                <ProfileDetailList title="Profession" firstValue="3" secondValue="4" />
                <ProfileDetailList title="Hobbies" firstValue="1" secondValue="5" />
            </View>
        </ScrollView>
    );
};

export default EditProfile;
