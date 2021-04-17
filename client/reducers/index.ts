import { combineReducers } from 'redux';
import adminReducer from 'Reducers/adminReducer';
import authReducer from 'Reducers/authReducer';
import usersReducers from 'Reducers/usersReducers';

export default combineReducers({
  users: usersReducers,
  auth: authReducer,
  admins: adminReducer,
});