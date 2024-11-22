import React, { useState, useRef } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { OnBoardData } from '../../utils/data';
import { responsiveHeight } from '../../utils/constant';
import { PURPLE, WHITE } from '../../utils/colors';
import OnBoardRenderItem from '../../components/OnBoardRenderItem';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../LoginScreen';

const OnBoarding = () => {
    const navigation = useNavigation();
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
                    <OnBoardRenderItem item={item} currentIndex={currentIndex} OnBoardData={OnBoardData} goToNextSlide={goToNextSlide} setshowHomePage={setshowHomePage} />
                )}
                onSlideChange={(index) => setCurrentIndex(index)}
                activeDotStyle={{
                    backgroundColor: PURPLE,
                    width: 30,
                    height: responsiveHeight(1),
                    marginTop: currentIndex === OnBoardData.length - 1
                        ? responsiveHeight(-26)
                        : responsiveHeight(-34),
                }}
                dotStyle={{
                    backgroundColor: WHITE,
                    width: 13,
                    height: responsiveHeight(1),
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
        <LoginScreen />
    );
};

export default OnBoarding;
