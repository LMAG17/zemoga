import { dpToPixel, heightByScreen, widthByScreen } from "../utils/CalculateSize";
import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
    item: {
        flex: 1,
        margin: dpToPixel(8),
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: dpToPixel(8),
        width: widthByScreen(95),
    },
    itemTexts: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: widthByScreen(80),
        overflow: 'hidden',
        margin: dpToPixel(16),
    },
    textDefaultStyle: {
        fontSize: 16,
        color: '#333',
        overflow: 'hidden',
        margin: dpToPixel(8),
    },
    textTitleStyle: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
    subtitleTextStyle: {
        fontSize: 14,
        color: '#333',
    },
    image: {
        borderTopRightRadius: dpToPixel(8),
        borderTopLeftRadius: dpToPixel(8),
        width: '100%',
        height: heightByScreen(30),
    },
    touch: {
        borderTopRightRadius: dpToPixel(8),
        borderTopLeftRadius: dpToPixel(8),
        width: widthByScreen(95),
    },
    buttonContainer: {
        padding: dpToPixel(8),
        flexDirection: 'row',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: dpToPixel(8),
        borderBottomRightRadius: dpToPixel(8),
    },
    button: {
        padding: dpToPixel(8),
        width: '50%',
        height: '100%',
        textAlign: 'center'
    },
})