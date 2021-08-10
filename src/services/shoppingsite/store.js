import {createStore} from 'redux';
import cartReducer from './reducers';

const store = createStore(cartReducer);

export default store;