import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyBJStuWHujWCV9kTWgYUy3YOL87Ea0YtQc";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { videos : []};
    // Contents lists of Videos
    YTSearch({key: API_KEY, term: '徐嘉謙'}, videos => {
      this.setState({ videos }) // videos : videos 
    });
  }

  render() {
    return(
      <div>
        <SearchBar/>
        <VideoList videos = {this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))