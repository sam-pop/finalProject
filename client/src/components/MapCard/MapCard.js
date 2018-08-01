import React, { Component } from "react";
// import { render } from "react-dom";
// import { Container } from '../Grid';
import { Map, Marker, TileLayer } from "react-leaflet";
import "./MapCard.css";

// const position = [29.131109, -36.311774];
class MapCard extends Component {
    constructor() {
        super()
        this.state = {
            lat: 29.131109,
            lng: -36.311774,
            zoom: 2
        }
    }
    render() {
        const position = [this.state.lat, this.state.lng];

  return (   
      <div className="leaflet-container">
    <Map center={position} zoom={this.state.zoom} style={{height: "100vh"}}>
      <TileLayer
        url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        id="mapbox.light"
        accessToken="pk.eyJ1IjoibWNhcDkiLCJhIjoiY2pqOG1wZ3UzMDZ2ZjNwcjNjMHBiM2RzOSJ9.hpn8KPTKIVENiO1zBJBJUA"
      />
      <Marker position={position} />
    </Map>
    </div>
  );
};
}

// render(<MapCard />);

export default MapCard;
