import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dpToPixel } from '../utils/CalculateSize';
import { getImage } from '../utils/GetImage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { markAsFavorite as markAsFavoriteMiddleware } from '../redux/middlewares/posts/postsMiddleware';

export default function DetailScreen({ navigation, route }) {

    const dispatch = useDispatch();

    const { isFavorite } = route.params;

    const { postDetail } = useSelector(state => state);

    const { postData, userData, comments, } = postDetail;

    const getUserData = (key) => {
        switch (key) {
            case "company":
                return userData.company.name;
            case "address":
                return `${userData.address.street},  ${userData.address.city}`;
            default:
                return userData[key].toString()
        }
    }

    const markAsFavorite = () => {
        dispatch(markAsFavoriteMiddleware(postData.id))
        navigation.navigate('Favoritos');
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={{
                        uri: getImage(postData)
                    }}
                />
                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Detalles de la publicacion</Text>
                        <Text style={styles.subTitle}>{postData.title}</Text>
                        <Text style={styles.description}>{postData.body}</Text>
                    </View>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Detalles del Autor</Text>
                        <View>
                            {
                                Object.keys(userData).map((key, index) => {
                                    return (
                                        <View key={key + index} style={styles.dataContainer}>
                                            <Text numberOfLines={1} style={styles.subTitle}>{key}</Text>
                                            <Text numberOfLines={1} style={styles.description} >{getUserData(key)}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Comentarios</Text>
                        {
                            comments.map((comment, index) => {
                                return (
                                    <View key={index} style={[styles.commentContainer, { borderBottomWidth: index >= comments.length - 1 ? 0 : 1 }]}>
                                        <Text style={styles.subTitle}>{comment.name}</Text>
                                        <Text style={styles.description}>{comment.body}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    {!isFavorite &&
                        <TouchableOpacity
                            style={[styles.postContainer, {
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                backgroundColor: '#FA6666'
                            }]}
                            onPress={markAsFavorite}
                        >
                            < Text style={[styles.title, { marginBottom: 0, color: '#fff' }]}>Añadir a favoritos</Text>
                            <Ionicons name="heart-outline" size={dpToPixel(20)} color="#fff" />
                        </TouchableOpacity>
                    }
                </View>
            </ScrollView >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: dpToPixel(200),
    },
    postContainer: {
        margin: dpToPixel(16),
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: dpToPixel(10),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: dpToPixel(16),
    },
    title: {
        fontSize: dpToPixel(20),
        fontWeight: 'bold',
        marginBottom: dpToPixel(16),
    },
    subTitle: {
        fontSize: dpToPixel(16),
        fontWeight: '600',
        marginBottom: dpToPixel(8),
    },
    description: {
        marginBottom: dpToPixel(8),
    },
    dataContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    commentContainer: {
        width: '100%',
        borderBottomColor: '#ccc',
        marginBottom: dpToPixel(16),
    }
})