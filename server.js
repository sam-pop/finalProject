const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;
// Initialize express app
const app = express();

// Initialize body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// init and config our express session
app.use(
  session({
    secret: "big balagan",
    resave: true,
    saveUninitialized: true
  })
);

// passport init
app.use(passport.initialize());
app.use(passport.session());

// Routes (API and view)
require('./routes/api_routes')(app);
// app.use(routes);

// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local newsScraper database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/intheloop";
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
