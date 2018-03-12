import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
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

// When state changed and Container will immidecately rerender:
// And the props.books will be changed as well
function mapStateToProps(state){
  return {
    books: state.books // is equal to "this.props.books"
  };
}

export default connect(mapStateToProps)(BookList);