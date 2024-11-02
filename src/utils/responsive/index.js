import { Dimensions, PixelRatio } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Convert width percentage to DP
const widthPercentageToDP = (widthPercent) => {
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

// Convert height percentage to DP
const heightPercentageToDP = (heightPercent) => {
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

// Calculate font size responsively
const responsiveFontSize = (fontPercent) => {
    // Use the smaller of width or height for a consistent, scaled font size
    const widthDimension = screenHeight > screenWidth ? screenWidth : screenHeight;
    const aspectRatioBasedHeight = (16 / 9) * widthDimension;

    // Calculates font size based on aspect ratio and pixel density
    const scaleFactor = Math.sqrt(
        Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
    );

    return PixelRatio.roundToNearestPixel((scaleFactor * fontPercent) / 100);
};

// Export with consistent naming convention
export {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    responsiveFontSize as fp,
};
