import {select, takeEvery, put} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {
  commentsRequest,
  commentsRequestSuccess,
  commentsRequestError,
} from './commentsSlice';

function* fetchComment() {
  const token = yield select(state => state.token.token);
  const id = yield select(state => state.comments.id);
  try {
    const request = yield axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    });
    const {data:
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
    } = request;
    const comments = children.map(item => item.data);
    yield put(commentsRequestSuccess({post, comments}));
  } catch (e) {
    yield put(commentsRequestError(e.message));
  }
}


export function* watchComments() {
  yield takeEvery(commentsRequest.type, fetchComment);
}

export const fetchComments = (id) => ({
  type: 'FETCH_COMMENTS',
  id,
});


