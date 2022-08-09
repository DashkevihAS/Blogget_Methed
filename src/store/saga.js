import {all} from 'redux-saga/effects';
import {watchComments} from './comments/commentsSaga';
import {watchSearch} from './search/searchSaga';


export default function* rootSaga() {
  yield all([
    watchSearch(),
    watchComments()
  ]);
}

