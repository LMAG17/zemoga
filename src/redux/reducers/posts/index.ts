import produce from 'immer';
import { AppState, Post } from '../../store/types';

export function setPosts(state: AppState, payload: Array<Post>): AppState {
  return produce(state, (draft) => {
    draft.posts = payload;
  });
}