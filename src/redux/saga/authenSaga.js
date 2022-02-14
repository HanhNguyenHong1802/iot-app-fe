import { call, put, takeLatest } from 'redux-saga/effects';
import login from '../../../api/authen/login';
import signup from '../../../api/authen/signup';
import { loginSuccess, signupSuccess, TYPES } from '../actions/authenActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logoutUser } from '../../../api/authen/logout';

function* loginSaga(action) {
  try {
    const response = yield call(login, action.payload)
    if (response) {
      yield put(loginSuccess(response))
      yield AsyncStorage.setItem('@currentuser', response?.token)
      yield AsyncStorage.setItem('@userid', response?.user?._id)
    }
  } catch (error) {

  }
}

function* signupSaga(action) {
  try {
    const response = yield call(signup, action.payload)
    if (response) {
      yield put(signupSuccess(response))
      yield AsyncStorage.setItem('@currentuser', response?.token)
      yield AsyncStorage.setItem('@userid', response?.user?._id)
    }
  } catch (error) {

  }
}

function* logoutSaga() {
  try {
    const response = yield call(logoutUser)
    yield AsyncStorage.removeItem('@currentuser')
    yield AsyncStorage.removeItem('@userid')
  } catch (error) {

  }
}
export default [
  takeLatest(TYPES.LOGIN_REQUEST, loginSaga),
  takeLatest(TYPES.REGISTER_REQUEST, signupSaga),
  takeLatest(TYPES.LOGOUT_REQUEST, logoutSaga)
];