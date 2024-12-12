import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackIcon, CameraIcon, ProfileMian, WhiteCross } from '../../assets'
import { BLACK, GrayBG, GRAYTEXT, ProfileNameColor, PURPLE, WHITE } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import TopHeader from '../../components/TopHeader'
import { hp, wp } from '../../utils/responsive'
import Heading from '../../components/customComponents/Heading'
import Space from '../../components/customComponents/Space'
import Picture from '../../components/customComponents/Picture'
import Button from '../../components/customComponents/Button'

const AddProfileIMG = () => {
    const navigation = useNavigation();
    const cameraNumber = [1, 2, 3];
    return (
        <View>
            <TopHeader
                leftIcon={BackIcon}
                title="Add Images"
                statusColor="dark"
                background={WHITE}
                onPressLeft={() => navigation.goBack()}
                border={true}
                circularI={true}
            />
            <View style={{ alignSelf: "center", width: wp(93) }}>
                <Heading
                    text="Add upto 4 images"
                    fontFamily="RobotoCondensed-SemiBold"
                    fontSize={2.8}
                    color={ProfileNameColor}
                />
                <Heading
                    text="You can add upto 4 images but 1 is madatory"
                    fontFamily="Lato-Regular"
                    fontSize={1.6}
                    color={ProfileNameColor}
                    marginTop={1}
                />

                <Space height={3} />
                <TouchableOpacity style={[styles.cameraContainer, { height: hp(29) }]}>
                    <View style={[styles.cameraBorder, { height: hp(25) }]}>
                        <View style={styles.cameraInner}>
                            <Picture localSource={CameraIcon} height={hp(3)} width={wp(6.3)} />

                        </View>
                        <Heading
                            text="Add a picture"
                            fontFamily="Lato-Regular"
                            fontSize={1.6}
                            color={ProfileNameColor}
                            marginTop={1}
                        />
                    </View>
                </TouchableOpacity>
                {/*========================== Show Image ============== */}
                {false && <View>
                    <View style={styles.profileImageWrapper}>
                        <Picture localSource={ProfileMian} height={hp(30)} width={wp(94)} roundCorner={wp(3)} />
                        <Text style={styles.mainLabel}>Main</Text>
                    </View>
                    <TouchableOpacity style={styles.crossButton}>
                        <Picture
                            localSource={WhiteCross}
                            height={hp(2)}
                            width={wp(4)}
                        />
                    </TouchableOpacity>
                </View>}
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
            </View>
            <Space height={22} />
            <Button title={"Next"} />

        </View>
    )
}

export default AddProfileIMG

const styles = StyleSheet.create({
    profileImageWrapper: {
        position: 'relative',
        overflow: "hidden"
    },
    mainLabel: {
        backgroundColor: WHITE,
        position: 'absolute',
        bottom: hp(3),
        left: wp(-4),
        color: PURPLE,
        paddingRight: wp(6),
        paddingLeft: wp(8),
        paddingVertical: hp(0.5),
        fontSize: 14,
        borderRadius: 20,
        fontWeight: '700',
    },
    crossButton: {
        backgroundColor: PURPLE,
        width: hp(5),
        height: hp(5),
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        position: "absolute",
        top: hp(-1),
        right: wp(-2),

    },

    cameraRow: {
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 10,
    },
    cameraContainer: {
        backgroundColor: WHITE,
        borderRadius: wp(2),
        padding: wp(4),
        shadowColor: BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
    },
    cameraBorder: {
        borderWidth: 2,
        borderColor: GRAYTEXT,
        borderStyle: 'dotted',
        padding: 15,
        borderRadius: 10,
        // alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    cameraInner: {
        backgroundColor: GrayBG,
        height: hp(5.5),
        width: hp(5.5),
        borderRadius: hp(3),
        alignItems: 'center',
        justifyContent: 'center',
    },
})