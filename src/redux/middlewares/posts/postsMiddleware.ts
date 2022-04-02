import { Dispatch } from 'react';
import ServiceInteractor from '../../../services/ServiceInteractor';
import { setPostsCreator } from '../../actions/posts/PostsActionsCreators';
import { setRefreshing } from '../refreshing/refreshingMiddleware';
import { store } from '../../../redux/store';
export function getPosts() {
  return async function (dispatch: Dispatch<any>) {
    console.log("getPosts");

    const posts = await ServiceInteractor.getPosts();
    dispatch(setRefreshing(true));
    dispatch(
      setPostsCreator(posts),
    );
    dispatch(setRefreshing(false));
  };
}

export function deleteAllPosts() {
  return async function (dispatch: Dispatch<any>) {
    dispatch(
      setPostsCreator([]),
    );
  };
}

export function deletePost(postId: number,) {
  return async function (dispatch: Dispatch<any>) {
    const { posts } = store.getState();
    const newPosts = posts.filter(post => post.id !== postId);
    dispatch(setRefreshing(true));
    dispatch(
      setPostsCreator(newPosts),
    );
    dispatch(setRefreshing(false));
  };
}

export function markAsFavorite(postId: number) {
  return async function (dispatch: Dispatch<any>) {
    const { posts } = store.getState();
    const newPosts = posts.map(p => {
      if (p.id === postId) {
        return { ...p, isFavorite: !p.isFavorite };
      }
      return p;
    });
    dispatch(setRefreshing(true));
    dispatch(
      setPostsCreator(newPosts),
    );
    dispatch(setRefreshing(false));
  };
}