import { FETCH_CURRENT_USERS } from "../actions";

export default (state = null, action) => {
  switch (action?.type) {
    case FETCH_CURRENT_USERS:
      return action.payload || false;
    default:
      return state;
  }
} 