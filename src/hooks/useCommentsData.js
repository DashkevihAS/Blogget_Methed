import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
  const commentsData = useSelector(state => state.comments.data);
  const status = useSelector(state => state.comments.status);
  const error = useSelector(state => state.comments.error);

  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);
  return [commentsData, status, error];
};
