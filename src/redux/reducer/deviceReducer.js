import { TYPES } from "../actions/deviceAction";

const initState = {
}

export default function deviceReducer(state = initState, action) {
  switch (action.type) {
    case TYPES.LIST_DEVICE_SUCCESS:
      return {
        ...state, state: action.response
      }

    case TYPES.DETAIL_DEVICE_SUCCESS:
      return {
        ...state, state: action.response
      }

    case TYPES.ADD_DEVICE_SUCCESS:
      return {
        ...state, state: action.response
      }
    case TYPES.DELETE_DEVICE_SUCCESS:
      return {
        ...state, state: action.response
      }
    case TYPES.UPDATE_DEVICE_SUCCESS:
      return {
        ...state, state: action.response
      }
    default:
      return state
  }
}