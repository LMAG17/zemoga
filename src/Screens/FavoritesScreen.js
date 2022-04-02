import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import ListPost from '../components/ListPost';


function FavoritesScreen({ navigation }) {

    const { posts } = useSelector(state => state);

    const favoritePosts = posts.filter(post => post.isFavorite);

    return (
        <View>
            {favoritePosts.length >= 1 &&
                <ListPost posts={favoritePosts} />
            }
        </View>
    )
}

const styles = StyleSheet.create({

})



export default FavoritesScreen;