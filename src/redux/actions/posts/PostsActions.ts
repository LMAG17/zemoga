import { AppState, Post } from '../../store/types';
import { ActionBuilder } from '../ActionBuilder';

export enum PostsActionTypes {
  getPosts = 'GET_POSTS',
}

export type SetPostsAction = ActionBuilder<
  PostsActionTypes.getPosts,
  Array<Post>,
  AppState
>;

export type PostsActions = SetPostsAction;