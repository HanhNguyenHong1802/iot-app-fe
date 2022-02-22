export const TYPES = {
  LIST_DEVICE_REQUEST: 'LIST_DEVICE_REQUEST',
  LIST_DEVICE_SUCCESS: 'LIST_DEVICE_SUCCESS',
  LIST_DEVICE_ERROR: 'LIST_DEVICE_ERROR',
  DETAIL_DEVICE_REQUEST: 'DETAIL_DEVICE_REQUEST',
  DETAIL_DEVICE_SUCCESS: 'DETAIL_DEVICE_SUCCESS',
  DETAIL_DEVICE_ERROR: 'DETAIL_DEVICE_ERROR',
  ADD_DEVICE_REQUEST: 'ADD_DEVICE_REQUEST',
  ADD_DEVICE_SUCCESS: 'ADD_DEVICE_SUCCESS',
  ADD_DEVICE_ERROR: 'ADD_DEVICE_ERROR',
  DELETE_DEVICE_REQUEST: 'DELETE_DEVICE_REQUEST',
  DELETE_DEVICE_SUCCESS: 'DELETE_DEVICE_SUCCESS',
  DELETE_DEVICE_ERROR: 'DELETE_DEVICE_ERROR',
  UPDATE_DEVICE_REQUEST: 'UPDATE_DEVICE_REQUEST',
  UPDATE_DEVICE_SUCCESS: 'UPDATE_DEVICE_SUCCESS',
  UPDATE_DEVICE_ERROR: 'UPDATE_DEVICE_ERROR'
}

export function getList() {
  return {
    type: TYPES.LIST_DEVICE_REQUEST,
  }
}

export function getListSuccess(response) {
  return {
    type: TYPES.LIST_DEVICE_SUCCESS, response: response
  }
}

export function getDetail(params) {
  return {
    types: TYPES.LIST_DEVICE_REQUEST, payload: params
  }
}

export function getDetailSuccess(response) {
  return {
    types: TYPES.DETAIL_DEVICE_SUCCESS, response: response
  }
}

export function addDevice(params) {
  return {
    type: TYPES.ADD_DEVICE_REQUEST,
    payload: params
  }
}

export function addDeviceSuccess(response) {
  return {
    type: TYPES.ADD_DEVICE_SUCCESS, response: response
  }
}

export function deleteDevice(params) {
  return {
    type: TYPES.DELETE_DEVICE_REQUEST,
    payload: params
  }
}

export function deleteDeviceSuccess(response) {
  return {
    type: TYPES.DELETE_DEVICE_SUCCESS, response: response
  }
}

export function updateDevice(params) {
  return {
    type: TYPES.UPDATE_DEVICE_REQUEST,
    payload: params
  }
}

export function updateDeviceSuccess(response) {
  return {
    type: TYPES.UPDATE_DEVICE_SUCCESS, response: response
  }
}

