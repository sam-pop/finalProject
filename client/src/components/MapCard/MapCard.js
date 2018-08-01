import React, { Component } from "react";
// import { render } from "react-dom";
// import { Container } from '../Grid';
import { Map, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet';
import "./MapCard.css";
import { iconMarker } from './Icon';

// const position = [29.131109, -36.311774];
class MapCard extends React.Component {
  constructor() {
    super()
    this.state = {
      coordinates: [],
      lat: 29.131109,
      lng: -36.311774,
      zoom: 2
    }
  }
  addMarker = (e) => {
    const { markers } = this.state
    markers.push(e.latlng)
    this.setState({ markers })
  }
  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div className="leaflet-container">
        <Map center={position} zoom={this.state.zoom} style={{ height: "100vh" }}>
          <TileLayer
            url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
            attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
            id="mapbox.light"
            accessToken="pk.eyJ1IjoibWNhcDkiLCJhIjoiY2pqOG1wZ3UzMDZ2ZjNwcjNjMHBiM2RzOSJ9.hpn8KPTKIVENiO1zBJBJUA"
          />
          {/* {this.state.markers.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position} icon={iconMarker}>
              <Popup>
                <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
              </Popup>
            </Marker>
          )} */}
          <Marker position={[51.528308, -0.3817797]} icon={iconMarker} />
        </Map>
      </div>
    );
  };
}

// render(<MapCard />);

export default MapCard;