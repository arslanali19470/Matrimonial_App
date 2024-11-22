import React from 'react'
import { StatusBar, TouchableOpacity, View } from 'react-native';
import Picture from '../../components/customComponents/Picture';
import { responsiveHeight, responsiveWidth } from '../../utils/constant';
import Heading from '../../components/customComponents/Heading';
import Space from '../../components/customComponents/Space';
import Button from '../../components/customComponents/Button';
import { MaterialIcons } from '../../utils/constant';
import { styles } from './styles';
import { GRAYTEXT, PURPLE, TRANSPARENT, WHITE } from '../../utils/colors';
import { hp, wp } from '../../utils/responsive';
import IconButton from '../IconButton';

const OnBoardRenderItem = ({ item, currentIndex, OnBoardData, goToNextSlide, setshowHomePage }) => {
    return (
        <View style={styles.mainBackground}>
            {/* <StatusBar backgroundColor={TRANSPARENT}
            /> */}
            <StatusBar translucent backgroundColor={TRANSPARENT}
                barStyle={currentIndex == 1 ? 'dark-content' : 'light-content'} hidden={false} />
            {/* <StatusBar hidden={true} /> */}
            <Picture
                localSource={item.BackgroundImage}
                height={hp(100)}
                width={wp(100)}
            />
            <Picture
                localSource={item.DarkShad}
                height={hp(75)}
                width={wp(100)}
                position="absolute"
                bottom={0}
            />
            <View
                style={[
                    styles.descriptionBox,
                    {
                        top: currentIndex === OnBoardData.length - 1
                            ? hp(64)
                            : hp(60),
                    },
                ]}
            >
                <Heading
                    text={item.title}
                    fontFamily="RobotoCondensed-ExtraBold"
                    fontSize={5}
                    textAlign="center"
                    color={WHITE}
                    style={styles.mainHeading}
                />
                <Heading
                    text={item.description}
                    fontSize={2.4}
                    textAlign="center"
                    color={GRAYTEXT}
                    fontFamily="RobotoCondensed-Regular"
                    style={styles.descriptionHead}
                />
                <Space height={7} />


                {currentIndex < OnBoardData.length - 1 && (
                    <>
                        <Button
                            title="Next"
                            fontWeight={400}
                            onPress={goToNextSlide}
                        />
                        <Space height={2} />

                    </>

                )}

                {currentIndex == OnBoardData.length - 1 && (
                    // <TouchableOpacity style={styles.ButtonMainstyle} onPress={() => setshowHomePage(true)}>
                    //     <Heading text={"Get Started"} color={WHITE} />
                    //     <View style={styles.BtnRoundIcon}>
                    //         <View style={{ alignItems: 'center' }}>
                    //             <MaterialIcons name="east" color={PURPLE} size={25} />
                    //         </View>
                    //     </View>
                    // </TouchableOpacity>
                    <IconButton onPress={() => setshowHomePage(true)} />
                )}
            </View>
        </View>
    )
}

export default OnBoardRenderItem