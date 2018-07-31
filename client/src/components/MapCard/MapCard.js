import React from "react";
import { render } from 'react-dom';
import {Map, Marker, TileLayer} from 'react-leaflet';
import "./MapCard.css";

const position = [29.131109, -36.311774];
const MapCard = (
   <Map center={position} zoom={2}>
   <TileLayer
        url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
        attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        id= 'mapbox.light'
        accessToken= 'pk.eyJ1IjoibWNhcDkiLCJhIjoiY2pqOG1wZ3UzMDZ2ZjNwcjNjMHBiM2RzOSJ9.hpn8KPTKIVENiO1zBJBJUA'
        />
        <Marker position={position}>
        </Marker>
        </Map>

)

// render(MapCard, document.getElementById('map-container'));

export default MapCard;