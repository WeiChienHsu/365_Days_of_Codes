import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_actvie_book';
// Connect Book Reducer and Redux

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
})

export default rootReducer;