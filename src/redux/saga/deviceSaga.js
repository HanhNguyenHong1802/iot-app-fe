import { call, put, takeLatest } from 'redux-saga/effects';
import getUserDevices from '../../../api/devices/getUserDevices';
import { getListSuccess, TYPES } from '../actions/deviceAction';

function* getListSaga(action) {
  try {
    const response = yield call(getUserDevices)
    if(response){
      yield put(getListSuccess(response))
    }
  } catch (error) {
    
  }
}

export default [
  takeLatest(TYPES.LIST_DEVICE_REQUEST, getListSaga),
];