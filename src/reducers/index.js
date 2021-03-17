import { combineReducers } from 'redux';
import productosReducer from './productoReducer';

export default combineReducers({
    productos: productosReducer
});