# Book List

### Create a books reducer
```js
export default function() {
return [
{title: 'Javascript: The Good Parts'},
{title: 'Harry Potter'},
{title: 'The Dark Tower'},
{title: 'Eloquent Ruby'}
]
}
```


#### Combine Book Reducers by using combineReducer
- Get a Global level keuy : books / value: BookReducer
```js
import { combineReducers } from 'redux';
import booksReducer from './reducer_books';

const rootReducer = combineReducers({
books: BooksReducer
})

export default rootReducer;
```


#### Create a Booklist Component
```js
import React, {Component} from 'react';

export default class BookList extends Component{
    renderList() {
        return this.props.books.map((book) => {
          return (
            <li key={book.title} className = "list-group-item">{book.title}</li>
          );
        });
      }

    render() {
      return(
          <ul className = "list-group col-sm-4">
              {this.renderList()}
          </ul>
      )
    }
  }
```

### Merge React and Redux - Library: React-Redux
- React-Redux : Bridge to both React Component and Redux reducer
- Define(Promote) component to a Container
- Create a new file call "Containers" and remove booklist.js into it

# Container(Promote component)
- We want the most parent component that cares about a particular piece of state to be a container!
- App: doesn't care when state changes (Only to say "please render bookLists to the page and please render bookListDetails to the page")
- BookLists: care about when the list of books change
- BookDetail: care about when the selected book changes


## Connect Redux and Container
- mapStateToProps(state): take application state as argument : What ever it return in this function will show up as props inside of BookList(class)
- connect: Take a function and Component to produce a Container

```js
function mapStateToProps(state){
return {
books: state.books // is equal to "this.props.books"
}
}
export default connect(mapStateToProps)(BookList);
```