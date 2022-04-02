import { Dispatch } from 'react';
import { Alert } from 'react-native';
import ServiceInteractor from '../../../services/ServiceInteractor';
import { setPostDetailCreator } from '../../actions/postDetail/PostDetailActionsCreators';
import { setLoading } from '../loading/loadingMiddleware';

export function getPostDetail(postId: Number, userId: Number, navigation: any, isFavorite: boolean) {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setLoading(true));
    try {
      const postData = await ServiceInteractor.getPost(postId);
      const userData = await ServiceInteractor.getUserDataByUserId(userId);
      const comments = await ServiceInteractor.getCommentsByPostId(postId);
      const post = { postData, userData, comments };
      dispatch(setPostDetailCreator(post));
      navigation.navigate('Detail', { isFavorite });
    } catch (error) {
      Alert.alert('Error', 'Error al obtener los posts');
    }
    dispatch(setLoading(false));
  };
}