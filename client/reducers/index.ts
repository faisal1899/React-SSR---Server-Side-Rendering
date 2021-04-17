import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import usersReducers from "./usersReducers";


export default combineReducers({
  users: usersReducers,
  auth: authReducer,
  admins: adminReducer,
});