import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import DetailScreen from '../Screens/DetailScreen';
import BottomTabsNavigator from './BottomTabsNavigator';
import { deleteAllPosts } from '../redux/middlewares/posts/postsMiddleware';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {

    const dispatch = useDispatch();

    const handleDeleteAllPosts = () => {
        Alert.alert(
            '¿Estas seguro de eliminar todas las publicaciones?',
            'Esta accion eliminara tambien las publicaciones marcadas como favoritas',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Eliminar', onPress: () => dispatch(deleteAllPosts()) },
            ]);
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={BottomTabsNavigator}
                    options={{
                        title: "Publicaciones", headerRight: () => {
                            return (
                                <Octicons name="trash" size={24} color="black" onPress={handleDeleteAllPosts} />
                            )
                        }
                    }} />
                <Stack.Screen name="Detail" component={DetailScreen}
                    options={{
                        title: "Detalle",
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
