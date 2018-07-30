import axios from "axios";

const GEOCODE_API_KEY = "";
const GEOCODE_URL = 
    "https://maps.googleapis.com/maps/api/geocode/json?key=" 
    + GEOCODE_API_KEY + "&address=";

const DARKSKY_API_KEY = "";
const DARKSKY_URL = 
    "https;//api.darksky.net/forecast/" 
    + DARKSKY_API_KEY; // add /<latitude>,<longitude>


const NEWS_API_KEY = "";
const NEWS_URL = 
    "https://newsapi.org/v2/everything?sources=reuters&apiKey=" 
    + NEWS_API_KEY; // add q=<coutnry> 

export default {
    // get weather for location
    getWeather: function(location) {

        axios.get(GEOCODE_URL + location)
            .then((response) => {

                if (response.data.status === 'ZERO_RESULTS') {
                    throw new Error("Unable to find that address.");
                }

                let latitude = response.data.results[0].geometry.location.lat;
                let longitude = response.data.results[0].geometry.location.lng;

                const weatherURL = DARKSKY_URL + `/${latitude},${longitude}`

                return axios.get(weatherURL);
            }).catch((e) => {

                if (e.code === 'ENOTFOUND') {
                    console.log('Unable to connect ot API servers.');
                } else {
                    console.log(e.message);
                }
            });
    },
    // get news for location
    getNews: function(location) {
        return axios.get();
    }
    // -------- mongo database calls ---------
};