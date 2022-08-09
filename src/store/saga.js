import {all} from 'redux-saga/effects';
import {watchComments} from './comments/commentsSaga';
import {watchPosts} from './posts/postsSaga';
import {watchSearch} from './search/searchSaga';


export default function* rootSaga() {
  yield all([
    watchSearch(),
    watchComments(),
    watchPosts(),
  ]);
}
