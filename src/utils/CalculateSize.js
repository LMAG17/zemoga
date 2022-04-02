import { Dimensions, PixelRatio } from 'react-native';

export function heightByScreen(percentage) {
    const { height } = Dimensions.get('window');
    return height * percentage / 100;
}

export function widthByScreen(percentage) {
    const { width } = Dimensions.get('window');
    return width * percentage / 100;
}

export function dpToPixel(dp) { return PixelRatio.roundToNearestPixel(dp); }