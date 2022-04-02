import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoritesScreen from '../Screens/FavoritesScreen';
import HomeScreen from '../Screens/HomeScreen';
import { dpToPixel, heightByScreen } from '../utils/CalculateSize';

const Tab = createBottomTabNavigator();


function CustomTabs({ navigation, state }) {
    const safeAreaInsets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { paddingBottom: safeAreaInsets.bottom }]}>
            <View style={styles.bottomTabsNavigatorContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate('Posts') }} style={styles.tabItem}>
                    <MaterialCommunityIcons name="post-outline" size={dpToPixel(24)} color={state.index == 0 ? "#FA6666" : "#000"} />
                    <Text>Publicaciones</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Favoritos') }} style={styles.tabItem}>
                    <FontAwesome5 name="star" size={dpToPixel(24)} color={state.index == 1 ? "#FA6666" : "#000"} />
                    <Text>Favoritos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function BottomTabsNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <CustomTabs {...props} />}>
            <Tab.Screen name="Posts" component={HomeScreen} />
            <Tab.Screen name="Favoritos" component={FavoritesScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        height: heightByScreen(12),
        width: '100%',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#000',
        borderTopRightRadius: dpToPixel(10),
        borderTopLeftRadius: dpToPixel(10),
    },
    bottomTabsNavigatorContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})
