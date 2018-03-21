import React, {Component} from 'react';

export default class GoogleMap extends Component{
  componentDidMount() {
    const google = window.google;
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  
  render(){
    return <div ref = "map" />
  }

}