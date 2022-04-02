import { Dispatch } from 'react';
import ServiceInteractor from '../../../services/ServiceInteractor';
import { setPostsCreator } from '../../actions/posts/PostsActionsCreators';
import { setRefreshing } from '../refreshing/refreshingMiddleware';
import { store } from '../../../redux/store';
import { setLoading } from '../loading/loadingMiddleware';
import { Alert } from 'react-native';
export function getPosts() {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setLoading(true));
    dispatch(setRefreshing(true));
    try {
      const posts = await ServiceInteractor.getPosts();
      dispatch(setPostsCreator(posts));
    } catch (error) {
      Alert.alert('Error', 'Error al obtener los posts');
    }
    dispatch(setRefreshing(false));
    dispatch(setLoading(false));
  };
}

export function deleteAllPosts() {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setLoading(true));
    dispatch(setPostsCreator([]));
    dispatch(setLoading(false));
  };
}

export function deletePost(postId: number,) {
  return async function (dispatch: Dispatch<any>) {
    const { posts } = store.getState();
    dispatch(setLoading(true));
    dispatch(setRefreshing(true));
    const newPosts = posts.filter(post => post.id !== postId);
    dispatch(setPostsCreator(newPosts));
    dispatch(setRefreshing(false));
    dispatch(setLoading(false));
  };
}

export function markAsFavorite(postId: number) {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setLoading(true));
    dispatch(setRefreshing(true));
    const { posts } = store.getState();
    const newPosts = posts.map(p => {
      if (p.id === postId) {
        return { ...p, isFavorite: !p.isFavorite };
      }
      return p;
    });
    dispatch(setPostsCreator(newPosts));
    dispatch(setRefreshing(false));
    dispatch(setLoading(false));
  };
}