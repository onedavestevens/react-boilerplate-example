// import { take, call, put, select } from 'redux-saga/effects';
import { ADD_LINK } from './constants';
import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { addLinkSucceeded } from '../LinkListContainer/actions';
import { goBack } from 'react-router-redux';

function* addLink(action) {
  yield put(addLinkSucceeded(action.link));
  yield put(goBack());
}

// Individual exports for testing
export function* addLinkSaga() {
  yield* takeLatest(ADD_LINK, addLink);
}

// implement ADD_LINK, have it yield put LinkListContainer's ADD_LINK_SUCCEEDED action.

// All sagas to be loaded
export default [
  addLinkSaga,
];
