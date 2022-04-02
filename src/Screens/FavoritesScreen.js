import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import ListPost from '../components/ListPost';
import { textConstants } from '../constants/TextConstants';
import { dpToPixel } from '../utils/CalculateSize';

function FavoritesScreen({ navigation }) {

    const { posts, refreshing } = useSelector(state => state);

    const favoritePosts = posts.filter(post => post.isFavorite);

    return (
        <View>
            {favoritePosts.length >= 1 && !refreshing ?
                <ListPost posts={favoritePosts} />
                :
                <View style={styles.container}>
                    <Ionicons name="heart-outline" size={dpToPixel(100)} color="#000" />
                    <Text style={{ width: '70%', textAlign: 'center', margin: 8 }}>{textConstants.favoriteScreen.noPostsText}</Text>
                    <Button title={textConstants.favoriteScreen.noPostsButtonText} onPress={() => navigation.navigate('Posts')} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})



export default FavoritesScreen;