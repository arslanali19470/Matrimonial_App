import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import TopHeader from '../../components/TopHeader'
import { BackIcon } from '../../assets'
import { BLUE, Green, MessageBG, Pink, ProfileNameColor, PURPLE, WHITE, Yellow } from '../../utils/colors'
import Heading from '../../components/customComponents/Heading'
import Space from '../../components/customComponents/Space'
import { fp, hp, wp } from '../../utils/responsive'
import ThemeColorList from '../../components/ThemeColorList'
import Button from '../../components/customComponents/Button'

const ThemeScreen = ({ navigation }) => {
    // State to track the selected theme color and name
    const [selectedTheme, setSelectedTheme] = useState({
        color: Green, // Default color
        name: "Green", // Default theme name
    });

    // Handler to change the theme
    const handleThemeChange = (themeName, themeColor) => {
        setSelectedTheme({ name: themeName, color: themeColor });
    };

    return (
        <View style={[styles.container, { backgroundColor: MessageBG }]}>
            <TopHeader
                leftIcon={BackIcon}
                title="App Theme"
                onPressLeft={() => navigation.goBack()}
                border={true}
            />
            <View style={{ paddingVertical: 5, paddingHorizontal: 15 }}>
                <Heading
                    text={"Select color:"}
                    fontFamily={"RobotoCondensed-SemiBold"}
                    fontSize={2.8}
                    color={ProfileNameColor}
                />
                <Space height={1} />
                <Heading
                    text={"This color change will only apply to buttons and icons etc"}
                    fontFamily={"Lato-Regular"}
                    fontSize={1.7}
                    color={ProfileNameColor}
                />

                <View style={styles.ColorBox}>
                    <ThemeColorList
                        color={PURPLE}
                        ThemeName="Purple"
                        isDefault={selectedTheme.name === "Purple"}
                        isActive={selectedTheme.name === "Purple"}
                        onPress={() => handleThemeChange("Purple", PURPLE)}
                    />
                    <ThemeColorList
                        color={BLUE}
                        ThemeName="Blue"
                        isDefault={selectedTheme.name === "Blue"}
                        isActive={selectedTheme.name === "Blue"}
                        onPress={() => handleThemeChange("Blue", BLUE)}
                    />
                    <ThemeColorList
                        color={Green}
                        ThemeName="Green"
                        isDefault={selectedTheme.name === "Green"}
                        isActive={selectedTheme.name === "Green"}
                        onPress={() => handleThemeChange("Green", Green)}
                    />
                    <ThemeColorList
                        color={Yellow}
                        ThemeName="Yellow"
                        isDefault={selectedTheme.name === "Yellow"}
                        isActive={selectedTheme.name === "Yellow"}
                        onPress={() => handleThemeChange("Yellow", Yellow)}
                    />
                    <ThemeColorList
                        color={Pink}
                        ThemeName="Pink"
                        isDefault={selectedTheme.name === "Pink"}
                        isActive={selectedTheme.name === "Pink"}
                        underLine={false}
                        onPress={() => handleThemeChange("Pink", Pink)}
                    />
                </View>
                <Button
                    title={"Save"}
                    height={6.5}
                    fontWeight={400}
                    fontSize={fp(2.3)}
                    style={styles.bottomSpacing}
                />
            </View>
        </View>
    );
};

export default ThemeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ColorBox: {
        backgroundColor: WHITE,
        height: hp(51),
        marginTop: hp(3),
        borderRadius: hp(2),
        padding: wp(5),
    },
    bottomSpacing: {
        marginTop: hp(20),
    },
});
