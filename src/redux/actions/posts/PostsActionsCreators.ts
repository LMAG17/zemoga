import { setPosts } from '../../reducers/posts';
import { Post } from '../../store/types';
import { PostsActionTypes, SetPostsAction } from './PostsActions';

export const setPostsCreator = (payload: Array<Post>): SetPostsAction => ({
  type: PostsActionTypes.getPosts,
  payload,
  reducer: setPosts,
});