import { setPostDetail } from '../../reducers/postDetail';
import { PostDetail } from '../../store/types';
import { PostDetailActionTypes, SetPostDetailAction } from './PostDetailActions';

export const setPostDetailCreator = (payload: PostDetail): SetPostDetailAction => ({
  type: PostDetailActionTypes.getPosts,
  payload,
  reducer: setPostDetail,
});