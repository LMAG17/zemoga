import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import DetailScreen from '../Screens/DetailScreen';
import BottomTabsNavigator from './BottomTabsNavigator';
import { deleteAllPosts } from '../redux/middlewares/posts/postsMiddleware';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { textConstants } from '../constants/TextConstants';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

    const dispatch = useDispatch();

    const handleDeleteAllPosts = () => {
        Alert.alert(
            textConstants.alertDelete.title,
            textConstants.alertDelete.message,
            [
                { text: textConstants.alertDelete.cancel, style: 'cancel' },
                { text: textConstants.alertDelete.ok, onPress: () => dispatch(deleteAllPosts()) },
            ]);
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={BottomTabsNavigator}
                    options={{
                        title: textConstants.screenHeaders.posts,
                        headerRight: () => {
                            return (
                                <Octicons name="trash" size={24} color="black" onPress={handleDeleteAllPosts} />
                            )
                        }
                    }} />
                <Stack.Screen name="Detail" component={DetailScreen}
                    options={{
                        title: textConstants.screenHeaders.detail,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
