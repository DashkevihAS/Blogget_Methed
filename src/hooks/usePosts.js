import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequest} from '../store/posts/postsSlice';

export const usePost = () => {
  const posts = useSelector(state => state.posts.data);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(postRequest());
  }, [token]);
  return [posts];
};


