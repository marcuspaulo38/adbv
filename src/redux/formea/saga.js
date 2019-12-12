import { all, takeEvery, put, fork, delay } from 'redux-saga/effects';
import actions from './actions';

import mockCategories from '../../helpers/calculator/products/sample_api_data';

let fakeApiCall = true;

export function* loadProducts() {
  yield takeEvery(actions.LOAD_PRODUCTS, function*() {
    yield delay(5000);
    if (fakeApiCall) {
      yield put({
        type: actions.LOAD_PRODUCTS_SUCCESS,
        products: mockCategories
      });
    } else {
//      let rawCategories = yield call('<url>');
//      processRawData(rawCategories);
      yield put({ type: actions.LOAD_PRODUCTS_ERROR });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(loadProducts)
  ])
};
