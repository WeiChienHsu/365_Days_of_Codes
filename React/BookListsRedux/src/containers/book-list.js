import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

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

// Binding selectBook Action 
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch) // is equal to "this.props.selectBook"
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);