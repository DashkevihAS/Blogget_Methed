import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../store/posts/postsAction';

export const usePost = () => {
  const posts = useSelector(state => state.posts.data);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);
  return [posts];
};


