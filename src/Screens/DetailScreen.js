import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dpToPixel } from '../utils/CalculateSize';
import { getImage } from '../utils/GetImage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { markAsFavorite as markAsFavoriteMiddleware } from '../redux/middlewares/posts/postsMiddleware';
import { textConstants } from '../constants/TextConstants';

export default function DetailScreen({ navigation, route }) {

    const dispatch = useDispatch();

    const { isFavorite } = route.params;

    const { postDetail, loading } = useSelector(state => state);

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
            {
                !loading ? <ScrollView>
                    <Image
                        style={styles.image}
                        source={{
                            uri: getImage(postData)
                        }}
                    />
                    <View style={styles.container}>
                        <View style={styles.postContainer}>
                            <Text style={styles.title}>{textConstants.detailScreen.postDetailTitleText}</Text>
                            <Text style={styles.subTitle}>{postData.title}</Text>
                            <Text style={styles.description}>{postData.body}</Text>
                        </View>
                        <View style={styles.postContainer}>
                            <Text style={styles.title}>{textConstants.detailScreen.userDetailTitleText}</Text>
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
                            <Text style={styles.title}>{textConstants.detailScreen.commentsTitleText}</Text>
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
                                < Text style={[styles.title, { marginBottom: 0, color: '#fff' }]}>{textConstants.detailScreen.addFavoriteButtonText}</Text>
                                <Ionicons name="heart-outline" size={dpToPixel(20)} color="#fff" />
                            </TouchableOpacity>
                        }
                    </View>
                </ScrollView >
                    :
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#FA6666" />
                    </View>
            }
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
    },
    loadingContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})