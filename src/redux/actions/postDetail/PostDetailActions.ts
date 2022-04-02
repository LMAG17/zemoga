import { AppState, PostDetail } from '../../store/types';
import { ActionBuilder } from '../ActionBuilder';

export enum PostDetailActionTypes {
  getPosts = 'GET_POST_DETAIL',
}

export type SetPostDetailAction = ActionBuilder<
  PostDetailActionTypes.getPosts,
  PostDetail,
  AppState
>;

export type PostDetailActions = SetPostDetailAction;