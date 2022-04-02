import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/middlewares/posts/postsMiddleware';

export default function SplashScreen({ setAppReady }) {

    const dispatch = useDispatch();

    const { posts } = useSelector(state => state);

    React.useEffect(() => {
        if (posts.length < 1) {
            dispatch(getPosts());
        }
        setAppReady(true);
    }, [])

    return (
        <View style={styles.splashContainer}>
            <Text>SplashScreen...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})