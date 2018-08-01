import L from 'leaflet';

const iconMarker = new L.Icon({
    iconUrl: require('../../assets/images/marker9.png'),
    iconAnchor: [18,34],
    popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    iconSize: new L.Point(30, 30),
});

export { iconMarker };