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

const OnBoardRenderItem = ({ item, currentIndex, OnBoardData, goToNextSlide, setshowHomePage }) => {
    return (
        <View style={styles.mainBackground}>
            <StatusBar translucent backgroundColor={TRANSPARENT}
                barStyle={currentIndex == 1 ? 'dark-content' : 'light-content'} />
            <Picture
                localSource={item.BackgroundImage}
                height={responsiveHeight(100)}
                width={responsiveWidth(100)}
            />
            <Picture
                localSource={item.DarkShad}
                height={responsiveHeight(75)}
                width={responsiveWidth(100)}
                position="absolute"
                bottom={0}
            />
            <View
                style={[
                    styles.descriptionBox,
                    {
                        top: currentIndex === OnBoardData.length - 1
                            ? responsiveHeight(64)
                            : responsiveHeight(60),
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
                    style={{ paddingHorizontal: responsiveWidth(10), paddingVertical: responsiveHeight(.5), lineHeight: 24 }}
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
                        <Heading
                            text="Skip"
                            weight={400}
                            fontSize={2.4}
                            textAlign="center"
                            color={WHITE}
                            onPress={() => setshowHomePage(true)}
                        />
                    </>

                )}

                {currentIndex == OnBoardData.length - 1 && (
                    <TouchableOpacity style={styles.ButtonMainstyle} onPress={() => setshowHomePage(true)}>
                        <Heading text={"Get Started"} color={WHITE} onPress={() => setshowHomePage(true)} />
                        <View style={styles.BtnRoundIcon}>
                            <View style={{ alignItems: 'center' }}>
                                <MaterialIcons name="east" color={PURPLE} size={25} />
                            </View>
                        </View>


                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default OnBoardRenderItem