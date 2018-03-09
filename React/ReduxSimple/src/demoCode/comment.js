import React from 'react';
import ReactDOM from 'react-dom';


class Avatar extends React.Component{
  render() {
    return(
      <img calssName = "Avatar"
      src = {this.props.user.avatarUrl}
      alt = {this.props.user.name}
      />
    );
  }
}

class UserInfo extends React.Component {
  render(){
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">
          {this.props.user.name}
        </div>
      </div>
    );
  }
}

class Comment extends React.Component{
  render() {
    return(
      <div className = "Comment">
        <UserInfo user ={this.props.author} />
        <div className = "Comment-text">
          {this.props.text}
        </div>
        <div className = "Comment-date">
          {formatDate(this.props.date)}
          </div>
      </div>
    );
  }
}

function formatDate(date) {
  return date.toLocaleDateString();
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};



ReactDOM.render(<Comment
                  date = {comment.date}
                  text = {comment.text}
                  author = {comment.author}
                  />, 
                  document.getElementById('comment') );