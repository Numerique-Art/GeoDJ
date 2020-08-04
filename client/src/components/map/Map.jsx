import React, { Component } from 'react';
import { Map as Leaflet, TileLayer } from 'react-leaflet'

class MapLeaflet extends Component {

  render(){
    const position = [11.572076, 43.145645];
    return (
      <Leaflet id="map" center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Leaflet>
    );

  }

}

export default MapLeaflet;
