# VideoSelect React App
![Structure](./structure.png)


## Index (App) - stateful 


## SearchBar - stateless


## VidoeList - stateless


## VidoeListItem - stateless


## VideoDetail - stateless


## How to Update Selected Video
#### APP
- Init Video when use YTSearch not in the constructor
- State: {selectedVideo : video}
```js
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
```

- onVideeoSelect function: to update the selected Video state by passing to the <VideoDetail> Component
```js
 <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo : selectedVideo}) }
        // Pass onVideoSelect as property into VideoList
        videos = {this.state.videos}/>
```

- Update the Video Detail by send state.selectedVideo data into <VidoeDetail> component
```js
 <VideoDetail video = {this.state.selectedVideo}/>
```
### Video List
- Continuouly pass the onVideoSelect function to VideoListItem
```js
onVideoSelect = {props.onVideoSelect} 
```

### Video List Item
- 1. Add onVideoSelect into the props(ES6 syntax)
- 2. Add onClick into li tag to trigger onVideoSelect function
- 3. Run the function and put props of video into onVideoSelect function

```js
const VideoListItem = ({video, onVideoSelect}) => {

 <li onClick = {() => onVideoSelect(video)} className = "list-group-item">
```

## How to Connect SearchBar and App(with otehrs Components)