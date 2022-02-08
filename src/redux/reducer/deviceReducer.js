import { TYPES } from "../actions/deviceAction";

const initState = {
}

export default function deviceReducer(state = initState, action) {
  switch (action.type) {
    case TYPES.LIST_DEVICE_SUCCESS:
      return {
        ...state, state: action.response
      }
    default: 
    return state
  }
}