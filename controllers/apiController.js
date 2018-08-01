const axios = require("axios");

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;
const DARKSKY_URL = 
    "https://api.darksky.net/forecast/" 
    + DARKSKY_API_KEY; // add /<latitude>,<longitude>

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_URL = 
    "https://newsapi.org/v2/everything?sources=reuters&apiKey=" 
    + NEWS_API_KEY; // add q=<coutnry> 

// Defining methods for the apiController for externall api calls
module.exports = {
    getWeather: function(req, res) {
        const weatherURL = DARKSKY_URL + `/${req.params.lat},${req.params.lng}`;

        console.log(`Weather URL: ${weatherURL}`);

        return axios.get(weatherURL);
    },
    getNews: function(req, res) {
        const newsURL = NEWS_URL + `q=${req.params.location}`     

        console.log(`News URL: ${newsURL}`);

        return axios.get(newsURL + req.params.location);
    }  
};
