import { Dispatch } from 'react';
import ServiceInteractor from '../../../services/ServiceInteractor';
import { setPostDetailCreator } from '../../actions/postDetail/PostDetailActionsCreators';

export function getPostDetail(postId: Number, userId: Number) {
  return async function (dispatch: Dispatch<any>) {
    const postData = await ServiceInteractor.getPost(postId);
    const userData = await ServiceInteractor.getUserDataByUserId(userId);
    const comments = await ServiceInteractor.getCommentsByPostId(postId);
    const post = { postData, userData, comments };
    dispatch(
      setPostDetailCreator(post),
    );
  };
}