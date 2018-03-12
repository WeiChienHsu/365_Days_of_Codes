import { combineReducers } from 'redux';
import booksReducer from './reducer_books';

const rootReducer = combineReducers({
    book: booksReducer
})

export default rootReducer;