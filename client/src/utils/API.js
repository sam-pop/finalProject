import axios from "axios";

export default {
  // --------- external api calls ----------
  // Gets weather for location
  getWeather: function(lat, lng) {
    return (axios.get("/api/weather/" + lat + "/" + lng));
  },
  // Gets news for location
  getNews: function(location) {
    return axios.get("/api/news/" + location);
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
