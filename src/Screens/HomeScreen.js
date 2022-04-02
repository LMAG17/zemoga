import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ListPost from '../components/ListPost';
import { getPosts } from '../redux/middlewares/posts/postsMiddleware';

function HomeScreen() {

    const dispatch = useDispatch();

    const { posts } = useSelector(state => state);


    const onRefresh = React.useCallback(() => {
        dispatch(getPosts());
    }, []);

    const getPostsOrderByFavorite = () => {
        return posts.sort((a, b) => {
            return a.isFavorite - b.isFavorite;
        })
    }

    return (
        <View>
            {
                posts.length >= 1 && <ListPost
                    onRefresh={onRefresh}
                    posts={posts}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({})

export default HomeScreen;