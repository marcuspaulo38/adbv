import { all, fork } from 'redux-saga/effects';

import loadProducts from './calculator/saga';

export default function* rootSaga(getState) {
  yield all([
    fork(loadProducts)
  ]);
}
