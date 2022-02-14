import { call, put, takeLatest } from 'redux-saga/effects';
import getUserDevices from '../../../api/devices/getUserDevices';
import getDeviceById from '../../../api/devices/getDeviceById';
import { getDetailSuccess, getListSuccess, TYPES } from '../actions/deviceAction';

function* getListSaga(action) {
  try {
    const response = yield call(getUserDevices)
    if (response) {
      yield put(getListSuccess(response))
    }
  } catch (error) {

  }
}

function* getDetailSaga(action) {
  try {
    const response = yield call(getDeviceById(action.payload))
    if (response) {
      yield put(getDetailSuccess(response))
    }
  } catch (error) {

  }
}

export default [
  takeLatest(TYPES.LIST_DEVICE_REQUEST, getListSaga),
  takeLatest(TYPES.DETAIL_DEVICE_REQUEST, getDetailSaga),
];