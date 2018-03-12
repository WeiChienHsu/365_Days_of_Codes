import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
// Connect Book Reducer and Redux

const rootReducer = combineReducers({
    books: BooksReducer
})

export default rootReducer;