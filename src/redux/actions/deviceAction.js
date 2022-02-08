export const TYPES = {
  LIST_DEVICE_REQUEST : 'LIST_DEVICE_REQUEST',
  LIST_DEVICE_SUCCESS : 'LIST_DEVICE_SUCCESS',
  LIST_DEVICE_ERROR : 'LIST_DEVICE_ERROR',
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