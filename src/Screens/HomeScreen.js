import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import ListPost from '../components/ListPost';
import { textConstants } from '../constants/TextConstants';
import { getPosts } from '../redux/middlewares/posts/postsMiddleware';
import { dpToPixel } from '../utils/CalculateSize';

function HomeScreen() {

    const dispatch = useDispatch();

    const { posts, refreshing, loading } = useSelector(state => state);

    const onRefresh = React.useCallback(() => {
        dispatch(getPosts());
    }, []);


    const getPostsOrderByFavorite = () => {
        const orderedPosts = [...posts]
        return orderedPosts.sort(function (x, y) {
            return (x === y) ? 0 : x.isFavorite ? -1 : 1;
        });
    }

    const RenderHome = () => {
        return posts.length >= 1 && !refreshing ?
            <ListPost
                onRefresh={onRefresh}
                posts={getPostsOrderByFavorite()}
            />
            :
            <View style={styles.container}>
                <MaterialCommunityIcons name="update" size={dpToPixel(100)} color="#000" />
                <Text style={{ width: '70%', textAlign: 'center', margin: 8 }}>{textConstants.homeScreen.noPostsText}</Text>
                <Button title={textConstants.homeScreen.noPostsButtonText} onPress={onRefresh} />
            </View>
    }

    return (
        <View>
            {
                !loading ?
                    <RenderHome />
                    :
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="#FA6666" />
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
    }
})

export default HomeScreen;