import produce from 'immer';
import { AppState, PostDetail } from '../../store/types';

export function setPostDetail(state: AppState, payload: PostDetail): AppState {
  console.log("setPostDetail", payload);

  return produce(state, (draft) => {
    draft.postDetail = payload;
  });
}