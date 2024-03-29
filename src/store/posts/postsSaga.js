import {select, put, takeLatest} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {
  postRequest,
  postRequestSuccess,
  postRequestError,
  clearSearch,
} from './postsSlice';

function* fetchPosts() {
  const token = yield select(state => state.token.token);
  const page = yield select(state => state.posts.page);
  const aft = yield select(state => state.posts.after);
  const isLast = yield select(state => state.posts.isLast);
  const search = yield select(state => state.posts.search);

  if (!token || isLast) return;
  try {
    const request = yield axios(page ?
      `${URL_API}/${page}?limit=10&${aft ? `after=${aft}` : ''}` :
      `${URL_API}/search?q=${search}&limit=10&${aft ? `after=${aft}` : ''}`,
    {
      headers: {
        Authorization: `bearer ${token}`
      },
    });
    const after = request.data.data.after;
    const children = request.data.data.children.map(item => item.data);

    yield put(postRequestSuccess({children, after}));
    yield page && put(clearSearch());
  } catch (e) {
    yield put(postRequestError(e.message));
  }
}


export function* watchPosts() {
  yield takeLatest(postRequest.type, fetchPosts);
}
