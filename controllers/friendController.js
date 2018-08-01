const db = require("../model");
const axios = require("axios");

const GEOCODE_API_KEY = "";
const GEOCODE_URL = 
    "https://maps.googleapis.com/maps/api/geocode/json?key=" 
    + GEOCODE_API_KEY + "&address="; // add <location>

module.exports = {
  findAll: function(req, res) {
    db.Friend.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Friend.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // make api call to geocode to get lat & lng from provided location
    axios.get(GEOCODE_URL + req.body.location)
      .then(response => {
        if (response.data.status === 'ZERO_RESULTS') {
          throw new Error("Unable to find that address.");
        }

        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;

        // Friend schema location field format
        const location = [req.body.location, [lat, lng]];

        // Create Friend in db
        db.Friend.create({
          name: req.body.name,
          profile_pic: req.body.profile_pic,
          location: location
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

      }).catch(error => {
        console.log(error);
      });
  },
  update: function(req, res) {
    db.Friend.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Friend.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
