import { combineReducers } from 'redux';
import auth from './authenReducer';
import device from './deviceReducer'
const rootReducer = combineReducers({auth, device});

export default rootReducer;
