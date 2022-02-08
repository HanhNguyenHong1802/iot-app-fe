import { TYPES } from "../actions/authenActions";
const initState = {
  token: "",
  user: {
    username: "",
    __v: null,
    _id: ""
  }

}

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state, token : action.response.token, user:action.response.user
      }
    case TYPES.REGISTER_SUCCESS:
      return {
        ...state, token : action.response.token, user:action.response.user
      }
    default: 
    return state
  }
}

