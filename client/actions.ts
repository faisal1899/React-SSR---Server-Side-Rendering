import axios from "axios";
import axiosObj from 'axios';

const api = axiosObj.create({
  baseURL: 'http://localhost:3050'
})

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch) => {
  const res = await api.get('users');
  dispatch({
    type: FETCH_USERS,
    payload: res?.data
  });
}