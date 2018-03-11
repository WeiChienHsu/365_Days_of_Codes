import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/vedio_detail';

const API_KEY = "AIzaSyBJStuWHujWCV9kTWgYUy3YOL87Ea0YtQc";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      videos : [],
      selectedVideo: null 
    };

    // Contents lists of Videos and setup Default video
    YTSearch({key: API_KEY, term: '徐嘉謙'}, videos => {
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      })  
    });
  }

  render() {
    return(
      <div>
        <SearchBar/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo : selectedVideo}) }
        // Pass onVideoSelect as property into VideoList
        videos = {this.state.videos}/>

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))