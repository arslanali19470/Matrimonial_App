import React, { useState, useRef } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { OnBoardData } from '../../utils/data';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Picture from '../../components/customComponents/Picture';
import { responsiveHeight, responsiveWidth } from '../../utils/constant';
import Heading from '../../components/customComponents/Heading';
import Space from '../../components/customComponents/Space';
import Button from '../../components/customComponents/Button';
import { MaterialIcons } from '../../utils/constant/index';
import { styles } from './styles';

const OnBoarding = () => {
    const [showHomePage, setshowHomePage] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    // Custom function to handle "Next" button click
    const goToNextSlide = () => {
        if (currentIndex < OnBoardData.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            sliderRef.current.goToSlide(nextIndex);
        }
        if (currentIndex == OnBoardData.length - 1) {
            setshowHomePage(true)
        }
    };

    if (!showHomePage) {
        return (
            <AppIntroSlider
                ref={sliderRef}
                data={OnBoardData}
                renderItem={({ item }) => (
                    <View style={styles.mainBackground}>
                        <StatusBar translucent backgroundColor="transparent" />
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
                                color={"white"}
                                style={styles.mainHeading}
                            />
                            <Heading
                                text={item.description}
                                fontSize={2.4}
                                textAlign="center"
                                color="#CCCCCC"
                                fontFamily="RobotoCondensed-Regular"
                                style={{ paddingHorizontal: 40, paddingVertical: 5, lineHeight: 24 }}
                            />
                            <Space height={6} />


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
                                        color={"white"}
                                        onPress={() => setshowHomePage(true)}
                                    />
                                </>

                            )}
                            {currentIndex == OnBoardData.length - 1 && (
                                <TouchableOpacity style={styles.ButtonMainstyle} onPress={() => setshowHomePage(true)}>
                                    <View style={styles.BtnDirection}>
                                        <Text style={styles.BtnText}>Get Started</Text>
                                        <View style={styles.BtnRoundIcon}>
                                            <View style={{ alignItems: 'center' }}>
                                                <MaterialIcons name="east" color="#490B3E" size={25} />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                )}
                onSlideChange={(index) => setCurrentIndex(index)}
                activeDotStyle={{
                    backgroundColor: "#490B3E",
                    width: 30,
                    marginTop: currentIndex === OnBoardData.length - 1
                        ? responsiveHeight(-26)
                        : responsiveHeight(-34),
                }}
                dotStyle={{
                    backgroundColor: "white",
                    width: 13,
                    marginTop: currentIndex === OnBoardData.length - 1
                        ? responsiveHeight(-26)
                        : responsiveHeight(-34),
                }}
                renderNextButton={() => null}
                renderDoneButton={() => null}
            />
        );
    }

    return (
        <View>
            <Text style={{ fontSize: 20, }} >Welcome To Home Page </Text>
        </View>
    );
};

export default OnBoarding;
