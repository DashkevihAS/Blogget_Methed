import {put, select, takeLatest} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {
  searchRequestError,
  searchRequestSuccess,
  SEARCH_REQUEST
} from './searchAction';

function* fetchSearch({search}) {
  const token = yield select(state => state.token.token);
  const aft = yield select(state => state.search.after);
  try {
    // eslint-disable-next-line max-len
    const request = yield axios(`${URL_API}/search?q=${search}&limit=10&${aft ? `after=${aft}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    });
    const after = request.data.data.after;
    const children = request.data.data.children.map(item => item.data);
    yield put(searchRequestSuccess({children, after}));
    console.log({children, after});
  } catch (e) {
    yield put(searchRequestError(e));
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}

