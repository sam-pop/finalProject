import axios from "axios";

export default {
  // --------- external api calls ----------
  // Gets weather for location
  getWeather: function(lat, lng) {
    const DARKSKY_API_KEY = "e05c706e7ef08da86d7958131e737b10";
    const DARKSKY_URL = "https://api.darksky.net/forecast/" + DARKSKY_API_KEY; // add /<latitude>,<longitude>

    return axios.get(DARKSKY_URL + `/${lat},${lng}`);
  },
  // Gets news for location
  getNews: function(location) {
    const NEWS_API_KEY = "277364822b97433ebb96c7413e3036a0";
    const NEWS_URL = "https://newsapi.org/v2/everything?sources=reuters&apiKey=" + NEWS_API_KEY; // add &q=<coutnry>

    return axios.get(NEWS_URL + `&q=${location}`);
  },

  // -------- mongo database calls ---------

  //FRIEND API CALLS
  // Gets all friends
  getFriends: function() {
    return axios.get("/api/friends");
  },
  // Gets the friend with the given id
  getFriend: function(id) {
    return axios.get("/api/friends/" + id);
  },
  // Deletes the friend with the given id
  deleteFriend: function(id) {
    return axios.delete("/api/friends/" + id);
  },
  // Saves a friend to the database
  saveFriend: function(friendData) {
    return axios.post("/api/friends", friendData);
  },

  //USER API CALLS
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the friend with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the friend with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
