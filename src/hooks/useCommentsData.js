import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequest} from '../store/comments/commentsSlice';

export const useCommentsData = (id) => {
  const post = useSelector(state => state.comments.post);
  const comments = useSelector(state => state.comments.comments);
  const status = useSelector(state => state.comments.status);
  const error = useSelector(state => state.comments.error);

  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(commentsRequest(id));
  }, [token]);
  return [post, comments, status, error];
};
