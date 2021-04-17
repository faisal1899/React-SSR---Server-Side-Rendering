import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from 'Reducers/index';

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3050',
    headers: { cookie: req.get('cookie') || '' }
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
}