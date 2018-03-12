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


***

#
Action Creator

![](/source.png)


## Creare a Action Creator Function
```js
export function selectBook(book) {
console.log("A Book has been selected", book.title);
}
```


## Binding selectBook Action to the bookList Container
#### mapDispatchToProps(dispatch) : 派遣
Anything returned from this function will end up as props on the Booklist container

#### bindActionCreators({selectBook: selectBook}, dispatch):
Whenever selectBook is called, the result should be passed to all of our reducers.

#### export it
It needs to know about this new dispatch method, selectBook. Make it available as props.

```js
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Binding selectBook Action
function mapDispatchToProps(dispatch) {
return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
```

### Call Action Creator by EventHandler
```js
class BookList extends Component{
renderList() {
return this.props.books.map((book) => {
return (
<li
key={book.title}
onClick = {() => this.props.selectBook(book)}
className = "list-group-item">{book.title}</li>
);
});
}
```

- There is an Error as below:
```
Uncaught Error: Actions must be plain objects.
Use custom middleware for async actions.
```

### Change an Action to an Object
```js
return {
type: 'BOOK_SELECTED',
payload: book
}
```

### Reducer Active Book
- State argument here is not application state, only the state this reducer is responsible for.
- Need to give a default value for state (null), couldn't return a undefined value.

```js
export default function(state = null, action) {
switch(action.type) {
case 'BOOK_SELECTED':
return action.payload;
}
return state
}
```

- Connect Book Active Reducer to Redux

```js
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_actvie_book';
// Connect Book Reducer and Redux

const rootReducer = combineReducers({
books: BooksReducer,
activeBook: ActiveBook
})
```

### Make a Book Detail Component
- Import Connect from Redux
```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
```

- make mapStateToProps function
- Inside function, return book: state.activeBook(based on the name in Reducer defined)

```js
function mapStateToProps(state) {
return {
book: state.activeBook
};
}

```

- Connect (mapStateToProps)(Container)
```js
export default connect(mapStateToProps)(BookDetail);
```

- Used porp.book in render conetent
```js
class BookDetail extends Component{
render() {
return (
<div>
<h3> Details for:</h3>
<div>{this.props.book.title}</div>
</div>
)
}
}
```


### Face an Error
```
Uncaught TypeError:
Cannot read property 'title' of null
```

Since We define a default null value of init State in Active Book Reducer, at first it will automatically return a null to our prop.book

```js
export default function(state = null, action) {
switch(action.type) {
case 'BOOK_SELECTED':
return action.payload;
}
return state
}
```
- Add an initial Check in our Container!!!!
```js
class BookDetail extends Component{
render() {
if(!this.props.book) {
return <div>Select a book to get Statred.</div>
}
```