import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import DetailScreen from '../Screens/DetailScreen';
import BottomTabsNavigator from './BottomTabsNavigator';
import { deleteAllPosts } from '../redux/middlewares/posts/postsMiddleware';
import { useDispatch } from 'react-redux';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const dispatch = useDispatch();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={BottomTabsNavigator}
                    options={{
                        title: "Posts", headerRight: () => {
                            return (
                                <Octicons name="trash" size={24} color="black" onPress={() => { dispatch(deleteAllPosts()) }} />
                            )
                        }
                    }} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
