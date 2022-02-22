import { call, put, takeLatest } from 'redux-saga/effects';
import addDeviceByIdFetch from '../../../api/devices/addDeviceById';
import deleteDeviceById from '../../../api/devices/deleteDeviceById';
import getDeviceById from '../../../api/devices/getDeviceById';
import getUserDevices from '../../../api/devices/getUserDevices';
import updateDeviceByIdFetch from '../../../api/devices/updateDeviceById';
import { addDeviceSuccess, deleteDeviceSuccess, getDetailSuccess, getList, getListSuccess, TYPES, updateDeviceSuccess } from '../actions/deviceAction';

function* getListSaga() {
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

function* addDeviceSaga(action) {
  try {
    const response = yield call(addDeviceByIdFetch(action.payload))
    if (response) {
      // yield put(addDeviceSuccess(response))
      yield put({type: TYPES.LIST_DEVICE_REQUEST})
    }
  } catch (error) {

  }
}

function* deleteDeviceSaga(action) {
  try {
    const response = yield call(deleteDeviceById(action.payload))
    if (response) {
      yield put(getList)
    }
  } catch (error) {

  }
}

function* updateDeviceSaga(action) {
  try {
    const response = yield call(updateDeviceByIdFetch(action.payload))
    if (response) {
      yield put(updateDeviceSuccess(response))
    }
  } catch (error) {

  }
}
export default [
  takeLatest(TYPES.LIST_DEVICE_REQUEST, getListSaga),
  takeLatest(TYPES.DETAIL_DEVICE_REQUEST, getDetailSaga),
  takeLatest(TYPES.ADD_DEVICE_REQUEST, addDeviceSaga),
  takeLatest(TYPES.DELETE_DEVICE_REQUEST, deleteDeviceSaga),
  takeLatest(TYPES.UPDATE_DEVICE_REQUEST, updateDeviceSaga)
];