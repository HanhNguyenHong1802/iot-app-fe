import { all, takeEvery } from '@redux-saga/core/effects';
import authenSaga from './authenSaga';
import deviceSaga from './deviceSaga';

export default function* rootSaga() {
  yield all([
    ...authenSaga, ...deviceSaga
  ]);
}
