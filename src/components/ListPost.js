import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ImageBackground, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { generalStyles } from '../constants/StyleConstants';
import { getPostDetail } from '../redux/middlewares/postDetail/postDetailMiddleware';
import { deletePost as deletePostMiddleware, markAsFavorite as markAsFavoriteMiddleware } from '../redux/middlewares/posts/postsMiddleware';
import { dpToPixel } from '../utils/CalculateSize';
import { getImage } from '../utils/GetImage';

export default function ListPost({ posts, onRefresh }) {

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const { refreshing } = useSelector(state => state);

    const deletePost = (post) => {
        dispatch(deletePostMiddleware(post.id))
    }

    const markAsFavorite = (post) => {
        dispatch(markAsFavoriteMiddleware(post.id))
    }

    const getIconByPost = (post) => {
        if (!post.isFavorite) {
            return 'heart-outline'
        }
        else {
            return 'heart-sharp'
        }
    }

    const getColorByPost = (post) => {
        if (!post.isFavorite) {
            return '#fff'
        }
        else {
            return '#FA6666'
        }
    }

    const getPostById = async (item) => {
        const { id, userId, isFavorite } = item;
        dispatch(getPostDetail(id, userId, navigation, isFavorite));
    }

    return (
        <View style={styles.container}>
            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                data={posts}
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.item} >
                        <TouchableOpacity onPress={() => { getPostById(item) }} style={styles.touch} >
                            <View style={styles.image}>
                                <ImageBackground
                                    imageStyle={styles.image}
                                    source={{
                                        uri: getImage(item),
                                    }} >
                                    <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(207, 185, 151, 0.3)' }}>
                                        <Icon onPress={() => {
                                            markAsFavorite(item)
                                        }} style={{ position: 'absolute', right: dpToPixel(8), top: dpToPixel(8) }} name={getIconByPost(item)} size={40} color={getColorByPost(item)} />
                                    </View>
                                </ImageBackground>
                            </View>

                            <Text style={[styles.textDefaultStyle, styles.textTitleStyle]}>{item.title}</Text>
                            <Text style={[styles.textDefaultStyle, styles.subtitleTextStyle]}>{item.body}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { deletePost(item) }} style={styles.buttonContainer}>
                            <Text style={styles.button}>Eliminar</Text>
                        </TouchableOpacity>

                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ...generalStyles,
})

