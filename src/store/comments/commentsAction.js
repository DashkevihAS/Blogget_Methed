import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';
export const COMMENTS_CLEAR_STATUS = 'COMMENTS_CLEAR_STATUS';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentsRequestSuccess = (data) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  data,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsClearStatus = () => ({
  type: COMMENTS_CLEAR_STATUS,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;
  dispatch(commentsRequest());
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      ({data:
        [
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {
              children,
            },
          },
        ]
      }) => {
        const comments = children.map(item => item.data);
        const data = [post, comments];
        dispatch(commentsRequestSuccess(data));
      },
    )
    .catch((err) => {
      // console.error(err);
      dispatch(commentsRequestError(err));
    });
};
