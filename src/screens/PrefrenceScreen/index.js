import { ScrollView, StyleSheet, View, } from 'react-native'
import React from 'react'
import TopHeader from '../../components/TopHeader'
import { BackIcon, } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import { BLACK, ProfileNameColor, WHITE } from '../../utils/colors'
import { hp, wp } from '../../utils/responsive'
import Space from '../../components/customComponents/Space'
import Heading from '../../components/customComponents/Heading'
import PrefrenceList from '../../components/PrefrenceList'
import Button from '../../components/customComponents/Button'

const PrefrenceScreen = () => {
    const navigation = useNavigation();


    return (
        <View style={{ flex: 1 }}>
            <TopHeader
                leftIcon={BackIcon}
                title="Preference"
                statusColor="dark"
                background={WHITE}
                onPressLeft={() => navigation.goBack()}
                border={true}
                coloredBorder={true}
                coloredBorderWidth={90}
                step={true}
                step_V1="2"
                step_V2="3"
            />
            <ScrollView
                style={styles.container}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
            >
                <Space height={3} />
                <Heading
                    text="Select preferences about your potential match?"
                    fontFamily="RobotoCondensed-SemiBold"
                    fontSize={2.8}
                    color={ProfileNameColor}
                />
                <Heading
                    text="Select in order of your top 5 preferences you want in your partner"
                    fontFamily="Lato-Regular"
                    fontSize={1.6}
                    color={ProfileNameColor}
                    marginTop={1}
                />
                <View style={styles.card}>

                    <PrefrenceList text="City of Residence" ListNum="1" />
                    <PrefrenceList text="Marital Status" ListNum="2" />
                    <PrefrenceList text="Age" ListNum="3" />
                    <PrefrenceList text="Cast" ListNum="4" />
                    <PrefrenceList text="Education" ListNum="5" />
                    <PrefrenceList text="Sect" isEqual={false} tick={false} />
                    <PrefrenceList text="Nationality" isEqual={false} tick={false} />
                    <PrefrenceList text="Height" isEqual={false} tick={false} />
                    <PrefrenceList text="Ethnicity" isEqual={false} tick={false} />
                    <PrefrenceList text="Employment" isEqual={false} tick={false} />
                    <PrefrenceList text="House Size" isEqual={false} border={false} tick={false} />
                </View>
                <Space height={12} />
                <Button title={"Next"} />
                <Space height={2} />
            </ScrollView>
        </View>

    )
}

export default PrefrenceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: hp(4),
        alignSelf: 'center',
    },
    card: {
        backgroundColor: WHITE,
        width: wp(93),
        borderRadius: wp(2),
        marginTop: hp(2),
        paddingHorizontal: wp(3),
        paddingVertical: wp(5),
        shadowColor: BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

})