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
    + NEWS_API_KEY + "q="; // add <coutnry> 

// Defining methods for the apiController for externall api calls
export default {
    getWeather: function(req, res) {
        axios.get(GEOCODE_URL + req.params.location)
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
    getNews: function(req, res) {
        return axios.get(NEWS_URL + req.params.location);
    }  
};